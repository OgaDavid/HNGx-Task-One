
const daysOfWeek = [
    "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const currentDayOfTheWeekElement = document.getElementById("dayOfTheWeek");

const currentDate = new Date();
const currentDay = daysOfWeek[currentDate.getUTCDay()];

currentDayOfTheWeekElement.textContent = currentDay;
