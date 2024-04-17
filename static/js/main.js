function updateCopyright() {
	const currentYear = new Date().getFullYear();
	const copyrightElement = document.getElementById("copy");
	if (copyrightElement) {
		copyrightElement.innerHTML = currentYear;
	}
}

function youAreHereNavigation() {
	const links = document.querySelectorAll(".nav_inner_list_item");
	const cartLink = document.querySelector(".cart a");
	const cartAttr = cartLink.getAttribute("href");
	const currentPath = window.location.pathname;

	if (currentPath === cartAttr) {
		cartLink.classList.add("active");
	}

	links.forEach((link) => {
		const linkPath = link.getAttribute("href");
		if (linkPath === currentPath) {
			link.classList.add("active");
		}
	});
}

function toggleMenu() {
	const menu = document.querySelector(".menu");
	const nav = document.querySelector(".nav");
	menu.addEventListener("click", function () {
		nav.classList.toggle("active");
	});
}

document.addEventListener("DOMContentLoaded", function () {
	updateCopyright();
	youAreHereNavigation();
	toggleMenu();
});
