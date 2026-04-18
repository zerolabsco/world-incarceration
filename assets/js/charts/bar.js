import * as d3 from "https://cdn.jsdelivr.net/npm/d3@7/+esm";

const MARGIN = { top: 44, right: 90, bottom: 30, left: 150 };

// data: [{label, value (0–100 normalized), displayValue}]
// opts: { title?, onBack? }
export function renderBarChart(container, data, opts = {}) {
	const { title, onBack } = opts;
	const el = typeof container === "string"
		? document.querySelector(container)
		: container;

	el.innerHTML = "";

	const totalWidth = Math.max(el.clientWidth || 500, 400);
	const totalHeight = data.length * 52 + MARGIN.top + MARGIN.bottom;
	const width = totalWidth - MARGIN.left - MARGIN.right;
	const height = totalHeight - MARGIN.top - MARGIN.bottom;

	const svg = d3.select(el).append("svg")
		.attr("width", "100%")
		.attr("viewBox", `0 0 ${totalWidth} ${totalHeight}`);

	if (title) {
		svg.append("text")
			.attr("x", totalWidth / 2)
			.attr("y", 22)
			.attr("text-anchor", "middle")
			.style("fill", "#fff")
			.style("font-size", "14px")
			.style("font-weight", "bold")
			.text(title);
	}

	if (onBack) {
		svg.append("text")
			.attr("x", 8)
			.attr("y", 22)
			.style("fill", "#24ab48")
			.style("font-size", "13px")
			.style("cursor", "pointer")
			.text("← Back")
			.on("click", onBack);
	}

	const g = svg.append("g")
		.attr("transform", `translate(${MARGIN.left},${MARGIN.top})`);

	const yScale = d3.scaleBand()
		.domain(data.map(d => d.label))
		.range([0, height])
		.padding(0.3);

	const xScale = d3.scaleLinear()
		.domain([0, 100])
		.range([0, width]);

	// Y axis (country/metric labels)
	g.append("g")
		.call(d3.axisLeft(yScale).tickSize(0))
		.call(ax => ax.select(".domain").remove())
		.selectAll("text")
		.style("fill", "#ccc")
		.style("font-size", "12px");

	// X axis (percentage)
	g.append("g")
		.attr("transform", `translate(0,${height})`)
		.call(d3.axisBottom(xScale).ticks(5).tickFormat(d => d + "%"))
		.call(ax => ax.select(".domain").remove())
		.selectAll("text")
		.style("fill", "#666")
		.style("font-size", "10px");

	// Bars
	g.selectAll(".bar")
		.data(data)
		.join("rect")
		.attr("class", "bar")
		.attr("y", d => yScale(d.label))
		.attr("height", yScale.bandwidth())
		.attr("x", 0)
		.attr("width", d => xScale(Math.max(0, d.value)))
		.attr("fill", "rgba(36, 171, 72, 0.8)");

	// Value labels at end of bar
	g.selectAll(".bar-label")
		.data(data)
		.join("text")
		.attr("class", "bar-label")
		.attr("x", d => xScale(Math.max(0, d.value)) + 4)
		.attr("y", d => yScale(d.label) + yScale.bandwidth() / 2)
		.attr("dy", "0.35em")
		.style("fill", "#fff")
		.style("font-size", "11px")
		.text(d => d.displayValue);
}
