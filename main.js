const $navbar = document.querySelector("#navbar");
const $navbarHeight = $navbar.getBoundingClientRect().height;
const $navbarMenu = document.querySelector(".navbar__menu");

// 메뉴에 맞춰 이동
$navbarMenu.addEventListener("click", (e) => {
	const target = e.target;
	const link = target.dataset.link;

	if (link == null) return;

	const scrollTo = document.querySelector(`.${link}`);

	scrollTo.scrollIntoView({ behavior: "smooth" });
});

// header scroll 하면 bg색 바꾸기
window.addEventListener("scroll", () => {
	if ($navbarHeight < window.scrollY) {
		$navbar.classList.add("active");
	} else {
		$navbar.classList.remove("active");
	}
	console.log(window.scrollY);
});
