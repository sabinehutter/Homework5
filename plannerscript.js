// make one time slot in index.html then program it 

// for (var i = 09 ; i < 18; i++){

// }
// span naturally on right, inline 


function buildTimeBlockElements() {
    for (var i = 09; i < 18; i++) {
        if (i = 12){
            var divContainer = ($("<div></div>").attr("id", "hour-" + i).addClass("row")).append($("<div>"+ "hour" + "</div>").addClass("hour").text((i) + "PM"))
            $(".container").append(divContainer)
        }

        if (i < 12){
        var divContainer = ($("<div></div>").attr("id", "hour-" + i).addClass("row")).append($("<div>"+ "hour" + "</div>").addClass("hour").text(i + "AM"))
        $(".container").append(divContainer)
        }
        else{
            var divContainer = ($("<div></div>").attr("id", "hour-" + i).addClass("row")).append($("<div>"+ "hour" + "</div>").addClass("hour").text((i - 12) + "PM"))
            $(".container").append(divContainer)

        }
        // else {
            // var divContainer = ($("<div></div>").attr("id", "hour-" + i).addClass("row")).append($("<div>"+ "hour" + "</div>").addClass("hour").text(24 - i))
        // }
        // rowContainer.append($("<div></div>").addClass("hour"));
    }}
    // $(".row").append($("<div>"+ "hour" + "</div>").addClass("hour"));
    // $(".row").append($("<div>"+ "hour" + "</div>").addClass("description"));
    // $(".row").append("<input type='image' id='image' src='../assets/save_icon.png'>");


$(document).ready(function () {
    // getLocalStorage()
    buildTimeBlockElements()
    // savingTasks()
});
