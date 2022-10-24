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

// RWD
