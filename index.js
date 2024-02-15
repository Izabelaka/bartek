const mobileNav = document.querySelector(".mobile-nav");
const mobileNavBtn = document.querySelector(".mobile-nav__btn");
const body = document.body;
const accordion = document.querySelector(".accordion");
const accordionBtns = document.querySelectorAll(".accordion__btn");
const footerYear = document.querySelector(".footer__year");

mobileNavBtn.addEventListener("click", function () {
	if (mobileNav.classList.contains("mobile-nav__active")) {
		mobileNav.classList.remove("mobile-nav__active");
		body.classList.remove("bodyScroll");
	} else {
		mobileNav.classList.add("mobile-nav__active");
		body.classList.add("bodyScroll");
	}
});

const handleCurrentYear = () => {
	const year = new Date().getFullYear();
	footerYear.innerText = year;
};

handleCurrentYear();

function openAcordionTextBox() {
	if (this.nextElementSibling.classList.contains("accordion__active")) {
		this.nextElementSibling.classList.remove("accordion__active");
	} else {
		closeAcordionTextBox();
		this.nextElementSibling.classList.toggle("accordion__active");
	}
}

const closeAcordionTextBox = () => {
	const AllActiveItems = document.querySelectorAll(".accordion__text-box");
	AllActiveItems.forEach((item) => item.classList.remove("accordion__active"));
};

accordionBtns.forEach((btn) =>
	btn.addEventListener("click", openAcordionTextBox)
);

/////contact
const mobileNavLinks = document.querySelectorAll(".mobile-nav__list a");

mobileNavLinks.forEach((item) => {
	item.addEventListener("click", () => {
		mobileNav.classList.remove("mobile-nav__active");
		body.classList.remove("bodyScroll");
		mobileNavBtn.classList.remove("opened");
	});
});
