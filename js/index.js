$(function () {
  $(".acc_ctrl").on("click", function (e) {
    e.preventDefault();
    if ($(this).hasClass("active")) {
      $(this).removeClass("active");
      $(this).next().stop().slideUp(300);
    } else {
      $(this).addClass("active");
      $(this).next().stop().slideDown(300);
    }
  });
});

let line1 = document.querySelector(".texto-superior");
let line2 = document.querySelector(".texto-inferior");

window.onscroll = () => {
  let pos = window.scrollY - 1000;
  line1.style.left = `${pos}px`;
  line2.style.right = `${pos}px`;
};
