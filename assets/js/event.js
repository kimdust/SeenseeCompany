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
    ".hd_gnb ul li:nth-child(1) a, .hd_gnb ul li:nth-child(2) a, .hd_gnb ul li:nth-child(3) a"
  ).mouseenter(function () {
    $(this).css("font-family", "GmarketSansBold");
  });

  $(
    ".hd_gnb ul li:nth-child(1) a, .hd_gnb ul li:nth-child(2) a, .hd_gnb ul li:nth-child(3) a"
  ).mouseleave(function () {
    $(this).css("font-family", "GmarketSansMedium");
  });

  $(".mobile_header .fa-bars").click(function () {
    $(".mobile_header ul").toggle();
  });
});

gsap.set(".now_ing", { opacity: 0, y: 20 });

gsap.utils.toArray(".now_ing").forEach((card, index) => {
  gsap.to(card, {
    opacity: 1,
    y: 0,
    duration: 1,
    delay: index * 0.3,
  });
});

gsap.registerPlugin(ScrollTrigger);

gsap.from(".before_end", {
  scrollTrigger: {
    trigger: ".before_end",
    start: "top 80%",
    end: "bottom 20%",
    toggleActions: "play none none none",
  },
  y: 100,
  opacity: 0,
  duration: 1,
  stagger: 0.3,
});
