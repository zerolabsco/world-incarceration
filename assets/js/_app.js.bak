/* initializes the map */
function Init() {
	zingchart.loadModules("maps, maps-world-countries", function (e) {
		zingchart.render({
			height: 800,
			width: "100%",
			id: "myChart",
			data: myConfig,
		});
	});
}
window.onload = Init;

/* custom configuration for the map options */
var myConfig = {
	backgroundColor: "#161616",
	shapes: [
		{
			type: "zingchart.maps",
			options: {
				name: "world.countries",
				ignore: ["ATA", "FLK", "ATF", "VUT", "WEB"],
				zooming: true,
				panning: true,
				scrolling: true,
				style: {
					cursor: "hand",
					backgroundColor: "rgba(36, 171, 72, 0.8)",
					label: {
						visible: false,
					},
					tooltip: {
						"html-mode": true,
						"border-color": "#24ab48",
						"border-width": "2px",
						text: customTooltip,
					},
					controls: {
						visible: false,
					},
				},
			},
		},
	],
};

/* toggles country labels */
function countryLabels() {
	if (myConfig.shapes[0].options.style.label.visible === false) {
		myConfig.shapes[0].options.style.label.visible = true;
		myConfig.shapes[0].options.style.label.color = "#ffffff";
	} else {
		myConfig.shapes[0].options.style.label.visible = false;
	}
	zingchart.exec("myChart", "setdata", {
		data: myConfig,
	});
}

/* prepares for color gradient maps */
var myMinMax = {};
var myShortcut = ["pop", "rate", "females", "juveniles", "occupancy"];
var gradientVal = 0;
var chartColor = "rgb(255, 255, 255)";

var gradientChart = {
	backgroundColor: "#161616",
	shapes: [
		{
			type: "zingchart.maps",
			options: {
				name: "world.countries",
				ignore: ["ATA", "FLK", "ATF", "VUT", "WEB"],
				zooming: true,
				panning: true,
				scrolling: true,
				style: {
					items: {
						AFG: {
							backgroundColor: "rgb(255, 255, 255)",
						},
					},
					cursor: "hand",
					backgroundColor: chartColor,
					opacity: gradientVal,
					label: {
						visible: false,
					},
					tooltip: {
						"html-mode": true,
						"border-color": "#24ab48",
						"border-width": "2px",
						text: customTooltip,
					},
					controls: {
						visible: false,
					},
				},
			},
		},
	],
};

function gradientPrep() {
	var myVal = [];
	for (var n = 0; n < myShortcut.length; n++) {
		Object.keys(data).forEach((key, index) => {
			const check = data[key][myShortcut[n]];
			const num = isNaN(check) ? null : check;
			myVal[index] = num;
		});
		myMinMax[n] = [
			Math.min.apply(null, myVal),
			Math.max.apply(null, myVal),
		];
	}
}

const numberRound = (x, y) => Math.round(x * Math.pow(10, y)) / Math.pow(10, y);

function gradient(n) {
	var maxValue = myMinMax["" + n]["1"];
	Object.keys(data).forEach((key, index) => {
		const check = data[key][myShortcut[n]];
		const num = isNaN(check) ? 0 : check;
		gradientVal = numberRound(255 - (num / maxValue) * 255, 0);
		chartColor = "rgb(255, " + gradientVal + ", " + gradientVal + ")";
		gradientChart.shapes[0].options.style.items[key] = {
			backgroundColor: chartColor,
		};
		gradientChart.shapes[0].options.style.items[key].backgroundColor =
			chartColor;
	});
	zingchart.exec("myChart", "setdata", {
		data: gradientChart,
	});
}

// Map configuration settings
var customTooltip =
	"<div style='text-align:center;font-weight:bold;font-size:14px;'>" +
	"%long-text" +
	"</div>";
zingchart.MODULESDIR = "https://cdn.zingchart.com/modules/";
ZC.LICENSE = [
	"569d52cefae586f634c54f86dc99e6a9",
	"ee6b7db5b51705a13dc2339db3edaf6d",
];

// Secondary chart configuration
var myConfig2 = {
	"background-color": "#000",
	type: "pie",
	"scale-r": {
		aperature: 198,
		"ref-angle": 200 /*relative to starting 90 degree position*/,
	},
	legend: {
		x: "85%",
		y: "8%",
		"border-width": "3px",
		"border-color": "#2B313B",
		"border-radius": "5px",
		"font-size": "16px",
		header: {
			text: "Legend",
			"font-size": "18px",
			"font-color": "#0003cc",
			"font-weight": "normal",
		},
		marker: {
			type: "circle",
		},
		"toggle-action": "remove",
	},
	plot: {
		thousandsSeparator: ",",
		detach: false,
		cursor: "hand",
		borderColor: "#2B313B",
		borderWidth: 5,
		animation: {
			"on-legend-toggle": true,
			/* set to true to show animation and false to turn off */
			effect: 5,
			method: 1,
			sequence: 1,
			speed: 0.5,
		},
		"value-box": {
			text: "<b>%t:</b> %v",
			"font-size": 15,
			"font-weight": "normal",
		},
		tooltip: {
			text: "%t: %npv%",
			"font-color": "black",
			"font-family": "Georgia",
			"font-size": "17px",
			"text-alpha": 1,
			"background-color": "white",
			alpha: 0.8,
			"border-color": "#2B313B",
			"border-width": "2px",
			"border-radius": "7px",
			padding: "10%",
		},
	},
	series: [
		{
			values: [2145100],
			text: "United States",
			backgroundColor: "#0062ff",
		},
		{
			values: [1649804],
			text: "China",
			backgroundColor: "#da1e28",
		},
		{
			values: [657680],
			text: "Brazil",
			backgroundColor: "#fdd13a",
		},
		{
			values: [609485],
			text: "Russia",
			backgroundColor: "#24ab48",
		},
		{
			values: [419623],
			text: "India",
			backgroundColor: "#9966ff",
		},
		{
			values: [4564562],
			text: "Rest of the World",
			backgroundColor: "#606e85",
			"data-id": "wo",
		},
	],
};
zingchart.render({
	id: "myChart2",
	data: myConfig2,
	height: 770,
	width: "100%",
});

// Drilldown charts within pie chart
var myDrilldownConfig = [];

