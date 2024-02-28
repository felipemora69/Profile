/*Displaying name's picture after 10 sg*/
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
            
            // Insert the paragraph below the image
            profilePicture.insertAdjacentElement("afterend", nameParagraph);
        }
    }, 10000);
});