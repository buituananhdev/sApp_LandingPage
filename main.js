// Hàm bắt sự kiện scroll hiện navbar 
document.addEventListener("DOMContentLoaded",function() {
var menu = document.querySelectorAll('header.navbar');
var menu = menu[0];
    //Truy xuất header
    var trangthai="duoi400";
window.addEventListener("scroll",function(){
var x = pageYOffset;
if(x > 400){
	if(trangthai == "duoi400")
	{
		trangthai="tren400";
		menu.classList.add('navbar-sticky');
	}
}
else{
	if(trangthai=="tren400"){
		menu.classList.remove('navbar-sticky');
		trangthai="duoi400";}
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
		var trangthai="duoi400";
	window.addEventListener("scroll",function(){
	var x = pageYOffset;
	if(x > 200){
		if(trangthai == "duoi400")
		{
			trangthai="tren400";
			
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
	else{
		if(trangthai=="tren400"){
			trangthai="duoi400";}
		}
	})
	})


// slick slider
$(document).ready(function () {
    $(".image-slider").slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      infinite: true,
      arrows: true,
      draggable: false,
      prevArrow: `<button type='button' class='slick-prev slick-arrow'><ion-icon name="arrow-back-outline"></ion-icon></button>`,
      nextArrow: `<button type='button' class='slick-next slick-arrow'><ion-icon name="arrow-forward-outline"></ion-icon></button>`,
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
      // autoplay: true,
      // autoplaySpeed: 1000,
    });
  });

//auto slide
window.onload=function(){
	$('.slider').slick({
	autoplay:true,
	autoplaySpeed:1500,
	arrows:true,
	centerMode:true,
	slidesToShow:3,
	slidesToScroll:2
	});
  };
  