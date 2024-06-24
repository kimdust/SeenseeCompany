$(document).ready(function () {
  $(".up_btn").hide();

  $(window).scroll(function () {
    if ($(this).scrollTop() > 500) {
      $(".up_btn").fadeIn();
      $(".up_btn").css("visibility", "visible");
    } else {
      $(".up_btn").fadeOut();
      $(".up_btn").css("visibility", "hideen");
    }
  });

  $(".up_btn").click(function () {
    $("html, body").animate({ scrollTop: 0 }, 800);
    return false;
  });

  $(
    ".hd_gnb ul li:nth-child(1) a, .hd_gnb ul li:nth-child(3) a, .hd_gnb ul li:nth-child(4) a"
  ).mouseenter(function () {
    $(this).css("font-family", "GmarketSansMedium");
  });

  $(
    ".hd_gnb ul li:nth-child(1) a, .hd_gnb ul li:nth-child(3) a, .hd_gnb ul li:nth-child(4) a"
  ).mouseleave(function () {
    $(this).css("font-family", "GmarketSansLight");
  });

  $(
    ".mobile_header ul li:nth-child(1) a, .mobile_header ul li:nth-child(3) a, .mobile_header ul li:nth-child(4) a"
  ).mouseenter(function () {
    $(this).css("font-family", "GmarketSansMedium");
  });

  $(
    ".mobile_header ul li:nth-child(1) a, .mobile_header ul li:nth-child(3) a, .mobile_header ul li:nth-child(4) a"
  ).mouseleave(function () {
    $(this).css("font-family", "GmarketSansLight");
  });

  $(".mobile_header .fa-bars").click(function () {
    $(".mobile_header ul").toggle();
  });
});

gsap.registerPlugin(ScrollTrigger);
gsap.set(".musical", { opacity: 0, y: 20 });

gsap.utils.toArray(".musical").forEach((card, index) => {
  gsap.to(card, {
    opacity: 1,
    y: 0,
    duration: 1,
    delay: index * 0.3,
  });
});

gsap.from(".plays", {
  scrollTrigger: {
    trigger: ".plays",
    start: "top 80%",
    end: "bottom 20%",
    toggleActions: "play none none none",
  },
  y: 100,
  opacity: 0,
  duration: 1,
  stagger: 0.3,
});

gsap.set("#main_musical ul li", { opacity: 0, y: 20 });
gsap.utils.toArray("#main_musical ul li").forEach((card, index) => {
  gsap.to(card, {
    opacity: 1,
    y: 0,
    duration: 0.5,
    delay: index * 0.2,
  });
});

gsap.set("#main_plays ul li", { opacity: 0, y: 20 });
gsap.utils.toArray("#main_plays ul li").forEach((card, index) => {
  gsap.to(card, {
    opacity: 1,
    y: 0,
    duration: 0.5,
    delay: index * 0.2,
  });
});
