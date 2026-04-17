import * as d3 from "https://cdn.jsdelivr.net/npm/d3@7/+esm";
import * as topojson from "https://cdn.jsdelivr.net/npm/topojson-client@3/+esm";
import { countries } from "../data/countries.js";
import { isoNumericToAlpha3 } from "../data/iso-numeric-to-alpha3.js";
import { initMap, applyGradient, resetGradient, setClickHandler } from "./map/choropleth.js";
import { initTooltip } from "./map/tooltip.js";
import { initZoom, resetZoom } from "./map/zoom.js";
import { renderBarChart } from "./charts/bar.js";
import { renderPieChart } from "./charts/pie.js";
import { showCountryModal } from "./ui/modal.js";
import { initCompare } from "./ui/compare.js";
import { initControls, getTop5 } from "./ui/controls.js";

initMap("#map-container", countries, isoNumericToAlpha3);
