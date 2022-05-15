//start w time blocks and hour display

//make time blocks functions and finding real time of user
function timeBlocks(hour, existingTodo= "") {

    var currentHour = new Date().getHours(); 
    var nowLater = "future";
    
    if (currentHour > hour) nowLater = "past";
    if (currentHour === hour) nowLater = "present";

//creating timeblocks on displayed page

$(".container").append($(`
    <div class="row time-block">
        <div class="hour col-1">${hour}:00</div> 
        <textarea name="" id="" cols="30" rows="3" class="discription col-9 ${nowLater}">${existingTodo || ""}</textarea>
        <button class="btn saveBtn col-2" data-hour"${hour}>Save</button>
    </div>`))
}

// show user current day
$('#currentDay').text(moment().format('dddd, MMMM Do'));

//show time from 8am-8pm

for(var i = 8; i<21; i++) {
    var saveTodos = localStorage.getItem(i);
    timeBlocks(i, saveTodos);
}

// save user input button 
var saveBtn = document.querySelectorAll(".saveBtn");

for (var i = 0; i < saveBtn.length; i++) {
    saveBtn[i].addEventListener("click", function(event) {

        event.preventDefault();
        
        var todo = event.target.parentNode.children[1].value;
        var todoName = event.target.parentNode.children[1].id;
        
        localStorage.setItem(todo,todoName);
    });

}

//still having issue saving user input after refresh, will work with tutor to correct