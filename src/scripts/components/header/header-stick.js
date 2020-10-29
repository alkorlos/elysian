import Headroom from 'headroom.js';

const headerStick = function () {
	const header = document.querySelector('.header');

	if (header) {
		const headroom = new Headroom(header, { offset: 40 });
		headroom.init();
	}
};

export { headerStick };
