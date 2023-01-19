// 메뉴에 맞춰 이동
const $navbarMenu = document.querySelector(".navbar__menu");

$navbarMenu.addEventListener("click", (e) => {
	const target = e.target;
	const link = target.dataset.link;

	if (link == null) return;

	const scrollTo = document.querySelector(`${link}`);

	scrollTo.scrollIntoView({ behavior: "smooth" });
	const active = document.querySelector(".navbar__menu__item.active");
	active.classList.remove("active");
	e.target.classList.add("active");
});

// home 버튼 누르면 프로젝트에 가는거
const $project = document.querySelector("#project");
const $mainBtn = document.querySelector(".main-title-btn");

$mainBtn.addEventListener("click", () => {
	$project.scrollIntoView({ behavior: "smooth" });
});
// menu btn open
const $menuBtn = document.querySelector(".navbar__toggle-btn");

$menuBtn.addEventListener("click", () => {
	$navbarMenu.classList.toggle("open");
});
// header scroll 하면 bg색 바꾸기
const $navbar = document.querySelector("#navbar");
const $navbarHeight = $navbar.getBoundingClientRect().height;

window.addEventListener("scroll", () => {
	if ($navbarHeight < window.scrollY) {
		$navbar.classList.add("active");
	} else {
		$navbar.classList.remove("active");
	}
});

//프로젝트 리스트에 맞춰 투명도
const projects = document.querySelectorAll(".project__content");
let callback = (entries, observer) => {
	entries.forEach((item) => {
		if (item.isIntersecting) {
			item.target.style.opacity = "1";
		}
	});
};

const observer = new IntersectionObserver(callback);
projects.forEach((project) => observer.observe(project));

// contact Ele 옵저보
const $contactImg = document.querySelector(".contact__img__box");

let contactCallback = (entries, observer) => {
	entries.forEach((i) => {
		if (i.isIntersecting) {
			i.target.style.animationName = "slide-in-left";
		}
	});
};
const contactObserver = new IntersectionObserver(contactCallback);

contactObserver.observe($contactImg);

// navbar

const sectionIds = ["#home", "#profile", "#project", "#contact"];
const sections = sectionIds.map((i) => document.querySelector(i));
const navItems = sectionIds.map((i) =>
	document.querySelector(`[data-link="${i}"]`)
);

let selectedNavItem = navItems[0];
const observerOptions = {
	root: null,
	rootMargin: "0px",
	threshold: 0.3,
};
const navObserverCallback = (entries, observer) => {
	entries.forEach((entry) => {
		if (!entry.isIntersecting && entry.intersectionRatio > 0) {
			const index = sectionIds.indexOf(`#${entry.target.id}`);
			let selectedIndex;
			if (entry.boundingClientRect.y < 0) {
				selectedIndex = index + 1;
			} else {
				selectedIndex = index - 1;
			}
			selectedNavItem.classList.remove("active");
			selectedNavItem = navItems[selectedIndex];
			selectedNavItem.classList.add("active");
		}
	});
};
const navObserver = new IntersectionObserver(
	navObserverCallback,
	observerOptions
);

sections.forEach((section) => navObserver.observe(section));
