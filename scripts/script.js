'use strict';
// creating elements
const dayEl = document.getElementById('days');
const hourEl = document.getElementById('hours');
const minutesEl = document.getElementById('minutes');
const secondsEl = document.getElementById('seconds');

// functions
function countDown() {
  // end date
  const date = new Date('May 22,2023 02:22:00');

  // current date
  const current = new Date().getTime();

  // difference
  const diff = date - current;
  // console.log(diff);
  // one second=1000 ms
  // one minute=1*60seconds
  // one hour=60minutes (60*60)
  // one day= 24*60*60
  let timeDays = Math.floor(diff / 1000 / 60 / 60 / 24);

  let timeHours = Math.floor((diff / 1000 / 60 / 60) % 24);

  let timeMinutes = Math.floor((diff / 1000 / 60) % 60);

  let timeSeconds = Math.floor((diff / 1000) % 60);
  timeHours = timeHours < 10 ? '0' + timeHours : timeHours;
  timeMinutes = timeMinutes < 10 ? '0' + timeMinutes : timeMinutes;
  timeSeconds = timeSeconds < 10 ? '0' + timeSeconds : timeSeconds;

  dayEl.innerHTML = timeDays;
  hourEl.innerHTML = timeHours;
  minutesEl.innerHTML = timeMinutes;
  secondsEl.innerHTML = timeSeconds;
}
setInterval(countDown, 1000);