// Set drilldown chart configurations
myDrilldownConfig[0] = {
	backgroundColor: "#000",
	type: "line",
	title: {
		fontColor: "#ffffff",
		text: "United States",
	},
	subtitle: {
		fontColor: "#ffffff",
		text: "Prison Population Trend",
		fontWeight: "normal",
	},
	plot: {
		lineColor: "#0062ff",
		lineWidth: 3,
		marker: {
			backgroundColor: "#0062ff",
			size: 6,
		},
	},
	scaleX: {
		item: {
			fontSize: 14,
			fontColor: "#ffffff",
		},
		lineWidth: 3,
		lineColor: "#ffffff",
		tick: {
			lineWidth: 3,
			lineColor: "#ffffff",
		},
		labels: [
			"2000",
			"2002",
			"2004",
			"2006",
			"2008",
			"2010",
			"2012",
			"2014",
		],
	},
	scaleY: {
		lineWidth: 3,
		lineColor: "#ffffff",
		tick: {
			lineWidth: 3,
			lineColor: "#ffffff",
		},
		item: {
			fontSize: 14,
			fontColor: "#ffffff",
			padding: "2.5%",
			angle: -90,
		},
		values: "1900000:2400000:100000",
		thousandsSeparator: ",",
		guide: {
			lineStyle: "dotted",
		},
	},
	crosshairX: {
		plotLabel: {
			text: "%v prisoners",
			fontSize: 15,
			borderRadius: 3,
		},
		scaleLabel: {
			backgroundColor: "#53535e",
			fontColor: "#ffffff",
			fontSize: 14,
			borderRadius: 3,
		},
		marker: {
			size: 8,
			alpha: 0.5,
		},
	},
	series: [
		{
			values: [
				1937482, 2033022, 2135335, 2258792, 2307504, 2270142, 2228424,
				2217947,
			],
			thousandsSeparator: ",",
		},
	],
};
myDrilldownConfig[1] = {
	backgroundColor: "#000",
	type: "line",
	title: {
		text: "China",
		fontColor: "#ffffff",
	},
	subtitle: {
		text: "Prison Population Trend",
		fontWeight: "normal",
		fontColor: "#ffffff",
	},
	plot: {
		lineColor: "#da1e28",
		lineWidth: 3,
		marker: {
			backgroundColor: "#da1e28",
			size: 6,
		},
	},
	scaleX: {
		item: {
			fontSize: 14,
			fontColor: "#ffffff",
		},
		lineWidth: 3,
		lineColor: "#ffffff",
		tick: {
			lineWidth: 3,
			lineColor: "#ffffff",
		},
		labels: [
			"2000",
			"2002",
			"2004",
			"2006",
			"2008",
			"2010",
			"2012",
			"2014",
		],
	},
	scaleY: {
		lineWidth: 3,
		lineColor: "#ffffff",
		tick: {
			lineWidth: 3,
			lineColor: "#ffffff",
		},
		item: {
			fontSize: 14,
			fontColor: "#ffffff",
			padding: "2.5%",
			angle: -90,
		},
		values: "1400000:1800000:100000",
		thousandsSeparator: ",",
		guide: {
			lineStyle: "dotted",
		},
	},
	crosshairX: {
		plotLabel: {
			text: "%v prisoners",
			fontSize: 15,
			borderRadius: 3,
		},
		scaleLabel: {
			backgroundColor: "#53535e",
			fontColor: "#ffffff",
			fontSize: 14,
			borderRadius: 3,
		},
		marker: {
			size: 8,
			alpha: 0.5,
		},
	},
	series: [
		{
			values: [
				1427407, 1512194, 1583006, 1710641, 1735822, 1650000, 1657963,
				1657812,
			],
			thousandsSeparator: ",",
		},
	],
};
myDrilldownConfig[2] = {
	backgroundColor: "#000",
	type: "line",
	title: {
		text: "Brazil",
		fontColor: "#ffffff",
	},
	subtitle: {
		text: "Prison Population Trend",
		fontWeight: "normal",
		fontColor: "#ffffff",
	},
	plot: {
		lineColor: "#fdd13a",
		lineWidth: 3,
		marker: {
			backgroundColor: "#fdd13a",
			size: 6,
		},
	},
	scaleX: {
		item: {
			fontSize: 14,
			fontColor: "#ffffff",
		},
		lineWidth: 3,
		lineColor: "#ffffff",
		tick: {
			lineWidth: 3,
			lineColor: "#ffffff",
		},
		labels: [
			"2000",
			"2002",
			"2004",
			"2006",
			"2008",
			"2010",
			"2012",
			"2014",
			"2016",
		],
	},
	scaleY: {
		lineWidth: 3,
		lineColor: "#ffffff",
		tick: {
			lineWidth: 3,
			lineColor: "#ffffff",
		},
		item: {
			fontSize: 14,
			fontColor: "#ffffff",
			padding: "2.5%",
			angle: -90,
		},
		values: "200000:650000:50000",
		thousandsSeparator: ",",
		guide: {
			lineStyle: "dotted",
		},
	},
	crosshairX: {
		plotLabel: {
			text: "%v prisoners",
			fontSize: 15,
			borderRadius: 3,
		},
		scaleLabel: {
			backgroundColor: "#53535e",
			fontColor: "#ffffff",
			fontSize: 14,
			borderRadius: 3,
		},
		marker: {
			size: 8,
			alpha: 0.5,
		},
	},
	series: [
		{
			values: [
				232755, 239345, 336358, 401236, 451429, 496251, 548003, 622202,
				644575,
			],
			thousandsSeparator: ",",
		},
	],
};
myDrilldownConfig[3] = {
	backgroundColor: "#000",
	type: "line",
	title: {
		text: "Russian Federation",
		fontColor: "#ffffff",
	},
	subtitle: {
		text: "Prison Population Trend",
		fontWeight: "normal",
		fontColor: "#ffffff",
	},
	plot: {
		lineColor: "#24ab48",
		lineWidth: 3,
		marker: {
			backgroundColor: "#24ab48",
			size: 6,
		},
	},
	scaleX: {
		item: {
			fontSize: 14,
			fontColor: "#ffffff",
		},
		lineWidth: 3,
		lineColor: "#ffffff",
		tick: {
			lineWidth: 3,
			lineColor: "#ffffff",
		},
		labels: [
			"2000",
			"2002",
			"2004",
			"2006",
			"2008",
			"2010",
			"2012",
			"2014",
			"2014",
		],
	},
	scaleY: {
		lineWidth: 3,
		lineColor: "#ffffff",
		tick: {
			lineWidth: 3,
			lineColor: "#ffffff",
		},
		item: {
			fontSize: 14,
			fontColor: "#ffffff",
			padding: "2.5%",
			angle: -90,
		},
		values: "600000:1200000:50000",
		thousandsSeparator: ",",
		guide: {
			lineStyle: "dotted",
		},
	},
	crosshairX: {
		plotLabel: {
			text: "%v prisoners",
			fontSize: 15,
			borderRadius: 3,
		},
		scaleLabel: {
			backgroundColor: "#53535e",
			fontColor: "#ffffff",
			fontSize: 14,
			borderRadius: 3,
		},
		marker: {
			size: 8,
			alpha: 0.5,
		},
	},
	series: [
		{
			values: [
				1060404, 980151, 847004, 823403, 883436, 864197, 755651, 677287,
				646085,
			],
			thousandsSeparator: ",",
		},
	],
};
myDrilldownConfig[4] = {
	backgroundColor: "#000",
	type: "line",
	title: {
		text: "India",
		fontColor: "#ffffff",
	},
	subtitle: {
		text: "Prison Population Trend",
		fontWeight: "normal",
		fontColor: "#ffffff",
	},
	plot: {
		lineColor: "#9966ff",
		lineWidth: 3,
		marker: {
			backgroundColor: "#9966ff",
			size: 6,
		},
	},
	scaleX: {
		item: {
			fontSize: 14,
			fontColor: "#ffffff",
		},
		lineWidth: 3,
		lineColor: "#ffffff",
		tick: {
			lineWidth: 3,
			lineColor: "#ffffff",
		},
		labels: [
			"2000",
			"2002",
			"2004",
			"2006",
			"2008",
			"2010",
			"2012",
			"2014",
		],
	},
	scaleY: {
		lineWidth: 3,
		lineColor: "#ffffff",
		tick: {
			lineWidth: 3,
			lineColor: "#ffffff",
		},
		item: {
			fontSize: 14,
			fontColor: "#ffffff",
			padding: "2.5%",
			angle: -90,
		},
		values: "250000:450000:25000",
		thousandsSeparator: ",",
		guide: {
			lineStyle: "dotted",
		},
	},
	crosshairX: {
		plotLabel: {
			text: "%v prisoners",
			fontSize: 15,
			borderRadius: 3,
		},
		scaleLabel: {
			backgroundColor: "#53535e",
			fontColor: "#ffffff",
			fontSize: 14,
			borderRadius: 3,
		},
		marker: {
			size: 8,
			alpha: 0.5,
		},
	},
	series: [
		{
			values: [
				272079, 322357, 331391, 373271, 384753, 368998, 385135, 418536,
			],
			thousandsSeparator: ",",
		},
	],
};

