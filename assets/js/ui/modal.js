export function showCountryModal(countryData) {
	document.getElementById("country-modal-title").textContent = countryData.country;
	document.getElementById("country-modal-body").innerHTML = `
		<p><b>Prison Population:</b> ${_fmt(countryData.pop, "pop")}</p>
		<p><b>Rate per 100,000 Citizens:</b> ${_fmt(countryData.rate, "rate")}</p>
		<p><b>Females:</b> ${_fmt(countryData.females, "pct")}</p>
		<p><b>Juveniles:</b> ${_fmt(countryData.juveniles, "pct")}</p>
		<p><b>Occupancy:</b> ${_fmt(countryData.occupancy, "pct")}</p>
		<p><b>Government:</b> ${_fmtGov(countryData.government)}</p>
	`;
	const el = document.getElementById("countryModal");
	(bootstrap.Modal.getInstance(el) || new bootstrap.Modal(el)).show();
}

function _fmt(val, type) {
	if (val === "--" || val === null || val === undefined || (typeof val === "number" && isNaN(val))) {
		return "<span class='text-danger'>Information not available.</span>";
	}
	if (type === "pop") return Number(val).toLocaleString("en");
	if (type === "rate") return String(val);
	if (type === "pct") return (val * 100).toFixed(2) + " %";
	return String(val);
}

function _fmtGov(val) {
	return (!val || val === "--")
		? "<span class='text-danger'>Information not available.</span>"
		: val;
}
