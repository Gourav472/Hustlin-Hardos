
function openNav() {
  document.getElementById("navbar").classList.toggle("start-0");
  document.body.classList.toggle("overflow_hidden");
  document.querySelector(".menu").classList.toggle("cross")
}

function subtract() {
  const value = document.getElementById("store")  
  if (value.innerHTML > 100) {
    value.innerHTML = +value.innerHTML - 1
  }
}
function add() {
  const value = document.getElementById("store")
  value.innerHTML = + value.innerHTML + 1
}

var countDownDate = new Date("Apr 25, 2024 15:37:25").getTime();

var x = setInterval(function () {

  var now = new Date().getTime();

  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("demo").innerHTML = days + ":" + hours + ":"
    + minutes + ":" + seconds;

  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);













$('.responsive_2').slick({
  dots: false,
  infinite: true,
  speed: 1000,
  slidesToShow: 2,
  autoplay: false,
  slidesToScroll: 1,
  arrows: true,
  prevArrow: ".btn_prev_2",
  nextArrow: ".btn_next_2",
  responsive: [
    {
      breakpoint: 1400,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,


      }
    },
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,


      }
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 617,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,

      }
    },
    {
      breakpoint: 500,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,

      }
    },
  ]
});

$('.responsive_1').slick({
  dots: false,
  infinite: true,
  speed: 1000,
  slidesToShow: 3,
  slidesToScroll: 2,
  arrows: true,
  prevArrow: ".prev-btn",
  nextArrow: ".next-btn",
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,


      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        autoplay: true,
      }
    },
    {
      breakpoint: 500,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,

      }
    }
  ]
});

let mybutton = document.getElementById("myBtn");

window.onscroll = function () { scrollFunction() };

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0; 
  document.documentElement.scrollTop = 0;
}
new Date().getFullYear()
document.getElementById("year").innerHTML = new Date().getFullYear();