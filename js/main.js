let swiper = Swiper;
let init = false;

const mobile = window.matchMedia("(min-width: 0) and (max-width: 767px)");
const tablet = window.matchMedia("(min-width: 768px) and (max-width: 1119px)");
const desktop = window.matchMedia("(min-width: 1120px)");
const brandsTablet = document.querySelectorAll(".brands__list div:nth-last-child(-n + 5)");
const brandsDesktop = document.querySelectorAll(".brands__list div:nth-last-child(-n + 3)");
const btnHide = document.querySelector(".btn__hide");
const btnShow = document.querySelector(".btn__show");

function swiperMod() {
	if (mobile.matches) {
		if (!init) {
			init = true;
			swiper = new Swiper('.swiper', {
				slidesPerView: "auto",
				loop: true,
				spaceBetween: 16,
				pagination: {
					el: ".swiper-pagination",
					clickable: true,
				},
			});
			btnHide.style.display = "none";
			btnShow.style.display = "none";
		}
	} else if (tablet.matches || desktop.matches) {
		swiper.destroy();
		init = false;
		btnHide.style.display = "none";
		btnShow.style.display = "block";
	}
}

window.addEventListener("load", () => {
	swiperMod();
});

window.addEventListener("resize", () => {
	swiperMod();
});

btnShow.addEventListener("click", () => {
	if (tablet.matches) {
		brandsTablet.forEach((button) => {
			button.style.display = "flex";
		});
	}
	if (desktop.matches) {
		brandsDesktop.forEach((button) => {
			button.style.display = "flex";
		});
	}
	btnHide.style.display = "block";
	btnShow.style.display = "none";
});
btnHide.addEventListener("click", () => {
	if (tablet.matches) {
		brandsTablet.forEach((button) => {
			button.style.display = "none";
		});
	}
	if (desktop.matches) {
		brandsDesktop.forEach((button) => {
			button.style.display = "none";
		});
	}
	btnShow.style.display = "block";
	btnHide.style.display = "none";
})
