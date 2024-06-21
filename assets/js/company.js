var swiper = new Swiper(".company_goal_slide", {
  slidesPerView: 3,
  freeMode: true,
});

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
