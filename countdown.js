var end = new Date('03/15/2016 10:20 AM');

var second = 1000;
var minute = second * 60;
var hour = minute * 60;
var day = hour * 24;
var timer;

function showRemaining() {
  var now = new Date();
  var distance = end - now;
  if (distance < 0) {

    clearInterval(timer);
    document.getElementById('countdown').innerHTML = '!';

    return;
  }
  var days = Math.floor(distance / day);
  var hours = Math.floor((distance % day) / hour);
  var minutes = Math.floor((distance % hour) / minute);
  var seconds = Math.floor((distance % minute) / second);

  document.getElementById('countdown').innerHTML = days + 'days ';
  document.getElementById('countdown').innerHTML += hours + 'hrs ';
  document.getElementById('countdown').innerHTML += minutes + 'mins ';
  document.getElementById('countdown').innerHTML += seconds + 'secs';
}

timer = setInterval(showRemaining, 1000);
