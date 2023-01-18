const $navbar = document.querySelector("#navbar");
const $navbarHeight = $navbar.getBoundingClientRect().height;
const $navbarMenu = document.querySelector(".navbar__menu");
const $navbarList = document.querySelectorAll(".navbar__menu__item");
const projects = document.querySelectorAll(".project__content");

// 메뉴에 맞춰 이동
$navbarMenu.addEventListener("click", (e) => {
	const target = e.target;
	const link = target.dataset.link;

	if (link == null) return;

	const scrollTo = document.querySelector(`.${link}`);

	scrollTo.scrollIntoView({ behavior: "smooth" });
	const active = document.querySelector(".navbar__menu__item.active");
	active.classList.remove("active");
	e.target.classList.add("active");
});

// header scroll 하면 bg색 바꾸기
window.addEventListener("scroll", () => {
	if ($navbarHeight < window.scrollY) {
		$navbar.classList.add("active");
	} else {
		$navbar.classList.remove("active");
	}
});

let callback = (entries, observer) => {
	entries.forEach((item) => {
		if (item.isIntersecting) {
			item.target.style.right = "0";
		}
	});
};

const observer = new IntersectionObserver(callback);

projects.forEach((project) => observer.observe(project));
