'use strict';



let
	images = [
		'assets/63535.jpg',
		'assets/6437635.jpg',
		'assets/54673245.jpg',
		'assets/367.jpg'
	],
	maxImg = images.length,
	image = 1,
	slider = document.getElementsByClassName('slider')[0],
	str = '',
	animation = false;



var funSlide = function(e) {

	if(animation) return;
	animation = true;

	let
		n = image + e,
		nextImg = n <= maxImg ? n > 0 ? n : 4 : 1,
		img = document.getElementsByClassName('sImg')[nextImg - 1];

	funCreateSlide(e, nextImg);

	image = nextImg;
};

var funCreateSlide = function(e, nextImg) {

	let block = document.getElementsByClassName('images')[0];


	block.style = 'left: -1920px;';

	if(e === 1) {

		block.innerHTML =
			'<img class="sImg" src=' + images[image - 1] + '>' +
			'<img class="sImg" src=' + images[nextImg - 1] + '>';

		block.classList.toggle('transition');
	
	} else {

		block.innerHTML =
			'<img class="sImg" src=' + images[nextImg - 1] + '>' +
			'<img class="sImg" src=' + images[image - 1] + '>';
	
		setTimeout(function() {

			block.classList.toggle('transition');
			block.style = 'left: 0px;';
		}, 20);
	}



	setTimeout(function() {

		block.style = 'left: 0px;';
		block.classList.toggle('transition');
		block.innerHTML = '<img class="sImg" src=' + images[nextImg - 1] + '>';

		animation = false;
	}, 2000);
};



var funAutoSlide = function() {

	setTimeout(function(){

		funSlide(1);
		funAutoSlide();

	}, 8000);
};

funAutoSlide();