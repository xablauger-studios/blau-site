// # module: animated-logo
//
// Animates the SVG logo, giving it the appearance of being drawn.

;(() => {

	'use strict';

	const logo = new Vivus('logo', {
	  type: 'async',
	  duration: 800,
	  start: 'autostart',
	  animTimingFunction: Vivus.EASE_OUT_BOUNCE,
	  pathTimingFunction: Vivus.EASE_IN
	}, () => {
	  document.getElementById("b").style.fill="#000000";
	  document.getElementById("l").style.fill="#000000";
	  document.getElementById("a").style.fill="#000000";
	  document.getElementById("u").style.fill="#000000";
	});

})();
