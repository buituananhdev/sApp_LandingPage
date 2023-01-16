
// Get the button
let scroll_btn = document.getElementById("scrollUp");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
	if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
		scroll_btn.style.display = "block";
	} 
	else {
		scroll_btn.style.display = "none";
	}
}

// When the user clicks on the button, scroll to the top of the document
let offset = 500;
let duration = 350;
function topFunction() {
	window.addEventListener("scroll",function(){
		if ($(this).scrollTop() > offset)
			$('#scrollUp').fadeIn(duration);
		else
			$('#scrollUp').fadeOut(duration);
		});
	$('#scrollUp').click(function () {
	$('body,html').animate({scrollTop: 0}, 500);
	});
}


// Hàm bắt sự kiện scroll hiện navbar 
document.addEventListener("DOMContentLoaded",function() {
var menu = document.querySelectorAll('header.navbar');
var menu = menu[0];
var status="under400";
window.addEventListener("scroll",function(){
var x = pageYOffset;
if(x > 400){
	if(status == "under400")
	{
		status="over400";
		menu.classList.add('navbar-sticky');
	}
}
else{
	if(status=="over400"){
		menu.classList.remove('navbar-sticky');
		status="under400";}
	}
})
})

// Hàm tăng số
function animateNumber(finalNumber, duration = 0, startNumber = 0, callback) {
	const startTime = performance.now()
	function updateNumber(currentTime) {
		const elapsedTime = currentTime - startTime
		if (elapsedTime > duration) {
			callback(finalNumber)
		} else {
			const rate = elapsedTime / duration
			const currentNumber = Math.round(rate * finalNumber)
			callback(currentNumber)
			requestAnimationFrame(updateNumber)
		}
	}
	requestAnimationFrame(updateNumber)
}

// Hàm bắt sự kiện scroll tăng số
document.addEventListener("DOMContentLoaded",function() {
	var menu = document.querySelectorAll('header.navbar');
	var menu = menu[0];
		//Truy xuất header
	var status="under200";
	window.addEventListener("scroll",function(){
	var x = pageYOffset;
	if(x > 200){
		if(status == "under200")
		{
			status="over200";
			
				animateNumber(10, 850, 10, function (number) {
					const formattedNumber = number.toLocaleString()
					document.getElementById('users-count').innerText = formattedNumber
				})
				
				animateNumber(23, 850, 10, function (number) {
					const formattedNumber = number.toLocaleString()
					document.getElementById('download-count').innerText = formattedNumber
				})
				
				animateNumber(9, 850, 10, function (number) {
					const formattedNumber = number.toLocaleString()
					document.getElementById('customer-count').innerText = formattedNumber
				})
			
				animateNumber(12, 850, 10, function (number) {
					const formattedNumber = number.toLocaleString()
					document.getElementById('developer-count').innerText = formattedNumber
				})
		}
	}
	})
})


// hàm animation features
const box = document.getElementsByClassName('features__item');
window.addEventListener("scroll",function(){
var x = pageYOffset;
if(x > 830){
	box[0].classList.add('box__fully');
	box[1].classList.add('box__live');
	box[2].classList.add('box__secure');
}
})


// hàm animation price
const price = document.getElementsByClassName('price__item');
	window.addEventListener("scroll",function(){
	var x = pageYOffset;
	if(x >5300){
		price[0].classList.add('price__item1');
		price[1].classList.add('price__item2');
	}
})
// slick slider
$(document).ready(function () {
    $(".image-slider").slick({
		slidesToShow: 4,
		slidesToScroll: 1,
		infinite: true,
		arrows: false,
		draggable: true,
		dots: true,
		responsive: [
        {
			breakpoint: 1025,
			settings: {
				slidesToShow: 3,
			},
        },
        {
			breakpoint: 480,
			settings: {
				slidesToShow: 1,
				arrows: false,
				infinite: false,
			},
        },
		],
		autoplay: true,
		autoplaySpeed: 700,
    });
	});
