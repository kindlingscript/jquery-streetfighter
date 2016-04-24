function playHadouken() {
  $("#hadouken-sound")[0].volume = 0.5;
  $("#hadouken-sound")[0].load();
  $("#hadouken-sound")[0].play();
}

function coolPoseSound() {
  $("#cool-pose-sound")[0].volume = 0.5;
  $("#cool-pose-sound")[0].play();
}

function playMainMusic() {
  $("#main-sound")[0].volume = 0.2;
  $("#main-sound")[0].load();
  $("#main-sound")[0].play();
}

function playIntro() {
  $(".logo").fadeIn(4500, function() {
    $(this).fadeOut(5000, function() {
      $("h1").fadeIn(2000, function() {
        $(this).fadeOut(10000);
      })
    })
  })
}

$(document).ready(function() {
  playMainMusic();
  playIntro();
  $(".ryu").mouseenter(function() {
    $(".ryu-still").hide();
    $(".ryu-ready").show();
  })
  .mouseleave(function() {
    $(".ryu-ready").hide();
    $(".ryu-still").show();
  })
  .mousedown(function() {
    playHadouken();
    $(".ryu-ready").hide();
    $(".ryu-throwing").show();
    $(".hadouken").finish().show().animate(
    {"left": "1020px"},
    500,
    function() {
      $(this).hide();
      $(this).css("left", "618px");
    })
  })
  .mouseup(function() {
    $(".ryu-throwing").hide();
    $(".hadouken").hide();
    $(".ryu-ready").show();
  })
});

$(document).keydown(function(e) {
  if (e.which == 88) {
    $("#main-sound")[0].pause();
    coolPoseSound();
    $(".ryu-ready").hide();
    $(".ryu-cool").show();
  }
})
  .keyup(function(e) {
    if (e.which == 88) {
      $(".ryu-cool").hide();
      $(".ryu-ready").show();
      $("#cool-pose-sound")[0].pause();
      $("#cool-pose-sound")[0].load();
      $("#main-sound")[0].play();
    }
});