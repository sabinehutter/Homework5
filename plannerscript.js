// make one time slot in index.html then program it 

// for (var i = 09 ; i < 18; i++){

// }
// span naturally on right, inline 

function getLocalStorage() {
    var savedTasks = JSON.parse(localStorage.getItem("savedTasks"));

    if (savedTasks === null) {
        localStorage.setItem("savedTasks", {});
    }

    console.log(savedTasks)

    // localStorage.setItem("scores", JSON.stringify(new_array));

}

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

    $(".row").append($("<input>" + "</input>").addClass("description").addClass("past"));
    $(".row").append("<input type='image' class ='saveBtn' id='image' src='assets/save_icon.png'></input>");

    assigningColor()

    savingEntries()

}

function assigningColor() {
    var divRows = $(".hour").textConent
    // console.log(divRows.split("M"))

    var currentTime = moment().format("h a")
    var currentHour = ( (currentTime.replace(" ", ""))[0]+ (currentTime.replace(" ", ""))[1].toUpperCase() + (currentTime.replace(" ", ""))[2].toUpperCase())


    console.log(divRows)
        



}

function savingEntries() {

    var divRows = $(".rows").text()

    // for (divs in divRows){
    //     console.log(divRows[divs])
    // }
}


$(document).ready(function () {
    // getLocalStorage()
    buildTimeBlockElements()
    // savingTasks()
});