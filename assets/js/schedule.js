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
    ".hd_gnb ul li:nth-child(1) a, .hd_gnb ul li:nth-child(2) a, .hd_gnb ul li:nth-child(4) a"
  ).mouseenter(function () {
    $(this).css("font-family", "GmarketSansBold");
  });

  $(
    ".hd_gnb ul li:nth-child(1) a, .hd_gnb ul li:nth-child(2) a, .hd_gnb ul li:nth-child(4) a"
  ).mouseleave(function () {
    $(this).css("font-family", "GmarketSansMedium");
  });

  $("#main_2023, #main_2025").hide();

  $("#main_2024 > .year > #before .fa-angle-left").click(function () {
    $("#main_2024").hide();
    $("#main_2023").show();
  });

  $("#main_2024 > .year > #next .fa-angle-right").click(function () {
    $("#main_2024").hide();
    $("#main_2025").show();
  });

  $("#main_2025 > .year > #before .fa-angle-left").click(function () {
    $("#main_2025").hide();
    $("#main_2024").show();
  });

  $("#main_2023 > .year > #next .fa-angle-right").click(function () {
    $("#main_2023").hide();
    $("#main_2024").show();
  });

  $(".mobile_header .fa-bars").click(function () {
    $(".mobile_header ul").toggle();
  });
});

gsap.set(".schedule_list", { opacity: 0, y: 20 });

gsap.utils.toArray(".schedule_list").forEach((card, index) => {
  gsap.to(card, {
    opacity: 1,
    y: 0,
    duration: 1,
    delay: index * 0.3,
  });
});
