// get value
const timeDisplay = document.querySelectorAll(".timeDisplay");

//making an array of timeZones of all places
const timeZones = [
  "Australia/Sydney",
  "Australia/Canberra",
  "Australia/Brisbane",
  "Asia/Kathmandu",
];

//using for loop to calculate time of the array
for (let i = 0; i < timeDisplay.length; i++) {
  setInterval(function () {
    //   Using new Date(), creates a new date object with the current date and time
    let time = new Date();
    time = time.toLocaleTimeString("en-US", { timeZone: timeZones[i] }); //if we dont create a object  using the timeZone property and its value then we will get only time of our place.
    timeDisplay[i].innerText = time;
  }, 1000);
}

//NOTE:- if we want to make the current time of our place then we dont have to create arrays, and also we dont have to use for loops. Simply we need to selext the area and get time using setInterval(functiion(){},1000); where inside function we declare time and gets its value using time.toLocalTimeString.
