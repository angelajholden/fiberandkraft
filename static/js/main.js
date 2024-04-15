function updateCopyright() {
	const currentYear = new Date().getFullYear();
	const copyrightElement = document.getElementById("copy");
	if (copyrightElement) {
		copyrightElement.innerHTML = currentYear;
	}
}

document.addEventListener("DOMContentLoaded", function () {
	updateCopyright();
});
