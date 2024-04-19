$('.button').click((e) => {
  var _this = e.target;
  var id = _this.id;
  if (!$(_this).hasClass('play')) {
    $(_this).attr('src', 'https://image.freepik.com/free-icon/pause-button_318-30027.jpg');
    document.getElementById(`sound${id}`).play();
  } else {
    $(_this).attr('src', 'https://image.freepik.com/free-icon/play-alt_318-2156.png');
    document.getElementById(`sound${id}`).pause();
  }

  $(_this).toggleClass('play');
})

function setVolume(id, value) {
  var audio = document.getElementById(`sound${id}`);
  audio.volume = value / 100;
};