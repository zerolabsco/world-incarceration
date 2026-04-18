import * as d3 from "https://cdn.jsdelivr.net/npm/d3@7/+esm";
import { countries } from "../data/countries.js";
import { isoNumericToAlpha3 } from "../data/iso-numeric-to-alpha3.js";
import {
	initMap, applyGradient, resetGradient,
	toggleLabels, setClickHandler, getCountryPaths,
} from "./map/choropleth.js";
import { initTooltip, attachTooltip } from "./map/tooltip.js";
import { initZoom, resetZoom } from "./map/zoom.js";
import { renderBarChart } from "./charts/bar.js";
import { renderPieChart } from "./charts/pie.js";
import { showCountryModal } from "./ui/modal.js";
import { initCompare } from "./ui/compare.js";
import { initControls, getTop5, formatMetricValue } from "./ui/controls.js";

// Tracks which metric is currently active for the graph modal
let currentMetric = "pop";

async function main() {
	const { svg, mapGroup } = await initMap(
		"#map-container", countries, isoNumericToAlpha3
	);

	// --- Phase 3: tooltip ------------------------------------------------
	initTooltip();
	attachTooltip(getCountryPaths(), (event, d) => {
		const alpha3 = isoNumericToAlpha3[+d.id];
		const name = alpha3 && countries[alpha3] ? countries[alpha3].country : null;
		return name ? `<strong>${name}</strong>` : null;
	});

	// --- Phase 3: zoom ---------------------------------------------------
	initZoom(svg, mapGroup);

	// --- Phase 3: country click → detail modal ---------------------------
	setClickHandler((event, d) => {
		const alpha3 = isoNumericToAlpha3[+d.id];
		if (alpha3 && countries[alpha3]) showCountryModal(countries[alpha3]);
	});

	// --- Phase 5: metric buttons, label toggle, reset --------------------
	initControls(
		(metricKey) => {
			currentMetric = metricKey;
			applyGradient(metricKey);
			// Refresh pie if graph modal is already open
			if (document.getElementById("graphModal").classList.contains("show")) {
				_renderPie();
			} else {
				// Clear stale chart so it re-renders fresh on next open
				document.getElementById("myChart2").innerHTML = "";
			}
		},
		() => toggleLabels(),
		() => { resetGradient(); resetZoom(); }
	);

	// --- Phase 5: compare modal ------------------------------------------
	initCompare(countries);

	// --- Phase 4: graph modal — render pie on first open -----------------
	document.getElementById("graphModal").addEventListener("show.bs.modal", () => {
		if (!document.querySelector("#myChart2 svg")) {
			_renderPie();
		}
	});
}

// Renders (or re-renders) the pie chart for the current metric
function _renderPie() {
	document.getElementById("myChart2").innerHTML = "";
	document.getElementById("myNextChart").style.display = "none";
	document.getElementById("myNextChart").innerHTML = "";
	document.getElementById("myChart2").style.display = "";
	renderPieChart("#myChart2", getTop5(countries, currentMetric), _showDrilldown);
}

// Replaces pie with a per-country metrics bar chart
function _showDrilldown(alpha3) {
	const c = countries[alpha3];
	const metricKeys   = ["pop",        "rate",       "females",  "juveniles",  "occupancy"];
	const metricLabels = ["Population", "Rate/100k",  "% Female", "% Juvenile", "Occupancy"];

	const data = metricKeys.map((key, i) => {
		const val = c[key];
		if (typeof val !== "number" || isNaN(val)) return null;

		const allVals = Object.values(countries)
			.map(co => co[key])
			.filter(v => typeof v === "number" && !isNaN(v));
		const max = Math.max(...allVals);

		return {
			label:        metricLabels[i],
			value:        (val / max) * 100,
			displayValue: formatMetricValue(val, key),
		};
	}).filter(Boolean);

	document.getElementById("myChart2").style.display = "none";
	document.getElementById("myNextChart").style.display = "block";

	renderBarChart("#myNextChart", data, {
		title: c.country,
		onBack: () => _renderPie(),
	});
}

main();
