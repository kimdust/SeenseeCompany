document.addEventListener("DOMContentLoaded", function () {
  gsap.utils.toArray(".txt_box2").forEach((box, index) => {
    const textWidth = box.querySelector("p").offsetWidth;
    const clone = box.cloneNode(true);
    box.parentElement.insertBefore(clone, box);

    gsap.to([box, clone], {
      x: `${textWidth}px`,
      duration: 200,
      ease: "linear",
      repeat: -1,
      modifiers: {
        x: gsap.utils.unitize((x) => (parseFloat(x) % textWidth) - textWidth),
      },
    });
  });
});

gsap.set(".intro_main_txt span, .intro_main_txt h2", { opacity: 0 });
gsap.to(".intro_main_txt span", { opacity: 1, duration: 1, delay: 0.5 });
gsap.to(".intro_main_txt h2", { opacity: 1, duration: 1, delay: 1.5 });

$(document).ready(function () {
  $(".up_btn").hide();

  $(window).scroll(function () {
    if ($(this).scrollTop() > 951) {
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

  $(".hd_gnb ul li a").mouseenter(function () {
    $(this).css("font-family", "GmarketSansBold");
  });

  $(".hd_gnb ul li a").mouseleave(function () {
    $(this).css("font-family", "GmarketSansMedium");
  });
});
