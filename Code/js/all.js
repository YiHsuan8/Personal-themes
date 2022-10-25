// tab標籤切換

$(document).ready(function () {
  tabCutover();
});

function tabCutover() {
  $(".tabTitle li.active").each(function () {
    var tablink = $(this).find("a").data("tablink");

    $("#" + tablink)
      .show()
      .siblings(".tabInner")
      .hide();
  });

  $(".tabTitle li").click(function () {
    $("#" + $(this).find("a").data("tablink"))
      .show()
      .siblings(".tabInner")
      .hide();
    $(this).addClass("active").siblings(".active").removeClass("active");
  });
}

// loading

$(function () {
  $(window).load(function () {
    $("#loading").delay(2000).fadeOut(1000);
    $("#loadingSvg").delay(2000).fadeOut(1000);
    document.cookie = "loading = on";
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
  if ($(window).scrollTop() > 200) {
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

// slider

$(function () {
  let divWidth = $("#sliderBoard").width();
  let imgCount = $("#content li").length;

  for (let i = 0; i < imgCount; i++) {
    $("#contentButton").append(`<li></li>`);
  }
  $("#contentButton li:nth-child(1)").addClass("clicked");

  $("#content li").width(divWidth);
  $("#content").width(divWidth * imgCount);

  // ==========
  let index = 0;

  $("#contentButton li").click(function () {
    index = $(this).index();

    $("#content").animate({
      left: divWidth * index * -1,
    });

    $(this).addClass("clicked");
    $("#contentButton li").not(this).removeClass("clicked");
  });

  function moveToTheNext() {
    if (index < imgCount - 1) {
      index++;
    } else {
      index = 0;
    }

    $("#content").animate({
      left: divWidth * index * -1,
    });

    $(`#contentButton li:eq(${index})`).addClass("clicked");
    $(`#contentButton li`).not(`:eq(${index})`).removeClass("clicked");
  }
});
