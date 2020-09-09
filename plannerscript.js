// make one time slot in index.html then program it 

// for (var i = 09 ; i < 18; i++){

// }
// span naturally on right, inline 


function buildTimeBlockElements() {
    $("#currentDay").text(moment().format("dddd, MMMM Do"));

    for (var i = 09; i < 18; i++) {
        if (i < 12) {
            var divContainer = ($("<div></div>").attr("id", "hour-" + i).addClass("row")).append($("<div>" + "hour" + "</div>").addClass("hour").text(i + "AM"))
            $(".container").append(divContainer)
        } else {
            if (i === 12) {
                var divContainer = ($("<div></div>").attr("id", "hour-" + i).addClass("row")).append($("<div>" + "hour" + "</div>").addClass("hour").text((i) + "PM"))
                $(".container").append(divContainer)
            } else {
                var divContainer = ($("<div></div>").attr("id", "hour-" + i).addClass("row")).append($("<div>" + "hour" + "</div>").addClass("hour").text((i - 12) + "PM"))
                $(".container").append(divContainer)
            }

        }
    }

    $(".row").append($("<div>" + "hour" + "</div>").addClass("description"));
    $(".row").append("<input type='image' class ='saveBtn' id='image' src='assets/save_icon.png'></input>");
}


$(document).ready(function () {
    // getLocalStorage()
    buildTimeBlockElements()
    // savingTasks()
});