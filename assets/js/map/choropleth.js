import * as d3 from "https://cdn.jsdelivr.net/npm/d3@7/+esm";
import * as topojson from "https://cdn.jsdelivr.net/npm/topojson-client@3/+esm";

const WIDTH = 960;
const HEIGHT = 500;
const DEFAULT_FILL = "rgba(36, 171, 72, 0.8)";
const NO_DATA_FILL = "#444";

// Module-level state shared across exported functions
let svg, mapGroup, projection, pathGen, features;
let _countries, _isoLookup;
let _clickHandler = null;

export async function initMap(container, countries, isoLookup) {
	_countries = countries;
	_isoLookup = isoLookup;

	svg = d3.select(container)
		.append("svg")
		.attr("viewBox", `0 0 ${WIDTH} ${HEIGHT}`)
		.attr("preserveAspectRatio", "xMidYMid meet")
		.style("width", "100%")
		.style("height", "100%");

	mapGroup = svg.append("g").attr("id", "map-layer");

	const world = await d3.json("./assets/data/world-110m.json");
	const geojson = topojson.feature(world, world.objects.countries);
	features = geojson.features;

	projection = d3.geoNaturalEarth1().fitSize([WIDTH, HEIGHT], geojson);
	pathGen = d3.geoPath().projection(projection);

	mapGroup.selectAll("path")
		.data(features)
		.join("path")
		.attr("class", "country")
		.attr("d", pathGen)
		.attr("fill", d => _fillForFeature(d, null, null))
		.attr("stroke", "#111")
		.attr("stroke-width", 0.5)
		.on("click", (event, d) => {
			if (_clickHandler) _clickHandler(event, d);
		});

	return { svg, mapGroup, projection };
}

export function applyGradient(metricKey) {
	const values = Object.values(_countries)
		.map(c => c[metricKey])
		.filter(v => typeof v === "number" && !isNaN(v));

	const [min, max] = d3.extent(values);
	const colorScale = d3.scaleSequential()
		.domain([min, max])
		.interpolator(d3.interpolateYlOrRd);

	mapGroup.selectAll("path.country")
		.transition()
		.duration(400)
		.attr("fill", d => _fillForFeature(d, metricKey, colorScale));
}

export function resetGradient() {
	mapGroup.selectAll("path.country")
		.transition()
		.duration(400)
		.attr("fill", d => _fillForFeature(d, null, null));
}

export function setClickHandler(fn) {
	_clickHandler = fn;
}

function _fillForFeature(d, metricKey, colorScale) {
	const alpha3 = _isoLookup[+d.id];
	if (!alpha3 || !_countries[alpha3]) return NO_DATA_FILL;
	if (!metricKey) return DEFAULT_FILL;
	const val = _countries[alpha3][metricKey];
	return typeof val === "number" && !isNaN(val) ? colorScale(val) : NO_DATA_FILL;
}
