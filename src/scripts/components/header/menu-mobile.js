const menuMobile = function () {
	const body = document.querySelector('body');
	const header = document.querySelector('.header');
	const menuFormButton = document.querySelector('.menu-form__button');
	const menuMobile = document.querySelector('.menu-mobile');

	if (menuFormButton) {
		menuFormButton.addEventListener('click', function () {
			if (!this.classList.contains('menu-form__button_active')) {
				body.classList.add('no-scroll');
				header.classList.add('header_menu-mobile');
				this.classList.add('menu-form__button_active');
				menuMobile.classList.add('menu-mobile_visible');
			} else if (this.classList.contains('menu-form__button_active')) {
				body.classList.remove('no-scroll');
				header.classList.remove('header_menu-mobile');
				this.classList.remove('menu-form__button_active');
				menuMobile.classList.remove('menu-mobile_visible');
			}
		});
	}
};

export { menuMobile };
