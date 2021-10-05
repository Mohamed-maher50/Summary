document.querySelectorAll("body")[0].onscroll = function () {
  this.scrollY > 100
    ? $(".navbar").addClass("active")
    : $(".navbar").removeClass("active");
};
$(document).ready(function () {
  $("body").niceScroll({
    zindex: 6,
    cursorwidth: "10",

    cursorcolor: "#e2a355",
    mousescrollstep: 50,
    smoothscroll: true,

    smoothscroll: true,
  });
});
console.log(document.querySelectorAll(".Hiking")[0]);
