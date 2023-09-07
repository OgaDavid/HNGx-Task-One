function updateDateTime() {
  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const currentDate = new Date();

  const currentDayOfTheWeekElement = document.getElementById("dayOfTheWeek");
  const currentUTCtimeElement = document.getElementById("utcTime");

  const currentDay = daysOfWeek[currentDate.getUTCDay()];
  currentDayOfTheWeekElement.textContent = currentDay;

  const currentUtcTime = currentDate.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    timeZoneName: "short",
  });
  currentUTCtimeElement.textContent = currentUtcTime;

}

updateDateTime();
setInterval(updateDateTime, 1000);
