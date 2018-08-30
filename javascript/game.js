// on page load-existing buttons load; "add an animal" search field loads with submit button; results div
// when user clicks on a button with a name, Giphy API returns relevant results.
        // on.click button, sends request to Giphy
// must be able to use "add an animal" feature successully
    // 1- accepts text input
    // 2-submit adds fully functonal query button
// results must show respective rating
// AND must toggle animation on click


// on.load executes FUNCTION
    // jQuery/Ajax creates all the "existing" buttons and puts them in button div
// also on.load - "add an animal" text field appears and is ready with submit button
    // submit button creates new Giphy query
    // text field passes contents as q
    // new button created

// on.load - jQuery creates buttons and search box

// q = string (search query)
// limit = max number of results returned
// rating = age content

var topics = ["calico cats", "lucky cats", "jerk cats"];
    // search will add to this array

// on load
// $(document).ready(function() {
    // on click
    $("button").on("click", function(renderAPI) { 
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

    
    // search and add
    // take text entered into search field and create Giphy request
    // push to topics array 
    $("#add-cat").on("click", function(event) {
        event.preventDefault();
        var topics = $("#cat-input").val().trim();
        var newCat = $("#cat-input").val().trim();
        newCat.push(topics);
        renderAPI();
    });

// });
