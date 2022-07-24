import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

const refs = {
  datetime: document.querySelector('#datetime-picker'),
  start: document.querySelector('button'),
  days: document.querySelector('span[data-days]'),
  hours: document.querySelector('span[data-hours'),
  minutes: document.querySelector('span[data-minutets'),
  seconds: document.querySelector('span[data-seconds'),
};

const flatpickr = require('flatpickr');
const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);
    if (this.defaultDate > selectedDates[0]) {
      refs.start.setAttribute('disabled', true);
      return alert('Please choose a date in the future');
    }
    refs.start.removeAttribute('disabled');
  },
};

flatpickr(refs.datetime, options);

refs.datetime.addEventListener('input', options.onClose);

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

const timer = targetDate => {
  setInterval(() => {
    const delta = new Date(targetDate) - new Date();

    renderTimer(delta);
  }, 1000);
};

refs.start.addEventListener('click', timer);

const renderTimer = delta => {
  refs.days.innerText = delta;
  //   refs.hours.innerText = hours;
  //   refs.minutes.innerText = minutes;
  //   refs.seconds.innerText = seconds;
};
