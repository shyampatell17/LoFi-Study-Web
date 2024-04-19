console.log("JavaScript Ready!");

/*JavaScript for Timer*/
var sec = 3600,
  secpass,
  countDown = setInterval(function () {
    secpass();
  }, 1000);

function secpass() {
  /*Declaring the overall minutes and the minutes and seconds remaining.*/
  var min = Math.floor(sec / 60);
  var remSec = sec % 60;

  if (remSec < 10) {
    remSec = "0" + remSec;
  }
  if (remSec == 0) {
    console.log("1 minute complete!");
  }
  if (min < 10) {
    min = "0" + min;
  }
  document.getElementById("timer").innerHTML = min + ":" + remSec;

  if (sec > 0) {
    sec = sec - 1;
  } else {
    clearInterval(countDown);

    document.getElementById("timer").innerHTML = ("Hour complete!");
    var alarm = new Audio("Alarm.mp3");
    alarm.play()
  }
}

/*about popup css */

