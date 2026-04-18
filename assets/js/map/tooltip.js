import * as d3 from "https://cdn.jsdelivr.net/npm/d3@7/+esm";

let tooltip;

export function initTooltip() {
	tooltip = d3.select("body")
		.append("div")
		.attr("class", "map-tooltip");
}

export function attachTooltip(selection, getContent) {
	selection
		.on("mouseover", (event, d) => {
			const content = getContent(event, d);
			if (content) {
				tooltip.style("opacity", 1).html(content);
			} else {
				tooltip.style("opacity", 0);
			}
		})
		.on("mousemove", (event) => {
			tooltip
				.style("left", (event.pageX + 12) + "px")
				.style("top", (event.pageY - 28) + "px");
		})
		.on("mouseout", () => {
			tooltip.style("opacity", 0);
		});
}
