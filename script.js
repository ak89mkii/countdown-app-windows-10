CountDownTimer('10/14/2025 12:00 AM', 'countdown');

function CountDownTimer(dt, id) {
  let end = new Date(dt);

  let _second = 1000;
  let _minute = _second * 60;
  let _hour = _minute * 60;
  let _day = _hour * 24;
  let _year = _day * 365;
  let timer;

  function showRemaining() {
    var now = new Date();
    var distance = end - now;
    if (distance < 0) {
      clearInterval(timer);
      // Displays message after countdown reaches zero.
      document.getElementById(id).innerHTML = 'Windows 10 is no longer supported by Microsoft!';
      return;
    }

    var years = Math.floor(distance / _year);
    console.log(years);
    var days = Math.floor((distance % _year) / _day);
    var hours = Math.floor((distance % _day) / _hour);
    var minutes = Math.floor((distance % _hour) / _minute);
    var seconds = Math.floor((distance % _minute) / _second);

    document.getElementById(id).innerHTML = "<u>" + years + "</u>" + ' Year(s) ' + "<br><br>";
    document.getElementById(id).innerHTML += "<u>" + days + "</u>" +  ' Day(s) ' + "<br><br>";
    document.getElementById(id).innerHTML += "<u>" + hours + "</u>" + ' Hour(s) ' + "<br><br>";
    document.getElementById(id).innerHTML += "<u>" + minutes + "</u>" +  ' Minute(s) ' + "<br><br>";
    document.getElementById(id).innerHTML += "<u>" + seconds + "</u>" +  ' Second(s) ';
  }

  timer = setInterval(showRemaining, 1000);

}