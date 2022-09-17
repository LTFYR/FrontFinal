$(function () {
  var tab = $(".btn-for-tab"),
    content = $(".content-tab");

  tab.filter(":first").addClass("active");

  content.filter(":not(:first)").hide();

  tab.click(function () {
    var indeks = $(this).index();
    tab.removeClass("active").eq(indeks).addClass("active");
    console.log(indeks);
    content.hide().eq(indeks).fadeIn(500);
    console.log(content);
    return false;
  });
});

window.addEventListener("scroll", function () {
  var head = document.querySelector(".header-end");
  var homeli = this.document.querySelector(".mainmenu");
  var beforeElement = this.window.getComputedStyle(homeli, "::before");
  head.classList.toggle("sticky", window.scrollY > 120);
  console.log(beforeElement.backgroundColor);
  beforeElement.opacity = "0";

  $(document).ready(function () {
    $("#close-btn").click(function () {
      $("#search-overlay").fadeOut();
      $("#search-btn").show();
    });
    $("#search-btn").click(function () {
      $(this).hide();
      $("#search-overlay").fadeIn();
    });
  });
});

function openSearch() {
  document.getElementById("myOverlay").style.display = "block";
}

function closeSearch() {
  document.getElementById("myOverlay").style.display = "none";
}

// $(function () {
//   "use strict";

//   $(".image-animation img").click(function () {
//     var $src = $(this).attr("src");
//     $(".show").fadeIn();
//     $(".img-show img").attr("src", $src);
//   });

//   $("span, .overlay").click(function () {
//     $(".show").fadeOut();
//   });
// });

const lightbox = document.createElement("div");
lightbox.id = "lightbox";
document.body.appendChild(lightbox);
const images = document.querySelectorAll(".image-animation img");
images.forEach((image) => {
  image.addEventListener("click", (e) => {
    lightbox.classList.add("active");
    const img = document.createElement("img");
    img.src = image.src;
    while (lightbox.firstChild) {
      lightbox.removeChild(lightbox.firstChild);
    }
    lightbox.appendChild(img);
  });
});

//burada bele bir exception var idi. index.scss 1796-ci setirde hover olduqda pseudo element gorunurdu background olaraq. ancaq problem budur ki menim JS kodum bu pseudo elemnte gore islemirdi. men de hemin sebebden yazilmis 1796. setirdeki kodu commente atdim

lightbox.addEventListener("click", (e) => {
  if (e.target !== e.currentTarget) return;
  lightbox.classList.remove("active");
});
