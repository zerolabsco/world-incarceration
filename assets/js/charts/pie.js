import * as d3 from "https://cdn.jsdelivr.net/npm/d3@7/+esm";

const COLORS = ["#0062ff", "#da1e28", "#fdd13a", "#24ab48", "#9966ff", "#606e85"];
const SIZE = 420;
const RADIUS = SIZE / 2 - 30;
const INNER_RADIUS = RADIUS * 0.45;

// data: [{label, value, alpha3}]  (alpha3 is null for "Rest of World")
// onSliceClick: (alpha3) => void — called only for named-country slices
export function renderPieChart(container, data, onSliceClick) {
	const el = typeof container === "string"
		? document.querySelector(container)
		: container;

	el.innerHTML = "";

	const svg = d3.select(el).append("svg")
		.attr("viewBox", `0 0 ${SIZE} ${SIZE}`)
		.attr("width", "100%");

	const g = svg.append("g")
		.attr("transform", `translate(${SIZE / 2},${SIZE / 2 - 10})`);

	const pie = d3.pie().value(d => d.value).sort(null);
	const arc = d3.arc().outerRadius(RADIUS).innerRadius(INNER_RADIUS);
	const labelArc = d3.arc()
		.outerRadius(RADIUS * 0.78)
		.innerRadius(RADIUS * 0.78);

	const arcs = g.selectAll(".arc")
		.data(pie(data))
		.join("g")
		.attr("class", "arc");

	arcs.append("path")
		.attr("d", arc)
		.attr("fill", (d, i) => COLORS[i % COLORS.length])
		.attr("stroke", "#161616")
		.attr("stroke-width", 2)
		.style("cursor", d => d.data.alpha3 ? "pointer" : "default")
		.on("click", (event, d) => {
			if (d.data.alpha3 && onSliceClick) onSliceClick(d.data.alpha3);
		});

	arcs.append("text")
		.attr("transform", d => `translate(${labelArc.centroid(d)})`)
		.attr("text-anchor", "middle")
		.attr("dy", "0.35em")
		.style("fill", "#fff")
		.style("font-size", "11px")
		.style("pointer-events", "none")
		.text(d => {
			const angle = d.endAngle - d.startAngle;
			return angle > 0.3 ? d.data.label : "";
		});

	// Legend
	const legend = svg.append("g")
		.attr("transform", `translate(10, ${SIZE - 20 - data.length * 18})`);

	data.forEach((d, i) => {
		const row = legend.append("g").attr("transform", `translate(0, ${i * 18})`);
		row.append("rect").attr("width", 12).attr("height", 12).attr("fill", COLORS[i % COLORS.length]);
		row.append("text")
			.attr("x", 16)
			.attr("y", 10)
			.style("fill", "#ccc")
			.style("font-size", "11px")
			.text(d.label);
	});
}
