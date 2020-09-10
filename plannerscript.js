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
    $(".row").append("<input type='image' class ='saveBtn' id='image' src='assets/save_icon.png'></input>");
    // getLocalStorage();
    assigningColor();
}

function getLocalStorage() {
    var savedTasks = JSON.parse(localStorage.getItem("savedTasks"));

    if (savedTasks === null) {
        localStorage.setItem("savedTasks", {});
    }

    console.log(savedTasks);

    // localStorage.setItem("scores", JSON.stringify(new_array));

}

function assigningColor() {

    var currentTime = moment().format("H a");
    var currentHour = ((currentTime.replace(" ", ""))[0] + (currentTime.replace(" ", ""))[1].toUpperCase() + (currentTime.replace(" ", ""))[2].toUpperCase());
    var currentHourNumber = parseInt(currentTime.split(" ")[0] - 3);

    var divClass = "#" + "hour-" + (currentHourNumber);

    var currentHourDiv = $(divClass).children("input.description").addClass("present");

    for (i = 09; i < currentHourNumber; i++) {
        $("#" + "hour-" + (i)).children("input.description").addClass("past");

    }

    for (i = 18; i > currentHourNumber; i--) {
        $("#" + "hour-" + (i)).children("input.description").addClass("future")
    };



}

function savingEntries() {
    var divRows = $(".rows").text();

    console.log("clicked save")

    // for (divs in divRows){
    //     console.log(divRows[divs])
    // }
}

$(document).ready(function () {
    buildTimeBlockElements()

    $(".saveBtn").on("click", savingEntries);
});
