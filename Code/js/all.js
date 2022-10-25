// tab標籤切換

$(document).ready(function () {
  tabCutover();
});

function tabCutover() {
  $(".tab-title li.active").each(function () {
    var tablink = $(this).find("a").data("tablink");

    $("#" + tablink)
      .show()
      .siblings(".tab-inner")
      .hide();
  });

  $(".tab-title li").click(function () {
    $("#" + $(this).find("a").data("tablink"))
      .show()
      .siblings(".tab-inner")
      .hide();
    $(this).addClass("active").siblings(".active").removeClass("active");
  });
}

// loading

$(function () {
  $(window).load(function () {
    $("#loading").delay(2000).fadeOut(1000);
    $("#loadingSvg").delay(2000).fadeOut(1000);
  });
});

// toTop

$(function () {
  $(".toTopIcon").click(function (e) {
    e.preventDefault();
    $("html,body").animate(
      {
        scrollTop: 0,
      },
      600
    );
  });
});

$(window).scroll(function () {
  if ($(window).scrollTop() > 250) {
    if ($(".toTop").hasClass("hide")) {
      $(".toTop").toggleClass("hide");
    }
  } else {
    $(".toTop").addClass("hide");
  }
});

// accordion

$(function () {
  $(".accBtn").click(function (e) {
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
