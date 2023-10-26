// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
var timeblc = $('.container-lg px-5');
var saveBtn = $(".saveBtn");
var storedData = localStorage.getItem('calander');
var todayTimeDate = $("#currentDay");
var timeBlock = $('.time-block');

// display todays time and date
var currentTime = dayjs()
$('#currentDay').text(currentTime.format('MMM D, YYYY hh:mm:ss'));



$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  $('.saveBtn').each(function(){
    $(this).on("click", () =>{
      var text = $(this).siblings(".description").val()
      console.log(text);
      // save it to the local storage,
      localStorage.setItem(storedData, text);
      
    })
  })
  
  //.each ..
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  for (var i = 9; i<= 17; i++){
    const currentHour = dayjs().hour();
    hourName = "9am"
    // const newBlock = $("body").html(`
    // <div id="" class="row time-block past">
    // <div class="col-2 col-md-1 hour text-center py-3">9AM</div>
    // <textarea class="col-8 col-md-10 description" rows="3"> </textarea>
    // <button class="btn saveBtn col-2 col-md-1" aria-label="save">
    // <i class="fas fa-save" aria-hidden="true"></i>
    // </button>
    // </div>`)
  
    var earlyToday = dayjs('2023-10-22 09:00:00')
    var timeBlock = $("#hour-"+i)
    console.log(currentHour)
    console.log(i)
    if (i < currentHour){
      timeBlock.addClass('past');
    } else if (i == currentHour){
      timeBlock.addClass('present');

    } else {
      timeBlock.addClass('future');
    }

  };
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  // if statment to change the hour and time with color


  
});