// Loads drilldown chart onclick
zingchart.node_click = function (e) {
	if (e.id === "myChart2") {
		if (e["data-id"] === "wo") {
			null;
		} else {
			zingchart.exec("myChart2", "destroy");
			zingchart.render({
				id: "myNextChart",
				data: myDrilldownConfig[e.plotindex],
				/*to reference the drilldown charts*/
				height: 500,
				width: "100%",
			});
		}
	} else if (e.id === "myNextChart") {
		zingchart.exec("myNextChart", "destroy");
		zingchart.render({
			id: "myChart2",
			data: myConfig2,
			height: 770,
			width: "100%",
		});
	}
};

/* reset zoom back to full map */
function reset() {
	zingchart.render({
		height: 800,
		width: "100%",
		id: "myChart",
		data: myConfig,
	});
}

/* opens the stats modal for each country */
zingchart.shape_click = function (e) {
	const newPopulation = isNaN(data[e.shapeid].pop)
		? "<span class='text-danger'>Information not available.</span>"
		: data[e.shapeid].pop.toLocaleString("en");
	const newRate = isNaN(data[e.shapeid].rate)
		? "<span class='text-danger'>Information not available.</span>"
		: data[e.shapeid].rate;
	const newFemales = isNaN(data[e.shapeid].females)
		? "<span class='text-danger'>Information not available.</span>"
		: (data[e.shapeid].females * 100).toFixed(2).concat(" %");
	const newJuveniles = isNaN(data[e.shapeid].juveniles)
		? "<span class='text-danger'>Information not available.</span>"
		: (data[e.shapeid].juveniles * 100).toFixed(2).concat(" %");
	const newOccupancy = isNaN(data[e.shapeid].occupancy)
		? "<span class='text-danger'>Information not available.</span>"
		: (data[e.shapeid].occupancy * 100).toFixed(2).concat(" %");
	var newModal =
		"<div class='modal fade' role='dialog'><div class='modal-dialog'><div class='modal-content'><div class='modal-header'><h4 class='modal-title'>" +
		data[e.shapeid].country +
		"</h4></div><div class='modal-body'><p><b>Prison Population:</b> " +
		newPopulation +
		"</p><p><b>Rate per 100,000 Citizens:</b> " +
		newRate +
		"</p><p><b>Females:</b> " +
		newFemales +
		"</p><p><b>Juveniles:</b> " +
		newJuveniles +
		"</p><p><b>Occupancy:</b> " +
		newOccupancy +
		"</p><p><b>Government:</b> " +
		data[e.shapeid].government +
		"</p></div><div class='modal-footer'><button type='button' class='btn btn-outline-success' data-dismiss='modal'>Close</button></div></div></div></div>";
	$(newModal).modal({
		show: false,
	});
	$(newModal).modal("show");
};

/* comparison function #1 - creates selection modal */
function compare() {
	var str = "";
	Object.keys(data).forEach(function (key, index) {
		str +=
			"<option value=" + key + ">" + data[key]["country"] + "</option>";
	});
	/* this will create a modal with options to choose the two countries to compare */
	var modalPopup =
		"<div id='modal-popup' class='modal fade' role='dialog'><div class='modal-dialog modal-lg'><div class='modal-content'><div class='modal-header bg-success d-flex justify-content-between align-items-center' style='background-color:#24ab48'><h4 class='modal-title'>Country Comparison</h4><a href='#' onclick='questionModal()'><i id='qIcon' class='far fa-question-circle' style='color:#ffffff;font-size:18px;float:right;'></i></a></div><div class='modal-body'><div id='modalAlertDiv'></div><div class='row'><div class='col-md-6'><select id='select1'>" +
		str +
		"</select></div><div class='col-md-6'><select id='select2'>" +
		str +
		"</select></div></div></div><div class='modal-footer'><button type='button' class='btn btn-success' id='comparebtn' onclick='compare2()'>Compare!</button><button type='button' class='btn btn-outline-success' data-dismiss='modal'>Close</button></div></div></div></div>";
	$(modalPopup).modal({
		show: false,
	});
	$(modalPopup).modal("show");
}

/* comparison function #2 - creates comparison modal */
function compare2() {
	var country1 = $("#select1 option:selected").val();
	var country2 = $("#select2 option:selected").val();

	if (country1 === country2) {
		$("#modalAlertDiv").html(
			"<div class='alert alert-danger'><a href='#' class='close' data-dismiss='alert' aria-label='close'>&times;</a><strong>Oops!</strong> You chose to compare the same country. Try selecting two different countries.</div>"
		);
	} else {
		$("#modalAlertDiv").empty();
		/* variables for country1 */
		const newPopulation1 = isNaN(data[country1]["pop"])
			? "<span class='text-danger'>Information not available.</span>"
			: data[country1]["pop"].toLocaleString("en");
		const newRate1 = isNaN(data[country1]["rate"])
			? "<span class='text-danger'>Information not available.</span>"
			: data[country1]["rate"];
		const newFemales1 = isNaN(data[country1]["females"])
			? "<span class='text-danger'>Information not available.</span>"
			: (data[country1]["females"] * 100).toFixed(2).concat(" %");
		const newJuveniles1 = isNaN(data[country1]["juveniles"])
			? "<span class='text-danger'>Information not available.</span>"
			: (data[country1]["juveniles"] * 100).toFixed(2).concat(" %");
		const newOccupancy1 = isNaN(data[country1]["occupancy"])
			? "<span class='text-danger'>Information not available.</span>"
			: (data[country1]["occupancy"] * 100).toFixed(2).concat(" %");
		/* variables for country2 */
		const newPopulation2 = isNaN(data[country2]["pop"])
			? "<span class='text-danger'>Information not available.</span>"
			: data[country2]["pop"].toLocaleString("en");
		const newRate2 = isNaN(data[country2]["rate"])
			? "<span class='text-danger'>Information not available.</span>"
			: data[country2]["rate"];
		const newFemales2 = isNaN(data[country2]["females"])
			? "<span class='text-danger'>Information not available.</span>"
			: (data[country2]["females"] * 100).toFixed(2).concat(" %");
		const newJuveniles2 = isNaN(data[country2]["juveniles"])
			? "<span class='text-danger'>Information not available.</span>"
			: (data[country2]["juveniles"] * 100).toFixed(2).concat(" %");
		const newOccupancy2 = isNaN(data[country2]["occupancy"])
			? "<span class='text-danger'>Information not available.</span>"
			: (data[country2]["occupancy"] * 100).toFixed(2).concat(" %");

		var newModalPopup =
			"<div class='fade modal' role=dialog><div class='modal-dialog modal-lg'><div class='modal-content'><div class='modal-header bg-success'><h4 class=modal-title>Side-By-Side Comparison</h4></div><div class=modal-body><table class='table'><thead><tr><th></th><th>" +
			data[country1]["country"] +
			"</th><th>" +
			data[country2]["country"] +
			"</th></thead><tbody><tr><td><b>Prison Population:</b></td><td>" +
			newPopulation1 +
			"</td><td>" +
			newPopulation2 +
			"</td></tr><tr><td><b>Rate per 100,000 Citizens:<b></td><td>" +
			newRate1 +
			"</td><td>" +
			newRate2 +
			"</td></tr><tr><td><b>Females:<b></td><td>" +
			newFemales1 +
			"</td><td>" +
			newFemales2 +
			"</td></tr><tr><td><b>Juveniles:</b></td><td>" +
			newJuveniles1 +
			"</td><td>" +
			newJuveniles2 +
			"</td></tr><tr><td><b>Occupancy:</b></td><td>" +
			newOccupancy1 +
			"</td><td>" +
			newOccupancy2 +
			"</td></tr><tr><td><b>Government:</b></td><td>" +
			data[country1]["government"] +
			"</td><td>" +
			data[country2]["government"] +
			"</td></tr></tbody></table></div><div class=modal-footer><button class='btn btn-outline-success' data-dismiss=modal type=button>Close</button></div></div></div></div>";
		$(newModalPopup).modal({
			show: false,
		});
		$(newModalPopup).modal("show");
		$("#modal-popup").modal({
			show: false,
		});
	}
}

