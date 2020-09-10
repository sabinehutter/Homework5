function buildTimeBlockElements() {
    $("#currentDay").text(moment().format("dddd, MMMM Do"));

    for (var i = 09; i < 18; i++) {
        if (i < 12) {
            var divContainer = ($("<div></div>").attr("id", "hour-" + i).addClass("row")).append($("<div>" + "hour" + "</div>").addClass("hour").text(i + "AM"));
            $(".container").append(divContainer);
        } else {
            if (i === 12) {
                var divContainer = ($("<div></div>").attr("id", "hour-" + i).addClass("row")).append($("<div>" + "hour" + "</div>").addClass("hour").text((i) + "PM"));
                $(".container").append(divContainer);
            } else {
                var divContainer = ($("<div></div>").attr("id", "hour-" + i).addClass("row")).append($("<div>" + "hour" + "</div>").addClass("hour").text((i - 12) + "PM"));
                $(".container").append(divContainer);
            }

        }
    }

    $(".row").append($("<input>" + "</input>").addClass("description"));
    $(".row").append("<input type='image' class ='saveBtn' id='image' src='https://sabinehutter.github.io/Homework5/Assets/save_icon.png");

    assigningColor();
    getLocalStorage();
}

function getLocalStorage() {
    $("#hour-11 .description").val(JSON.parse(localStorage.getItem("11AM")))
    $("#hour-12 .description").val(JSON.parse(localStorage.getItem("12PM")))
    $("#hour-13 .description").val(JSON.parse(localStorage.getItem("1PM")))
    $("#hour-14 .description").val(JSON.parse(localStorage.getItem("2PM")))
    $("#hour-15 .description").val(JSON.parse(localStorage.getItem("3PM")))
    $("#hour-16 .description").val(JSON.parse(localStorage.getItem("4PM")))
    $("#hour-17 .description").val(JSON.parse(localStorage.getItem("5PM")))
}

function assigningColor() {

    var currentTime = moment().format("H a");
    var currentHour = ((currentTime.replace(" ", ""))[0] + (currentTime.replace(" ", ""))[1].toUpperCase() + (currentTime.replace(" ", ""))[2].toUpperCase());
    var currentHourNumber = (currentTime.split(" ")[0]);

    var divClass = "#" + "hour-" + (currentHourNumber);

    var currentHourDiv = $(divClass).children("input.description").addClass("present");

    for (i = 09; i < currentHourNumber; i++) {
        $("#" + "hour-" + (i)).children("input.description").addClass("past");

    }

    for (i = 18; i > currentHourNumber; i--) {
        $("#" + "hour-" + (i)).children("input.description").addClass("future")
    };
}

var savedTasks = {}

function savingEntries() {
    var taskDesc = $(this).prev().val()
    var numberEle = ($(this).prevAll()[1].innerHTML)

    localStorage.setItem((numberEle), JSON.stringify(taskDesc));

}

$(document).ready(function () {


    buildTimeBlockElements()
    $(".saveBtn").on("click", savingEntries);
});
