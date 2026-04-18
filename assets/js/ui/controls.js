const BTN_IDS  = ["totPop", "perCapita", "women", "juveniles", "occupancy"];
const METRIC_KEYS = ["pop",    "rate",      "females", "juveniles", "occupancy"];

export function initControls(onMetricChange, onLabelToggle, onReset) {
	BTN_IDS.forEach((id, i) => {
		const btn = document.getElementById(id);
		if (!btn) return;
		btn.addEventListener("click", () => {
			BTN_IDS.forEach(b => document.getElementById(b)?.classList.remove("active-metric"));
			btn.classList.add("active-metric");
			onMetricChange(METRIC_KEYS[i]);
		});
	});

	document.querySelector("[data-action='labels']")?.addEventListener("click", e => {
		e.preventDefault();
		onLabelToggle();
	});

	document.querySelector("[data-action='reset']")?.addEventListener("click", e => {
		e.preventDefault();
		onReset();
	});
}

// Returns [{label, value, alpha3}] top-5 plus a rest-of-world entry.
export function getTop5(countries, metricKey) {
	const valid = Object.entries(countries)
		.filter(([, c]) => typeof c[metricKey] === "number" && !isNaN(c[metricKey]))
		.sort((a, b) => b[1][metricKey] - a[1][metricKey]);

	const top5 = valid.slice(0, 5).map(([alpha3, c]) => ({
		label: c.country,
		value: c[metricKey],
		alpha3,
	}));

	const restValue = valid.slice(5).reduce((sum, [, c]) => sum + c[metricKey], 0);
	if (restValue > 0) {
		top5.push({ label: "Rest of World", value: restValue, alpha3: null });
	}

	return top5;
}

export function formatMetricValue(val, key) {
	if (val === "--" || val === null || val === undefined || (typeof val === "number" && isNaN(val))) {
		return "N/A";
	}
	if (key === "pop") return Number(val).toLocaleString("en");
	if (key === "rate") return String(val);
	if (key === "females" || key === "juveniles" || key === "occupancy") {
		return (val * 100).toFixed(1) + "%";
	}
	return String(val);
}
