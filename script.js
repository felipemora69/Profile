/* -------------SECTION HOME ----------------*/

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

/*---------- SECTION MARK-TO-GRADE --------------*/

function convertMarkToGrade() {
    // Get the input value
    var markInput = document.getElementById("mark-input-box").value;

    // Convert input to a number using parseInt
    var mark = parseInt(markInput);

    // Check if mark is a valid number
    if (!isNaN(mark) && mark >= 0 && mark <= 100) {
        // Convert mark to grade
        var grade = "";
        if (mark > 90) {
            grade = "A";
        } else if (mark > 80) {
            grade = "B";
        } else if (mark > 70) {
            grade = "C";
        } else if (mark > 65) {
            grade = "D";
        } else {
            grade = "F";
        }

        // Display result message
        var resultMessage = document.getElementById("result-message");
        resultMessage.textContent = "Result: Grade " + grade;

        // Apply green text color for grades more or equal to 65
        resultMessage.style.color = (mark >= 65) ? "green" : "";

        // Clear validation message
        document.getElementById("validation-message").textContent = "";
    } else {
        // Display validation message for invalid input
        document.getElementById("validation-message").textContent = "Invalid mark. Please enter a number between 0 and 100.";

        // Clear result message
        document.getElementById("result-message").textContent = "";
    }
}


/*---------- SECTION WEATHER --------------*/

