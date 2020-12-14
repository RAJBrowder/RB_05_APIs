$(document).ready(function () {
  setBackgrounds();
  initialize();

  //Save the user input and the associated hour for the calendar event
  $(".saveBtn").on("click", function () {
    var eventText = $(this).siblings(".form-control").val().trim();
    var eventHour = $(this).siblings(".form-control").attr("id");
    localStorage.setItem(eventHour, eventText);
  });
});

function initialize() {

    //Set today at page top
    $("#currentDay").text(moment().format("MMMM Do YYYY"));

  //Retrieve and display any calendar events from local storage
  $("#9am").val(localStorage.getItem("9am"));
  $("#10am").val(localStorage.getItem("10am"));
  $("#11am").val(localStorage.getItem("11am"));
  $("#12pm").val(localStorage.getItem("12pm"));
  $("#1pm").val(localStorage.getItem("1pm"));
  $("#2pm").val(localStorage.getItem("2pm"));
  $("#3pm").val(localStorage.getItem("3pm"));
  $("#4pm").val(localStorage.getItem("4pm"));
  $("#5pm").val(localStorage.getItem("5pm"));
}

function setBackgrounds() {
    var currentHour = moment().hour();

    $(".form-control").each(function () {
        var rowHour = parseInt($(this).attr("id"));

        // set class based on row hour compared to current hour
        if (rowHour < currentHour) {
            $(this).addClass("past");
            $(this).removeClass("future");
            $(this).removeClass("present");
        }
        else if (rowHour === currentHour) {
            $(this).removeClass("past");
            $(this).addClass("present");
            $(this).removeClass("future");
        }
        else {
            $(this).removeClass("present");
            $(this).removeClass("past");
            $(this).addClass("future");
        }
    })
}