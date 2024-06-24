$(document).ready(function () {
  $(
    ".hd_gnb ul li:nth-child(2) a, .hd_gnb ul li:nth-child(3) a, .hd_gnb ul li:nth-child(4) a"
  ).mouseenter(function () {
    $(this).css("font-family", "GmarketSansBold");
  });

  $(
    ".hd_gnb ul li:nth-child(2) a, .hd_gnb ul li:nth-child(3) a, .hd_gnb ul li:nth-child(4) a"
  ).mouseleave(function () {
    $(this).css("font-family", "GmarketSansMedium");
  });

  $(".mobile_header .fa-bars").click(function () {
    $(".mobile_header ul").toggle();
  });
});

gsap.set(".introduce_card ul li", { opacity: 0, y: 20 });

gsap.utils.toArray(".introduce_card ul li").forEach((card, index) => {
  gsap.to(card, {
    opacity: 1,
    y: 0,
    duration: 1,
    delay: index * 0.3,
  });
});

gsap.set(".company_goal_slide", { opacity: 0, y: 20 });

gsap.utils.toArray(".company_goal_slide").forEach((card, index) => {
  gsap.to(card, {
    opacity: 1,
    y: 0,
    duration: 1,
  });
});

gsap.set(".map", { opacity: 0, y: 20 });

gsap.utils.toArray(".map").forEach((card, index) => {
  gsap.to(card, {
    opacity: 1,
    y: 0,
    duration: 1,
  });
});
