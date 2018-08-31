# gifs-galore

This is a project created for a coding bootcamp through Goerge Washington University. The goal is that the page loads with three dynamically-created buttons from an existing array. When a user clicks a button, jQuery contacts the GIPHY API and returns 10 relavant gifs. The gifs arrive as still images. On a click, they animate. Click again and the gif returns to its still image. 

Furthermore, the page features a search option. When the user enters text and clicks "Add a Cat!", a new corresponding button appears with the other buttons matching the text the user entered. When the user clicks that new button, jQuery sends a matching request to the GIPHY API, and displays the corresponding gifs. 

I succesfully linked the original array buttons, the corresponding gif results, and the start-stop animation function. However, I could only get the "Add a Cat!" button to create a new button with the search term. After that, all the buttons stopped working. I found a number of online posts that this behavior was related to how jQuery handles dynamically-created events. The stated solution was to use .on(), but it did not work.

- Irene Rojas