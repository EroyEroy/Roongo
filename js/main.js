window.addEventListener('load', () => {
	const media = document.querySelectorAll('a, img'),
		allImg = document.querySelectorAll('img');
	for (let i = 0; i < media.length; i++) {
		media[i].setAttribute('draggable', false);
	};
	for (let i = 0; i < allImg.length; i++) {
		allImg[i].setAttribute('loading', 'lazy');
	};
});