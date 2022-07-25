import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

const refs = {
  datetime: document.querySelector('#datetime-picker'),
  start: document.querySelector('button'),
  days: document.querySelector('[data-days]'),
  hours: document.querySelector('[data-hours'),
  minutes: document.querySelector('[data-minutets'),
  seconds: document.querySelector('[data-seconds'),
};

refs.start.setAttribute('disabled', true);

const flatpickr = require('flatpickr');
const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);
    if (options.defaultDate > selectedDates[0]) {
      alert('Please choose a date in the future');
    } else {
      refs.start.removeAttribute('disabled');
      refs.start.addEventListener('click', timer);
    }
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

function addLeadingZero(value) {
  return value.toString().padStart(2, '0');
}

let timerId = null;

function timer(targetDate) {
  timerId = setInterval(() => {
    const delta = new Date(targetDate) - new Date();

    renderTimer(convertMs(delta));
  }, 1000);

  if ((refs.start.disabled = false)) {
    clearInterval(timerId);
  }

  refs.start.setAttribute('disabled', true);
}

// refs.start.addEventListener('click', timer);
console.log(number.days);

function renderTimer(number) {
  refs.days.textContent = addLeadingZero(number.days);
  refs.hours.textContent = addLeadingZero(number.hours);
  refs.minutes.textContent = addLeadingZero(number.minutes);
  refs.seconds.textContent = addLeadingZero(number.seconds);
}
