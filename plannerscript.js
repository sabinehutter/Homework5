// make one time slot in index.html then program it 

// for (var i = 09 ; i < 18; i++){

// }
// span naturally on right, inline 

function buildTimeBlockElements() {
    for (var i = 09; i < 18; i++) {
    // timeblockElement.append(newDiv.attr("id", "hour-" + i));
    $(".container").append($("<div></div>").attr("id", "hour-" + i))
    
    


    }

}


$(document).ready(function() {
    // getLocalStorage()
    buildTimeBlockElements()
    // savingTasks()
});