import * as d3 from "https://cdn.jsdelivr.net/npm/d3@7/+esm";

let _svg, _zoom;

export function initZoom(svg, mapGroup) {
	_svg = svg;
	_zoom = d3.zoom()
		.scaleExtent([0.5, 8])
		.on("zoom", (event) => {
			mapGroup.attr("transform", event.transform);
		});
	svg.call(_zoom);
	return _zoom;
}

export function resetZoom() {
	_svg.transition().duration(750).call(_zoom.transform, d3.zoomIdentity);
}
