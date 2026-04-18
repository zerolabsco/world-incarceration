let _pendingResult = false;

export function initCompare(countries) {
	const opts = Object.entries(countries)
		.sort((a, b) => a[1].country.localeCompare(b[1].country))
		.map(([key, val]) => `<option value="${key}">${val.country}</option>`)
		.join("");

	document.getElementById("compare-select-1").innerHTML = opts;
	document.getElementById("compare-select-2").innerHTML = opts;

	document.getElementById("compare-go-btn").addEventListener("click", () => {
		const k1 = document.getElementById("compare-select-1").value;
		const k2 = document.getElementById("compare-select-2").value;

		if (k1 === k2) {
			document.getElementById("compare-alert").innerHTML =
				"<div class='alert alert-danger'>Please select two different countries.</div>";
			return;
		}
		document.getElementById("compare-alert").innerHTML = "";
		_prepareResult(countries[k1], countries[k2]);
		_pendingResult = true;
		const cm = document.getElementById("compareModal");
		(bootstrap.Modal.getInstance(cm) || new bootstrap.Modal(cm)).hide();
	});

	// Show result modal only after compareModal finishes hiding
	document.getElementById("compareModal").addEventListener("hidden.bs.modal", () => {
		if (_pendingResult) {
			_pendingResult = false;
			const rm = document.getElementById("compareResultModal");
			(bootstrap.Modal.getInstance(rm) || new bootstrap.Modal(rm)).show();
		}
	});
}

function _prepareResult(c1, c2) {
	document.getElementById("compare-result-c1").textContent = c1.country;
	document.getElementById("compare-result-c2").textContent = c2.country;

	const rows = [
		["Prison Population", _fmt(c1.pop, "pop"),       _fmt(c2.pop, "pop")],
		["Rate per 100,000",  _fmt(c1.rate, "rate"),     _fmt(c2.rate, "rate")],
		["Females",           _fmt(c1.females, "pct"),   _fmt(c2.females, "pct")],
		["Juveniles",         _fmt(c1.juveniles, "pct"), _fmt(c2.juveniles, "pct")],
		["Occupancy",         _fmt(c1.occupancy, "pct"), _fmt(c2.occupancy, "pct")],
		["Government",        _fmtGov(c1.government),   _fmtGov(c2.government)],
	];

	document.getElementById("compare-result-body").innerHTML = rows
		.map(([label, v1, v2]) =>
			`<tr><td><b>${label}</b></td><td>${v1}</td><td>${v2}</td></tr>`
		)
		.join("");
}

function _fmt(val, type) {
	if (val === "--" || val === null || val === undefined || (typeof val === "number" && isNaN(val))) {
		return "<span class='text-danger'>N/A</span>";
	}
	if (type === "pop") return Number(val).toLocaleString("en");
	if (type === "rate") return String(val);
	if (type === "pct") return (val * 100).toFixed(2) + " %";
	return String(val);
}

function _fmtGov(val) {
	return (!val || val === "--") ? "<span class='text-danger'>N/A</span>" : val;
}
