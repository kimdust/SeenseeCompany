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
    $(this).css("font-family", "GmarketSansBold");
  });

  $(
    ".hd_gnb ul li:nth-child(1) a, .hd_gnb ul li:nth-child(3) a, .hd_gnb ul li:nth-child(4) a"
  ).mouseleave(function () {
    $(this).css("font-family", "GmarketSansMedium");
  });
});
