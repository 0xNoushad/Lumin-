// Import necessary functions and classes
import { preloadFonts } from './utils.js';
import { Item } from './item.js';

 
let lenis;

 
const initSmoothScrolling = () => {
	 
	lenis = new Lenis({
		lerp: 0.1,  
		smoothWheel: true  
	});

	 
	lenis.on('scroll', () => ScrollTrigger.update());

	 
	const scrollFn = (time) => {
		lenis.raf(time);  
		requestAnimationFrame(scrollFn); 
	};
 
	requestAnimationFrame(scrollFn);
};

// Start preloading fonts
preloadFonts('qsy7khk').then(() => {
    
    document.body.classList.remove('loading');
  
	initSmoothScrolling();
	 
	[...document.querySelectorAll('.content-wrap')].forEach(element => {
		new Item(element);
	});
});

 

 
