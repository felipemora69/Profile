/*----------Displaying name's picture after 10 sg*/

document.addEventListener("DOMContentLoaded", function() {
    setTimeout(function() {
        var profilePicture = document.getElementById("profile-picture");
        if (profilePicture) {
            // Create a new paragraph element
            var nameParagraph = document.createElement("p");
            
            // Set the text content of the paragraph
            nameParagraph.textContent = "Felipe Mora";

            // Apply styles to the paragraph
            nameParagraph.style.textAlign = "center";
            nameParagraph.style.fontSize = "1.2em";
            nameParagraph.style.color = "black";
            nameParagraph.style.fontWeight = "bold";
            nameParagraph.style.marginBottom = "15px";
            
            // Insert the paragraph below the image
            profilePicture.insertAdjacentElement("afterend", nameParagraph);
        }
    }, 10000);
});

// ----JavaScript code to update the current date and time

document.addEventListener("DOMContentLoaded", function() {
    var currentDateElement = document.getElementById("current-date");
    if (currentDateElement) {
        updateCurrentDate(); // Initial update
        setInterval(updateCurrentDate, 1000); // Update every second
    }
});

function updateCurrentDate() {
    var currentDateElement = document.getElementById("current-date");
    if (currentDateElement) {
        var currentDate = new Date();
        var formattedDate = currentDate.toLocaleString();
        currentDateElement.textContent = "Current Date: " + formattedDate;
    }
}

// Call updateCurrentDate each time the page is loaded
window.addEventListener("load", updateCurrentDate);