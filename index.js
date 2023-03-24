const favoriteButton = document.querySelectorAll('button.fa-heart');
const closeButton = document.querySelectorAll('button.fa-circle-xmark');
const readButton = document.querySelectorAll('button.fa-circle-check');

favoriteButton.forEach((e) => {
	e.addEventListener('click', function () {
		this.classList.toggle('fa-solid');
		this.classList.toggle('fa-regular');
	});
});

closeButton.forEach((e) => {
	e.addEventListener('click', function () {
		this.classList.toggle('fa-solid');
		this.classList.toggle('fa-regular');
		this.closest('.news-card').remove();
	});
});

readButton.forEach((e) => {
	e.addEventListener('click', function () {
		this.closest('.news-card').classList.toggle('read');
	});
});
