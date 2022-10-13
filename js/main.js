window.addEventListener('load', () => {
	const media = document.querySelectorAll('a, img');
	for (let i = 0; i < media.length; i++) {
		media[i].setAttribute('draggable', false);
	};
});