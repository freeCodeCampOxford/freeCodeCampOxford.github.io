//parallax scrolling Header and BG with ◇ indicator. Needs JQuery on.

$(document).scroll(function() {
  var st = $(this).scrollTop();
  $("#header").css({
    "background-position-y": (-st/20)
  })
  $("#headerc").css({
    "top": (-st/5),
    "bottom": (st/5)
  })
});
