import { menuElementActive } from './menu-element-active';
import { menuMobile } from './menu-mobile';
import { headerStick } from './header-stick';

const header = function () {
	menuElementActive();
	menuMobile();
	headerStick();
};

export { header };