function graphInfoBtn() {
	var graphInfo =
		"<div class='fade modal' role=dialog><div class='modal-dialog modal-lg'><div class=modal-content><div class='modal-header bg-secondary text-dark'><h4 class=modal-title>Just a Tip!</h4></div><div class=modal-body><i style='color:#da1e28'><b>Did you know...</b></i> you can click any country's pie segment to see a trend of their recent incarceration populations!<hr style='border-top: dotted 1px;'/><i style='color:#da1e28'><b>Did you know...</b></i> you can click any point on the line graphs to return to the pie chart.</div><div class=modal-footer><button class='btn btn-secondary' data-dismiss=modal type=button>Close</button></div></div></div></div>";
	$(graphInfo).modal({
		show: false,
	});
	$(graphInfo).modal("show");
}

function questionModal() {
	var questionModal =
		"<div class='modal fade' role='dialog'> <div class='modal-dialog modal-lg'> <div class='modal-content'> <div class='modal-header bg-success'><h4 class='modal-title'>Stuck?</h4></div><div class='modal-body'><p><b>Just a tip:</b> If the countries aren't changing in the comparison modal after you select new countries from the dropdown menus, just refresh the page and it should work!</p></div><div class='modal-footer'><button type='button' class='btn btn-outline-success' data-dismiss='modal'>Close</button></div></div></div></div>";
	$(questionModal).modal({
		show: false,
	});
	$(questionModal).modal("show");
}

