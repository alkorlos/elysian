const menuElementActive = function () {
	const location = window.location.href;
	const locationCurrent = './' + location.split('/').pop();
	const menuElements = document.querySelectorAll('.menu-main__element');
	let menuCheck = false;

	if (menuElements) {
		for (let i = 0; i < menuElements.length; i++) {
			const menuLinkHref = menuElements[i].querySelector('.menu-main__link').getAttribute('href');

			if (locationCurrent === menuLinkHref) {
				menuCheck = true;
				menuElements[i].classList.add('menu-main__element_active');
			}
		}

		if (!menuCheck) {
			menuElements[0].classList.add('menu-main__element_active');
		}
	}
};

export { menuElementActive };
