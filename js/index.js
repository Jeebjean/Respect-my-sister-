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

var acc = document.getElementsByClassName("faq_question");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var answer = this.nextElementSibling;
    if (answer.style.display === "block") {
      answer.style.display = "none";
    } else {
      answer.style.display = "block";
    }
  });
}
// profil_but

var acct = document.getElementsByClassName("profil_but");
var i;

for (i = 0; i < acct.length; i++) {
  acct[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var answer = this.nextElementSibling;
    if (answer.style.display === "block") {
      answer.style.display = "none";
    } else {
      answer.style.display = "block";
    }
  });
}