/* data for each country */
var data = {
	AFG: {
		country: "Afghanistan",
		pop: 27527,
		rate: 75,
		females: 0.028,
		juveniles: 0.04,
		occupancy: 1.9,
		government: "Presidential Islamic Republic",
	},
	ALB: {
		country: "Albania",
		pop: 5447,
		rate: 189,
		females: 0.019,
		juveniles: 0.012,
		occupancy: 1.058,
		government: "Parliamentary Republic",
	},
	DZA: {
		country: "Algeria",
		pop: 61000,
		rate: 155,
		females: 0.017,
		juveniles: 0.007,
		occupancy: 0.893,
		government: "Presidential Republic",
	},
	AGO: {
		country: "Angola",
		pop: 24165,
		rate: 96,
		females: 0.036,
		juveniles: "--",
		occupancy: 1.108,
		government: "Presidential Republic",
	},
	ARG: {
		country: "Argentina",
		pop: 72693,
		rate: 167,
		females: 0.041,
		juveniles: 0,
		occupancy: 1.062,
		government: "Presidential Republic",
	},
	ARM: {
		country: "Armenia",
		pop: 4873,
		rate: 162,
		females: 0.044,
		juveniles: 0.002,
		occupancy: 1.063,
		government: "Parliamentary Democracy",
	},
	AUS: {
		country: "Australia",
		pop: 41237,
		rate: 168,
		females: 0.081,
		juveniles: 0.001,
		occupancy: 0.96,
		government: "Parliamentary Democracy",
	},
	AUT: {
		country: "Austria",
		pop: 8290,
		rate: 94,
		females: 0.057,
		juveniles: 0.014,
		occupancy: 0.949,
		government: "Federal Parliamentary Republic",
	},
	AZE: {
		country: "Azerbaijan",
		pop: 23311,
		rate: 239,
		females: 0.031,
		juveniles: 0.003,
		occupancy: 0.949,
		government: "Presidential Republic",
	},
	BHS: {
		country: "Bahamas",
		pop: 1727,
		rate: 439,
		females: 0.032,
		juveniles: "--",
		occupancy: 1.727,
		government: "Parliamentary Democracy",
	},
	BGD: {
		country: "Bangladesh",
		pop: 78578,
		rate: 48,
		females: 0.038,
		juveniles: 0.004,
		occupancy: 2.146,
		government: "Parliamentary Republic",
	},
	BLR: {
		country: "Belarus",
		pop: 29776,
		rate: 314,
		females: 0.075,
		juveniles: 0.003,
		occupancy: 0.834,
		government: "Presidential Republic/Dictatorship",
	},
	BEL: {
		country: "Belgium",
		pop: 10619,
		rate: 94,
		females: 0.046,
		juveniles: 0.006,
		occupancy: 1.096,
		government: "Federal Parliamentary Democracy",
	},
	BLZ: {
		country: "Belize",
		pop: 1297,
		rate: 356,
		females: 0.035,
		juveniles: 0.031,
		occupancy: 0.873,
		government: "Parliamentary Democracy",
	},
	BEN: {
		country: "Benin",
		pop: 7067,
		rate: 67,
		females: 0.05,
		juveniles: 0.021,
		occupancy: 2.4,
		government: "Presidential Republic",
	},
	BTN: {
		country: "Bhutan",
		pop: 1119,
		rate: 145,
		females: 0.043,
		juveniles: 0.034,
		occupancy: "--",
		government: "Constitutional Monarchy",
	},
	BOL: {
		country: "Bolivia",
		pop: 14598,
		females: 0.082,
		juveniles: 0.129,
		occupancy: 2.539,
		government: "Presidential Republic",
	},
	BIH: {
		country: "Bosnia and Herzegovina",
		pop: 1722,
		rate: 73,
		females: 0.029,
		juveniles: 0.002,
		occupancy: 1.021,
		government: "Parliamentary Republic",
	},
	BWA: {
		country: "Botswana",
		pop: 4376,
		rate: 210,
		females: 0.018,
		juveniles: 0.104,
		occupancy: 1.009,
		government: "Parliamentary Republic",
	},
	BRA: {
		country: "Brazil",
		pop: 657680,
		rate: 318,
		females: 0.069,
		juveniles: 0,
		occupancy: 1.639,
		government: "Federal Presidential Republic",
	},
	BRN: {
		country: "Brunei Darussalam",
		pop: 565,
		rate: 134,
		females: 0.073,
		juveniles: 0.004,
		occupancy: 1.328,
		government: "Absolute Monarchy or Sultanate",
	},
	BGR: {
		country: "Bulgaria",
		pop: 9028,
		rate: 125,
		females: 0.032,
		juveniles: 0.008,
		occupancy: 0.856,
		government: "Parliamentary Republic",
	},
	BFA: {
		country: "Burkina Faso",
		pop: 7544,
		rate: 41,
		females: 0.015,
		juveniles: 0.032,
		occupancy: 1.886,
		government: "Presidential Republic",
	},
	BDI: {
		country: "Burundi",
		pop: 10049,
		rate: 86,
		females: 0.045,
		juveniles: 0.023,
		occupancy: 2.396,
		government: "Presidential Republic",
	},
	KHM: {
		country: "Cambodia",
		pop: 25500,
		rate: 159,
		females: 0.08,
		juveniles: 0.041,
		occupancy: 2.061,
		government: "Parliamentary Constitutional Monarchy",
	},
	CMR: {
		country: "Cameroon",
		pop: 27997,
		rate: 115,
		females: 0.027,
		juveniles: 0.029,
		occupancy: 1.578,
		government: "Presidential Republic",
	},
	CAN: {
		country: "Canada",
		pop: 41145,
		rate: 114,
		females: 0.056,
		juveniles: 0.026,
		occupancy: 1.022,
		government: "Federal Parliamentary Democracy",
	},
	CAF: {
		country: "Central African Republic",
		pop: 764,
		rate: 16,
		females: 0.082,
		juveniles: "--",
		occupancy: "--",
		government: "Presidential Republic",
	},
	TCD: {
		country: "Chad",
		pop: 4831,
		rate: 39,
		females: 0.028,
		juveniles: 0.033,
		occupancy: 2.323,
		government: "Presidential Republic",
	},
	CHL: {
		country: "Chile",
		pop: 42931,
		rate: 236,
		females: 0.089,
		juveniles: 0.004,
		occupancy: 1.109,
		government: "Presidential Republic",
	},
	CHN: {
		country: "China",
		pop: 1649804,
		rate: 118,
		females: 0.065,
		juveniles: 0.008,
		occupancy: "--",
		government: "Communist State",
	},
	COL: {
		country: "Colombia",
		pop: 115708,
		rate: 227,
		females: 0.066,
		juveniles: 0,
		occupancy: 1.464,
		government: "Presidential Republic",
	},
	COD: {
		country: "Democratic Republic of the Congo",
		pop: 20550,
		rate: 29,
		females: 0.03,
		juveniles: "--",
		occupancy: 5.33,
		government: "Unitary Semi-Presidential Republic",
	},
	COG: {
		country: "Republic of the Congo",
		pop: 1240,
		rate: 27,
		females: 0.037,
		juveniles: 0.044,
		occupancy: 5.33,
		government: "Unitary Semi-Presidential Republic",
	},
	CRI: {
		country: "Costa Rica",
		pop: 19226,
		rate: 374,
		females: 0.054,
		juveniles: 0.016,
		occupancy: 1.394,
		government: "Presidential Republic",
	},
	HRV: {
		country: "Croatia",
		pop: 3228,
		rate: 78,
		females: 0.041,
		juveniles: 0.007,
		occupancy: 0.803,
		government: "Parliamentary Republic",
	},
	CUB: {
		country: "Cuba",
		pop: 57337,
		rate: 510,
		females: "--",
		juveniles: "--",
		occupancy: "--",
		government: "Communist State",
	},
	CYP: {
		country: "Cyprus",
		pop: 654,
		rate: 77,
		females: 0.067,
		juveniles: 0.015,
		occupancy: 0.973,
		government: "Presidential Democracy",
	},
	CZE: {
		country: "Czech Republic",
		pop: 22508,
		rate: 212,
		females: 0.074,
		juveniles: 0.004,
		occupancy: 1.065,
		government: "--",
	},
	CIV: {
		country: "Cote d'Ivoire",
		pop: 11192,
		rate: 51,
		females: 0.021,
		juveniles: 0.017,
		occupancy: 2.18,
		government: "Presidential Republic",
	},
	DNK: {
		country: "Denmark",
		pop: 3418,
		rate: 59,
		females: 0.04,
		juveniles: 0.003,
		occupancy: 0.952,
		government: "Parliamentary Constitutional Monarchy",
	},
	DJI: {
		country: "Djibouti",
		pop: 600,
		rate: 66,
		females: 0.05,
		juveniles: 0.05,
		occupancy: 1.714,
		government: "Semi-Presidential Republic",
	},
	DOM: {
		country: "Dominican Republic",
		pop: 26796,
		rate: 245,
		females: 0.026,
		juveniles: 0.023,
		occupancy: 1.885,
		government: "Presidential Republic",
	},
	ECU: {
		country: "Ecuador",
		pop: 26421,
		rate: 160,
		females: 0.077,
		juveniles: 0.021,
		occupancy: 1.144,
		government: "Presidential Republic",
	},
	EGY: {
		country: "Egypt",
		pop: 106000,
		rate: 116,
		females: 0.037,
		juveniles: "--",
		occupancy: "--",
		government: "Presidential Republic",
	},
	SLV: {
		country: "El Salvador",
		pop: 38893,
		rate: 597,
		females: 0.099,
		juveniles: 0,
		occupancy: 3.482,
		government: "Presidential Republic",
	},
	GNQ: {
		country: "Equatorial Guinea",
		pop: 500,
		rate: 63,
		females: 0.05,
		juveniles: "--",
		occupancy: "--",
		government: "Presidential Republic",
	},
	ERI: {
		country: "Eritrea",
		pop: "--",
		rate: "--",
		females: "--",
		juveniles: "--",
		occupancy: "--",
		government: "Unitary Presidential Republic",
	},
	EST: {
		country: "Estonia",
		pop: 2774,
		rate: 210,
		females: 0.055,
		juveniles: 0.008,
		occupancy: 0.833,
		government: "Parliamentary Republic",
	},
	ETH: {
		country: "Ethiopia",
		pop: 113727,
		rate: 127,
		females: 0.042,
		juveniles: "--",
		occupancy: "--",
		government: "Federal Parliamentary Republic",
	},
	FJI: {
		country: "Fiji",
		pop: 1423,
		rate: 158,
		females: 0.052,
		juveniles: 0.007,
		occupancy: 1.037,
		government: "Parliamentary Republic",
	},
	FIN: {
		country: "Finland",
		pop: 3174,
		rate: 57,
		females: 0.077,
		juveniles: 0.003,
		occupancy: 1.058,
		government: "Parliamentary Republic",
	},
	FRA: {
		country: "France",
		pop: 70018,
		rate: 103,
		females: 0.035,
		juveniles: 0.012,
		occupancy: 1.185,
		government: "Semi-Presidential Republic",
	},
	GUF: {
		country: "French Guiana",
		pop: 840,
		rate: 305,
		females: 0.106,
		juveniles: 0.012,
		occupancy: 1.37,
		government: "--",
	},
	GAB: {
		country: "Gabon",
		pop: 3373,
		rate: 191,
		females: 0.035,
		juveniles: 0.029,
		occupancy: "--",
		government: "Presidential Republic",
	},
	GMB: {
		country: "Gambia",
		pop: 1121,
		rate: 58,
		females: 0.025,
		juveniles: 0.013,
		occupancy: 1.725,
		government: "Presidential Republic",
	},
	GEO: {
		country: "Georgia",
		pop: 9451,
		rate: 254,
		females: 0.029,
		juveniles: 0.003,
		occupancy: 0.456,
		government: "Semi-Presidential Republic",
	},
	DEU: {
		country: "Germany",
		pop: 64193,
		rate: 77,
		females: 0.058,
		juveniles: 0.069,
		occupancy: 0.874,
		government: "Federal Parliamentary Republic",
	},
	GHA: {
		country: "Ghana",
		pop: 13764,
		rate: 49,
		females: 0.012,
		juveniles: 0.009,
		occupancy: 1.394,
		government: "Presidential Republic",
	},
	GNB: {
		country: "Guinea Buissau",
		pop: 196,
		rate: 10,
		females: 0.026,
		juveniles: 0.026,
		occupancy: 1.022,
		government: "Presidential Republic",
	},
	GRC: {
		country: "Greece",
		pop: 9789,
		rate: 91,
		females: 0.055,
		juveniles: 0.029,
		occupancy: 0.99,
		government: "Parliamentary Republic",
	},
	GRL: {
		country: "Greenland",
		pop: 126,
		rate: 226,
		females: 0.138,
		juveniles: 0,
		occupancy: 0.753,
		government: "Parliamentary Democracy",
	},
	GTM: {
		country: "Guatemala",
		pop: 22907,
		rate: 134,
		females: 0.103,
		juveniles: 0.046,
		occupancy: 2.962,
		government: "Presidential Republic",
	},
	GIN: {
		country: "Guinea",
		pop: 2900,
		rate: 23,
		females: 0.037,
		juveniles: 0.063,
		occupancy: 1.748,
		government: "Presidential Republic",
	},
	GUY: {
		country: "Guyana",
		pop: 2113,
		rate: 278,
		females: 0.035,
		juveniles: 0.007,
		occupancy: 1.288,
		government: "Parliamentary Republic",
	},
	HTI: {
		country: "Haiti",
		pop: 10500,
		rate: 96,
		females: 0.041,
		juveniles: 0.024,
		occupancy: 4.544,
		government: "Semi-Presidential Republic",
	},
	HND: {
		country: "Honduras",
		pop: 17253,
		rate: 200,
		females: 0.043,
		juveniles: "--",
		occupancy: 1.628,
		government: "Presidential Republic",
	},
	HUN: {
		country: "Hungary",
		pop: 17963,
		rate: 184,
		females: 0.075,
		juveniles: 0.004,
		occupancy: 1.29,
		government: "Parliamentary Republic",
	},
	ISL: {
		country: "Iceland",
		pop: 131,
		rate: 38,
		females: 0.061,
		juveniles: 0,
		occupancy: 0.862,
		government: "Parliamentary Republic",
	},
	IND: {
		country: "India",
		pop: 419623,
		rate: 33,
		females: 0.043,
		juveniles: 0,
		occupancy: 1.144,
		government: "Federal Parliamentary Republic",
	},
	IDN: {
		country: "Indonesia",
		pop: 225025,
		rate: 86,
		females: 0.055,
		juveniles: 0.032,
		occupancy: 1.827,
		government: "Republic",
	},
	IRN: {
		country: "Iran",
		pop: 225624,
		females: 0.031,
		juveniles: 0.005,
		occupancy: 1.612,
		government: "Republic",
	},
	IRQ: {
		country: "Iraq",
		pop: 42880,
		rate: 123,
		females: 0.026,
		juveniles: 0.036,
		occupancy: 1.392,
		government: "Republic",
	},
	IRL: {
		country: "Ireland",
		pop: 3593,
		rate: 75,
		females: 0.038,
		juveniles: 0.01,
		occupancy: 0.841,
		government: "Republic",
	},
	ISR: {
		country: "Israel",
		pop: 21072,
		rate: 265,
		females: 0.01,
		juveniles: 0.027,
		occupancy: 0.801,
		government: "Republic",
	},
	ITA: {
		country: "Italy",
		pop: 57661,
		rate: 95,
		females: 0.042,
		juveniles: 0.003,
		occupancy: 1.142,
		government: "Republic",
	},
	JAM: {
		country: "Jamaica",
		pop: 3866,
		rate: 138,
		females: 0.047,
		juveniles: 0.052,
		occupancy: 0.888,
		government: "Constituitional Monarchy",
	},
	JPN: {
		country: "Japan",
		pop: 56805,
		rate: 45,
		females: 0.084,
		juveniles: 0,
		occupancy: 0.668,
		government: "Constituitional Monarchy",
	},
	JOR: {
		country: "Jordan",
		pop: 11489,
		rate: 150,
		females: 0.04,
		juveniles: "--",
		occupancy: 0.693,
		government: "Constituitional Monarchy",
	},
	KAZ: {
		country: "Kazakhstan",
		pop: 36343,
		rate: 202,
		females: 0.076,
		juveniles: 0.002,
		occupancy: 0.689,
		government: "Republic",
	},
	KEN: {
		country: "Kenya",
		pop: 53841,
		rate: 114,
		females: 0.074,
		juveniles: 0.012,
		occupancy: 2.017,
		government: "Republic",
	},
	KOS: {
		country: "Kosovo",
		pop: 1849,
		rate: 106,
		females: 0.025,
		juveniles: 0.034,
		occupancy: 0.87,
		government: "Republic",
	},
	KWT: {
		country: "Kuwait",
		pop: 5400,
		rate: 147,
		females: 0.025,
		juveniles: "--",
		occupancy: 0.87,
		government: "Constituitional Monarchy",
	},
	KGZ: {
		country: "Kyrgyzstan",
		pop: 10195,
		rate: 166,
		females: 0.042,
		juveniles: 0.004,
		occupancy: 0.585,
		government: "Republic",
	},
	LAO: {
		country: "Laos",
		pop: 8201,
		rate: 119,
		females: 0.183,
		juveniles: "--",
		occupancy: "--",
		government: "Republic",
	},
	LVA: {
		country: "Latvia",
		pop: 4243,
		rate: 218,
		females: 0.082,
		juveniles: 0.01,
		occupancy: 0.753,
		government: "Republic",
	},
	LBN: {
		country: "Lebanon",
		pop: 6500,
		rate: 128,
		females: 0.046,
		juveniles: 0.024,
		occupancy: 1.857,
		government: "Republic",
	},
	LSO: {
		country: "Lesotho",
		pop: 2073,
		rate: 92,
		females: 0.036,
		juveniles: 0.024,
		occupancy: 0.706,
		government: "Constitutional Monarchy",
	},
	LBR: {
		country: "Liberia",
		pop: 2023,
		rate: 44,
		females: 0.013,
		juveniles: 0.01,
		occupancy: 1.657,
		government: "Republic",
	},
	LBY: {
		country: "Libya",
		pop: 6187,
		rate: 99,
		females: 0.012,
		juveniles: "--",
		occupancy: 1.416,
		government: "--",
	},
	LTU: {
		country: "Lithuania",
		pop: 6616,
		rate: 235,
		females: 0.049,
		juveniles: 0.007,
		occupancy: 0.826,
		government: "Republic",
	},
	LUX: {
		country: "Luxembourg",
		pop: 690,
		rate: 115,
		females: 0.055,
		juveniles: 0.009,
		occupancy: 0.97,
		government: "Constituitional Monarchy",
	},
	MKD: {
		country: "Macedonia",
		pop: 3222,
		rate: 156,
		females: 0.032,
		juveniles: 0.007,
		occupancy: 1.323,
		government: "Republic",
	},
	MDG: {
		country: "Madagascar",
		pop: 22000,
		rate: 88,
		females: 0.045,
		juveniles: 0.034,
		occupancy: 1.93,
		government: "Republic",
	},
	MWI: {
		country: "Malawi",
		pop: 14018,
		rate: 79,
		females: 0.011,
		juveniles: 0.077,
		occupancy: 2.003,
		government: "Republic",
	},
	MYS: {
		country: "Malaysia",
		pop: 51602,
		rate: 167,
		females: 0.069,
		juveniles: 0.022,
		occupancy: 1.139,
		government: "Constitutional Monarchy",
	},
	MLI: {
		country: "Mali",
		pop: 5209,
		rate: 33,
		females: 0.028,
		juveniles: 0.013,
		occupancy: 2.233,
		government: "Republic",
	},
	MRT: {
		country: "Mauritania",
		pop: 1768,
		rate: 44,
		females: 0.012,
		juveniles: 0.031,
		occupancy: 1.019,
		government: "Republic",
	},
	MEX: {
		country: "Mexico",
		pop: 208689,
		rate: 169,
		females: 0.052,
		juveniles: 0.043,
		occupancy: 0.979,
		government: "Executive Republic",
	},
	MDA: {
		country: "Moldova",
		pop: 7868,
		rate: 222,
		females: 0.082,
		juveniles: 0.003,
		occupancy: 0.909,
		government: "Ceremonial Republic",
	},
	MNG: {
		country: "Mongolia",
		pop: 7690,
		rate: 262,
		females: 0.051,
		juveniles: 0.009,
		occupancy: 1.244,
		government: "Executive Republic",
	},
	MNE: {
		country: "Montenegro",
		pop: 1131,
		rate: 182,
		females: 0.031,
		juveniles: 0.004,
		occupancy: 0.838,
		government: "Ceremonial Republic",
	},
	MAR: {
		country: "Morocco",
		pop: 80000,
		rate: 227,
		females: 0.023,
		juveniles: 0.027,
		occupancy: 1.578,
		government: "Executive Constitutional Monarchy",
	},
	MOZ: {
		country: "Mozambique",
		pop: 15976,
		rate: 57,
		females: 0.029,
		juveniles: 0.086,
		occupancy: 1.951,
		government: "Executive Republic",
	},
	MMR: {
		country: "Myanmar",
		pop: 79668,
		rate: 145,
		females: 0.123,
		juveniles: 0.016,
		occupancy: 1.443,
		government: "Executive Republic",
	},
	NAM: {
		country: "Namibia",
		pop: 3742,
		rate: 149,
		females: 0.029,
		juveniles: 0.002,
		occupancy: 0.727,
		government: "Executive Republic",
	},
	NPL: {
		country: "Nepal",
		pop: 18881,
		rate: 65,
		females: 0.073,
		juveniles: 0.055,
		occupancy: 1.78,
		government: "Ceremonial Republic",
	},
	NLD: {
		country: "Netherlands",
		pop: 10102,
		rate: 59,
		females: 0.054,
		juveniles: 0.012,
		occupancy: 0.681,
		government: "Ceremonial Constitutional Monarchy",
	},
	NCL: {
		country: "New Caledonia",
		pop: 549,
		rate: 204,
		females: 0.015,
		juveniles: 0.031,
		occupancy: 1.366,
		government: "French Republic",
	},
	NZL: {
		country: "New Zealand",
		pop: 10260,
		rate: 214,
		females: 0.074,
		juveniles: 0.006,
		occupancy: 1.061,
		government: "Ceremonial Constitutional Monarchy",
	},
	NIC: {
		country: "Nicaragua",
		pop: 10569,
		rate: 171,
		females: 0.054,
		juveniles: 0.006,
		occupancy: 1.28,
		government: "Executive Republic",
	},
	NER: {
		country: "Niger",
		pop: 8525,
		rate: 44,
		females: 0.043,
		juveniles: "--",
		occupancy: 0.604,
		government: "Executive Republic",
	},
	NGA: {
		country: "Nigeria",
		pop: 68259,
		rate: 36,
		females: 0.02,
		juveniles: 0.017,
		occupancy: 1.259,
		government: "Executive Republic",
	},
	PRK: {
		country: "North Korea",
		pop: 100000,
		females: "--",
		juveniles: "--",
		occupancy: "--",
		government: "Executive Republic",
	},
	NOR: {
		country: "Norway",
		pop: 3933,
		rate: 74,
		females: 0.064,
		juveniles: 0.001,
		occupancy: 0.952,
		government: "Ceremonial Constitutional Monarchy",
	},
	OMN: {
		country: "Oman",
		pop: 1300,
		rate: 36,
		females: 0.045,
		juveniles: 0.038,
		occupancy: "--",
		government: "Executive Absolute Monarchy",
	},
	PAK: {
		country: "Pakistan",
		pop: 84315,
		rate: 44,
		females: 0.018,
		juveniles: 0.017,
		occupancy: 1.716,
		government: "Ceremonial Republic",
	},
	PAN: {
		country: "Panama",
		pop: 16151,
		rate: 393,
		females: 0.055,
		juveniles: 0,
		occupancy: 1.139,
		government: "Executive Republic",
	},
	PNG: {
		country: "Papau New Guinea",
		pop: 4945,
		rate: 63,
		females: 0.05,
		juveniles: 0.039,
		occupancy: 1.187,
		government: "Ceremonial Consititutional Monarchy",
	},
	PRY: {
		country: "Paraguay",
		pop: 12741,
		rate: 180,
		females: 0.065,
		juveniles: 0.028,
		occupancy: 1.786,
		government: "Executive Republic",
	},
	PER: {
		country: "Peru",
		pop: 84741,
		rate: 265,
		females: 0.058,
		juveniles: 0,
		occupancy: 2.293,
		government: "Executive Republic",
	},
	PHL: {
		country: "Philippines",
		pop: 178661,
		rate: 172,
		females: 0.089,
		juveniles: 0.004,
		occupancy: 4.36,
		government: "Executive Republic",
	},
	POL: {
		country: "Poland",
		pop: 73717,
		rate: 194,
		females: 0.038,
		juveniles: 0.004,
		occupancy: 0.9,
		government: "Executive Republic",
	},
	PRT: {
		country: "Portugal",
		pop: 13726,
		rate: 133,
		females: 0.064,
		juveniles: 0.001,
		occupancy: 1.069,
		government: "Executive Republic",
	},
	PRI: {
		country: "Puerto Rico",
		pop: 10475,
		rate: 313,
		females: 0.036,
		juveniles: 0.037,
		occupancy: 0.736,
		government: "Executive Republic",
	},
	QAT: {
		country: "Qatar",
		pop: 1150,
		rate: 53,
		females: 0.147,
		juveniles: 0,
		occupancy: "--",
		government: "Executive Absolute Monarchy",
	},
	ROU: {
		country: "Romania",
		pop: 26529,
		rate: 135,
		females: 0.051,
		juveniles: 0.013,
		occupancy: 0.956,
		government: "Executive Republic",
	},
	RUS: {
		country: "Russia",
		pop: 609485,
		rate: 421,
		females: 0.079,
		juveniles: 0.002,
		occupancy: 0.79,
		government: "Executive Republic",
	},
	RWA: {
		country: "Rwanda",
		pop: 54279,
		rate: 434,
		females: 0.065,
		juveniles: 0.004,
		occupancy: 0.956,
		government: "Executive Republic",
	},
	SAU: {
		country: "Saudi Arabia",
		pop: 47000,
		rate: 161,
		females: 0.057,
		juveniles: 0.009,
		occupancy: "--",
		government: "Executive Absolute Monarchy",
	},
	SEN: {
		country: "Senegal",
		pop: 9422,
		rate: 60,
		females: 0.029,
		juveniles: 0.02,
		occupancy: 1.173,
		government: "Executive Republic",
	},
	SRB: {
		country: "Serbia",
		pop: 10065,
		rate: 142,
		females: 0.036,
		juveniles: 0.01,
		occupancy: 1.064,
		government: "Cermonial Republic",
	},
	SLE: {
		country: "Sierra Leone",
		pop: 4179,
		rate: 64,
		females: 0.033,
		juveniles: 0,
		occupancy: 2.16,
		government: "Executive Republic",
	},
	SVK: {
		country: "Slovakia",
		pop: 10247,
		rate: 188,
		females: 0.07,
		juveniles: 0.008,
		occupancy: 0.937,
		government: "Ceremonial Republic",
	},
	SVN: {
		country: "Slovenia",
		pop: 1316,
		rate: 64,
		females: 0.074,
		juveniles: 0.005,
		occupancy: 0.983,
		government: "Ceremonial Republic",
	},
	SLB: {
		country: "Solomon Islands",
		pop: 435,
		rate: 73,
		females: 0.014,
		juveniles: 0.059,
		occupancy: 0.606,
		government: "Ceremonial Constitutional Monarchy",
	},
	SOL: {
		country: "Somaliland",
		pop: 2000,
		rate: "--",
		females: "--",
		juveniles: "--",
		occupancy: "--",
		government: "Presidential Constitutional Republic",
	},
	SOM: {
		country: "Somalia",
		pop: 3700,
		rate: "--",
		females: "--",
		juveniles: "--",
		occupancy: "--",
		government: "Federal Parliamentary Republic",
	},
	ZAF: {
		country: "South Africa",
		pop: 161984,
		rate: 291,
		females: 0.026,
		juveniles: 0.002,
		occupancy: 1.327,
		government: "Executive Republic",
	},
	KOR: {
		country: "South Korea",
		pop: 57451,
		rate: 114,
		females: 0.065,
		juveniles: 0.008,
		occupancy: 1.133,
		government: "Executive Republic",
	},
	ESP: {
		country: "Spain",
		pop: 59678,
		rate: 128,
		females: 0.075,
		juveniles: 0,
		occupancy: 0.809,
		government: "Ceremonial Constitutional Monarchy",
	},
	LKA: {
		country: "Sri Lanka",
		pop: 16990,
		rate: 78,
		females: 0.049,
		juveniles: 0.001,
		occupancy: 1.906,
		government: "Executive Republic",
	},
	SDN: {
		country: "Sudan",
		pop: 19101,
		rate: 50,
		females: 0.02,
		juveniles: 0.02,
		occupancy: 2.553,
		government: "Executive Republic",
	},
	SSD: {
		country: "S.Sudan",
		pop: 6504,
		rate: 52,
		females: 0.109,
		juveniles: "--",
		occupancy: 3.2925,
		government: "Constitutional Republic",
	},
	SUR: {
		country: "Suriname",
		pop: 1000,
		rate: 183,
		females: 0.028,
		juveniles: 0.057,
		occupancy: 0.752,
		government: "Executive Republic",
	},
	SWZ: {
		country: "Swaziland",
		pop: 3610,
		rate: 282,
		females: 0.029,
		juveniles: 0.007,
		occupancy: 1.272,
		government: "Executive Absolute Monarchy",
	},
	SWE: {
		country: "Sweden",
		pop: 5630,
		rate: 57,
		females: 0.061,
		juveniles: 0.003,
		occupancy: 0.842,
		government: "Ceremonial Constitutional Monarchy",
	},
	CHE: {
		country: "Switzerland",
		pop: 6912,
		rate: 82,
		females: 0.056,
		juveniles: 0.003,
		occupancy: 0.922,
		government: "Executive Republic",
	},
	SYR: {
		country: "Syria",
		pop: 10599,
		rate: 60,
		females: 0.074,
		juveniles: "--",
		occupancy: 0.656,
		government: "Executive Republic",
	},
	TWN: {
		country: "Taiwan",
		pop: 62445,
		rate: 265,
		females: 0.087,
		juveniles: 0.025,
		occupancy: 1.148,
		government: "Constitutional Republic",
	},
	TJK: {
		country: "Tajikistan",
		pop: 9317,
		rate: 121,
		females: 0.016,
		juveniles: 0.01,
		occupancy: 0.615,
		government: "Executive Republic",
	},
	TZA: {
		country: "Tanzania",
		pop: 31382,
		rate: 58,
		females: 0.034,
		juveniles: 0.039,
		occupancy: 1.157,
		government: "Executive Republic",
	},
	THA: {
		country: "Thailand",
		pop: 312855,
		rate: 462,
		females: 0.131,
		juveniles: "--",
		occupancy: 1.448,
		government: "--",
	},
	TLS: {
		country: "Timor-Leste",
		pop: 669,
		rate: 56,
		females: 0.04,
		juveniles: 0.055,
		occupancy: 1.373,
		government: "Constitutional Republic",
	},
	TGO: {
		country: "Togo",
		pop: 4427,
		rate: 62,
		females: 0.027,
		juveniles: 0.009,
		occupancy: 1.628,
		government: "Executive Republic",
	},
	TTO: {
		country: "Trinidad and Tobago",
		pop: 3667,
		rate: 270,
		females: 0.026,
		juveniles: 0.048,
		occupancy: 0.751,
		government: "Ceremonial Republic",
	},
	TUN: {
		country: "Tunisia",
		pop: 23553,
		rate: 206,
		females: 0.028,
		juveniles: 0.01,
		occupancy: 1.389,
		government: "Executive Republic",
	},
	TUR: {
		country: "Turkey",
		pop: 229790,
		rate: 285,
		females: 0.043,
		juveniles: 0.012,
		occupancy: 1.108,
		government: "Ceremonial Republic",
	},
	TKM: {
		country: "Turkmenistan",
		pop: 30568,
		rate: 583,
		females: 0.065,
		juveniles: 0.007,
		occupancy: 0.85,
		government: "Executive Republic",
	},
	UGA: {
		country: "Uganda",
		pop: 54059,
		rate: 129,
		females: 0.044,
		juveniles: 0,
		occupancy: 2.932,
		government: "Executive Republic",
	},
	UKR: {
		country: "Ukraine",
		pop: 60771,
		rate: 167,
		females: 0.046,
		juveniles: 0.007,
		occupancy: 0.63,
		government: "Executive Republic",
	},
	ARE: {
		country: "United Arab Emirates",
		pop: 9826,
		rate: 104,
		females: 0.117,
		juveniles: 0.02,
		occupancy: 1.589,
		government: "Executive Absolute Monarchy",
	},
	GBR: {
		country: "United Kingdom",
		pop: 95284,
		rate: 360,
		females: 0.0447,
		juveniles: 0.0047,
		occupancy: 0.972,
		government: "Ceremonial Constitutional Monarchy",
	},
	USA: {
		country: "United States of America",
		pop: 2145100,
		rate: 666,
		females: 0.098,
		juveniles: 0.002,
		occupancy: 1.039,
		government: "Executive Republic",
	},
	URY: {
		country: "Uruguay",
		pop: 11078,
		rate: 321,
		females: 0.053,
		juveniles: 0,
		occupancy: 1.121,
		government: "Executive Republic",
	},
	UZB: {
		country: "Uzbekistan",
		pop: 43900,
		rate: 150,
		females: "--",
		juveniles: "--",
		occupancy: 0.8,
		government: "Executive Republic",
	},
	VEN: {
		country: "Venezuela",
		pop: 54738,
		rate: 173,
		females: 0.05,
		juveniles: 0,
		occupancy: 1.539,
		government: "Executive Republic",
	},
	VNM: {
		country: "Vietnam",
		pop: 115035,
		rate: 122,
		females: 0.101,
		juveniles: "--",
		occupancy: "--",
		government: "Executive Republic",
	},
	SAH: {
		country: "Western Sahara",
		pop: "--",
		rate: "--",
		females: "--",
		juveniles: "--",
		occupancy: "--",
		government: "Disputed",
	},
	YEM: {
		country: "Yemen",
		pop: 14000,
		rate: 53,
		females: 0.016,
		juveniles: 0.019,
		occupancy: "--",
		government: "Provisional Government",
	},
	ZMB: {
		country: "Zambia",
		pop: 25000,
		rate: 160,
		females: 0.01,
		juveniles: 0.025,
		occupancy: 3.03,
		government: "Executive Republic",
	},
	ZWE: {
		country: "Zimbabwe",
		pop: 19521,
		rate: 120,
		females: 0.022,
		juveniles: 0.005,
		occupancy: 1.109,
		government: "Executive Republic",
	},
};
