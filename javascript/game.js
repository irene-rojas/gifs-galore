// q = string (search query)
// limit = max number of results returned
// rating = age content

var topics = ["calico cats", "lucky cats", "jerk cats"];
    // search will add to this array

// on load
// $(document).ready(function() {

// function for dynamically creating buttons from topics array
function renderButtons() {
    $("#buttonContainer").empty();
    for (var i = 0; i < topics.length; i++) {
        var catButtons = $("<button>");
        catButtons.addClass("button")
        catButtons.attr("data-cats", topics[i]);
        catButtons.text(topics[i]);
        $("#buttonContainer").append(catButtons);
    }
}

// push to topics array 
$("#add-cat").on("click", function(event) {
    event.preventDefault();
    // var topics = $("#cat-input").val().trim();
    var newCat = $("#cat-input").val().trim();
    topics.push(newCat);
    renderButtons();
    console.log(newCat);
});

// this shows initial buttons
renderButtons();

// top buttons on click
$("button").on("click", function() { 
    var cats = $(this).attr("data-cats");
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
    cats + "&api_key=dc6zaTOxFJmzC&limit=5";
    // Giphy query
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response) {
        var results = response.data;
        console.log(results);

        for (var i = 0; i < results.length; i++) {
            var animalDiv = $("<div>");
            var p = $("<p>");
            p.text("Rating: " + results[i].rating);
            var animalImage = $("<img>");
            animalImage.attr({
                "src": results[i].images.downsized_still.url,
                "data-still": results[i].images.downsized_still.url,
                "data-animate": results[i].images.downsized.url,
                "class": "gif",
                "data-state": "still"
                });
            animalDiv.append(p);
            animalDiv.append(animalImage);
            $("#results").prepend(animalDiv);
        }
    });
});


// toggle animation
$(document).on("click", ".gif", function() {
    var state = $(this).attr("data-state");
    if (state == "still") {
        $(this).attr("src", $(this).attr("data-animate"));
        $(this).attr("data-state", "animate");
    } else {
        $(this).attr("src", $(this).attr("data-still"));
        $(this).attr("data-state", "still");
    }
});



// });
