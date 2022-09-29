// Burger js 

function burger() {
	const burger = document.querySelector('.icon-menu ');
	const burgerMenu = document.querySelector('.menu__body');
	const li = document.querySelectorAll('.menu__item-list')
	const subMenu = document.querySelector('.first-list');
	const body = document.querySelector('body');
	const preScrin = document.querySelector('.menu__pre-scrin');


	burger.addEventListener('click', () => {
		burgerMenu.classList.toggle('active');
		subMenu.classList.toggle('active');
	})
	burger.addEventListener('click', () => {
		burger.classList.toggle('_active');
		body.classList.toggle('_lock');
		preScrin.classList.toggle('_active');
	});
	burger.addEventListener('click', () => {
		for (let i = 0; i < li.length; i++)
			li[i].classList.toggle('active');

	})
}

burger();