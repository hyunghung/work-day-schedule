// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
var currentDayEl = $("#currentDay");
var descriptionEl = $(".description");
var hourEl = document.getElementById('hour-' + time);
var time;

$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  var saveButtons = document.querySelectorAll(".saveBtn");
  for (var i = 0; i < saveButtons.length; i++) {
    saveButtons[i].addEventListener('click', savetoLocalStorage);
  }


  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  var currentHour = 13; // Changes time to make sure the colors work
  for (let time = 9; time <= 17; time++) {
  var hourEl = document.getElementById('hour-' + time);

  if (time < currentHour) {
    hourEl.classList.add("past");
  } else if (time == (currentHour)) {
    hourEl.classList.add("present");
  } else {
    hourEl.classList.add("future");
  };
}


  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?

//Saves user input to local storage under the "description" key
function savetoLocalStorage(event) {
  var textarea = event.target.parentNode.querySelector('.description');
  var userInput = textarea.value;
  var timeBlockId = event.target.parentNode.id;
  localStorage.setItem(timeBlockId, userInput);
}



  //
  // TODO: Add code to display the current date in the header of the page.
  function displayCurrentDay() {
    var date = dayjs().format("dddd, MMMM D");
    currentDayEl.text(date);
  }
  displayCurrentDay();
});
