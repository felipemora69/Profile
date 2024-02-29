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

/*---------- SECTION STAFF --------------*/

var dataSet = [   
    [ "Brielle Williamson", "Integration Specialist", "New York", "4804", "2012/12/02", "$372,000" ],
    [ "Herrod Chandler", "Sales Assistant", "San Francisco", "9608", "2012/08/06", "$137,500" ],
    [ "Rhona Davidson", "Integration Specialist", "Tokyo", "6200", "2010/10/14", "$327,900" ],
    [ "Colleen Hurst", "Javascript Developer", "San Francisco", "2360", "2009/09/15", "$205,500" ],
    [ "Sonya Frost", "Software Engineer", "Edinburgh", "1667", "2008/12/13", "$103,600" ],
    [ "Jena Gaines", "Office Manager", "London", "3814", "2008/12/19", "$90,560" ],
    [ "Quinn Flynn", "Support Lead", "Edinburgh", "9497", "2013/03/03", "$342,000" ],
    [ "Tiger Nixon", "System Architect", "Edinburgh", "5421", "2011/04/25", "$320,800" ],
    [ "Garrett Winters", "Accountant", "Tokyo", "8422", "2011/07/25", "$170,750" ],
    [ "Ashton Cox", "Junior Technical Author", "San Francisco", "1562", "2009/01/12", "$86,000" ],
    [ "Cedric Kelly", "Senior Javascript Developer", "Edinburgh", "6224", "2012/03/29", "$433,060" ],
    [ "Airi Satou", "Accountant", "Tokyo", "5407", "2008/11/28", "$162,700" ],
    [ "Charde Marshall", "Regional Director", "San Francisco", "6741", "2008/10/16", "$470,600" ],
    [ "Haley Kennedy", "Senior Marketing Designer", "London", "3597", "2012/12/18", "$313,500" ],
    [ "Tatyana Fitzpatrick", "Regional Director", "London", "1965", "2010/03/17", "$385,750" ],
    [ "Michael Silva", "Marketing Designer", "London", "1581", "2012/11/27", "$198,500" ],
    [ "Paul Byrd", "Chief Financial Officer (CFO)", "New York", "3059", "2010/06/09", "$725,000" ],
    [ "Gloria Little", "Systems Administrator", "New York", "1721", "2009/04/10", "$237,500" ],
    [ "Bradley Greer", "Software Engineer", "London", "2558", "2012/10/13", "$132,000" ],
    [ "Dai Rios", "Personnel Lead", "Edinburgh", "2290", "2012/09/26", "$217,500" ],
    [ "Jenette Caldwell", "Development Lead", "New York", "1937", "2011/09/03", "$345,000" ],
    [ "Yuri Berry", "Chief Marketing Officer (CMO)", "New York", "6154", "2009/06/25", "$675,000" ],
    [ "Caesar Vance", "Pre-Sales Support", "New York", "8330", "2011/12/12", "$106,450" ],
    [ "Doris Wilder", "Sales Assistant", "Sidney", "3023", "2010/09/20", "$85,600" ],
    [ "Angelica Ramos", "Chief Executive Officer (CEO)", "London", "5797", "2009/10/09", "$1,200,000" ],
    [ "Gavin Joyce", "Developer", "Edinburgh", "8822", "2010/12/22", "$92,575" ],
    [ "Jennifer Chang", "Regional Director", "Singapore", "9239", "2010/11/14", "$357,650" ],
    [ "Brenden Wagner", "Software Engineer", "San Francisco", "1314", "2011/06/07", "$206,850" ],
    [ "Fiona Green", "Chief Operating Officer (COO)", "San Francisco", "2947", "2010/03/11", "$850,000" ],
    [ "Shou Itou", "Regional Marketing", "Tokyo", "8899", "2011/08/14", "$163,000" ],
    [ "Michelle House", "Integration Specialist", "Sidney", "2769", "2011/06/02", "$95,400" ],
    [ "Suki Burks", "Developer", "London", "6832", "2009/10/22", "$114,500" ],
    [ "Prescott Bartlett", "Technical Author", "London", "3606", "2011/05/07", "$145,000" ],
    [ "Gavin Cortez", "Team Leader", "San Francisco", "2860", "2008/10/26", "$235,500" ],
    [ "Martena Mccray", "Post-Sales support", "Edinburgh", "8240", "2011/03/09", "$324,050" ],
    [ "Unity Butler", "Marketing Designer", "San Francisco", "5384", "2009/12/09", "$85,675" ]
];

let staffData = dataSet.map(data => ({
    name: data[0],
    position: data[1],
    city: data[2],
    employeeId: data[3],
    startDate: data[4],
    salary: data[5]
}));

let currentSort = 'nameAsc';

function renderStaff() {
    const staffContainer = $('#staff-list');
    staffContainer.empty();

    staffData.forEach(staff => {
        const card = $(`
            <div class="staff-card">
                <h3>${staff.name}</h3>
                <p>${staff.position}</p>
                <p>${staff.city}</p>
                <p>Employee ID: ${staff.employeeId}</p>
                <p>Start Date: ${staff.startDate}</p>
                <p>Salary: ${staff.salary}</p>
            </div>
        `);

        staffContainer.append(card);
    });
}

function sortStaff() {
    switch (currentSort) {
        case 'nameAsc':
            staffData.sort((a, b) => a.name.localeCompare(b.name));
            break;
        case 'nameDesc':
            staffData.sort((a, b) => b.name.localeCompare(a.name));
            break;
        case 'salaryAsc':
            staffData.sort((a, b) => parseFloat(a.salary.replace(/[^0-9.-]/g, '')) - parseFloat(b.salary.replace(/[^0-9.-]/g, '')));
            break;
        case 'salaryDesc':
            staffData.sort((a, b) => parseFloat(b.salary.replace(/[^0-9.-]/g, '')) - parseFloat(a.salary.replace(/[^0-9.-]/g, '')));
            break;
    }

    renderStaff();
}

$('#sort-by').change(function () {
    currentSort = $(this).val();
    sortStaff();
});

// Initial render
renderStaff();

/*---------- SECTION WEATHER --------------*/

/*$(document).ready(function () {
    var dataSet = [   
        [ "Brielle Williamson", "Integration Specialist", "New York", "4804", "2012/12/02", "$372,000" ],
        [ "Herrod Chandler", "Sales Assistant", "San Francisco", "9608", "2012/08/06", "$137,500" ],
        [ "Rhona Davidson", "Integration Specialist", "Tokyo", "6200", "2010/10/14", "$327,900" ],
        [ "Colleen Hurst", "Javascript Developer", "San Francisco", "2360", "2009/09/15", "$205,500" ],
        [ "Sonya Frost", "Software Engineer", "Edinburgh", "1667", "2008/12/13", "$103,600" ],
        [ "Jena Gaines", "Office Manager", "London", "3814", "2008/12/19", "$90,560" ],
        [ "Quinn Flynn", "Support Lead", "Edinburgh", "9497", "2013/03/03", "$342,000" ],
        [ "Tiger Nixon", "System Architect", "Edinburgh", "5421", "2011/04/25", "$320,800" ],
        [ "Garrett Winters", "Accountant", "Tokyo", "8422", "2011/07/25", "$170,750" ],
        [ "Ashton Cox", "Junior Technical Author", "San Francisco", "1562", "2009/01/12", "$86,000" ],
        [ "Cedric Kelly", "Senior Javascript Developer", "Edinburgh", "6224", "2012/03/29", "$433,060" ],
        [ "Airi Satou", "Accountant", "Tokyo", "5407", "2008/11/28", "$162,700" ],
        [ "Charde Marshall", "Regional Director", "San Francisco", "6741", "2008/10/16", "$470,600" ],
        [ "Haley Kennedy", "Senior Marketing Designer", "London", "3597", "2012/12/18", "$313,500" ],
        [ "Tatyana Fitzpatrick", "Regional Director", "London", "1965", "2010/03/17", "$385,750" ],
        [ "Michael Silva", "Marketing Designer", "London", "1581", "2012/11/27", "$198,500" ],
        [ "Paul Byrd", "Chief Financial Officer (CFO)", "New York", "3059", "2010/06/09", "$725,000" ],
        [ "Gloria Little", "Systems Administrator", "New York", "1721", "2009/04/10", "$237,500" ],
        [ "Bradley Greer", "Software Engineer", "London", "2558", "2012/10/13", "$132,000" ],
        [ "Dai Rios", "Personnel Lead", "Edinburgh", "2290", "2012/09/26", "$217,500" ],
        [ "Jenette Caldwell", "Development Lead", "New York", "1937", "2011/09/03", "$345,000" ],
        [ "Yuri Berry", "Chief Marketing Officer (CMO)", "New York", "6154", "2009/06/25", "$675,000" ],
        [ "Caesar Vance", "Pre-Sales Support", "New York", "8330", "2011/12/12", "$106,450" ],
        [ "Doris Wilder", "Sales Assistant", "Sidney", "3023", "2010/09/20", "$85,600" ],
        [ "Angelica Ramos", "Chief Executive Officer (CEO)", "London", "5797", "2009/10/09", "$1,200,000" ],
        [ "Gavin Joyce", "Developer", "Edinburgh", "8822", "2010/12/22", "$92,575" ],
        [ "Jennifer Chang", "Regional Director", "Singapore", "9239", "2010/11/14", "$357,650" ],
        [ "Brenden Wagner", "Software Engineer", "San Francisco", "1314", "2011/06/07", "$206,850" ],
        [ "Fiona Green", "Chief Operating Officer (COO)", "San Francisco", "2947", "2010/03/11", "$850,000" ],
        [ "Shou Itou", "Regional Marketing", "Tokyo", "8899", "2011/08/14", "$163,000" ],
        [ "Michelle House", "Integration Specialist", "Sidney", "2769", "2011/06/02", "$95,400" ],
        [ "Suki Burks", "Developer", "London", "6832", "2009/10/22", "$114,500" ],
        [ "Prescott Bartlett", "Technical Author", "London", "3606", "2011/05/07", "$145,000" ],
        [ "Gavin Cortez", "Team Leader", "San Francisco", "2860", "2008/10/26", "$235,500" ],
        [ "Martena Mccray", "Post-Sales support", "Edinburgh", "8240", "2011/03/09", "$324,050" ],
        [ "Unity Butler", "Marketing Designer", "San Francisco", "5384", "2009/12/09", "$85,675" ]
    ];

    // Initial render of staff cards
    renderStaffCards(dataSet);

    function compareBy(attribute, order) {
        return function (a, b) {
            var comparison = a[attribute].localeCompare(b[attribute]);
            return order === 'asc' ? comparison : -comparison;
        };
    }

    // Function to render staff cards
    function renderStaffCards(data) {
        var staffList = $("#staff-list");
        staffList.empty(); // Clear previous staff cards
    
        // Create a container to hold all cards
        var staffContainer = $("<div>").attr("id", "staff-container");
        staffList.append(staffContainer);
    
        // Loop through staff data and create cards
        for (var i = 0; i < data.length; i++) {
            // Create a new row for every 4th staff member
            if (i % 4 === 0 && i !== 0) {
                var row = $("<div>").addClass("staff-row");
                staffContainer.append(row);
            }
    
            var staffCard = $("<div>").addClass("staff-card");
            staffCard.append($("<h3>").text(data[i][0])); // Assuming name is in the first position
            staffCard.append($("<p>").text(data[i][1])); // Assuming role is in the second position
            staffCard.append($("<p>").text(data[i][2])); // Assuming location is in the third position
            staffCard.append($("<p>").text(data[i][5])); // Assuming salary is in the sixth position
    
            // Append the card to the current row
            staffContainer.children(".staff-row:last").append(staffCard);
        }
    }

    function toggleOrder(order) {
        return order === 'asc' ? 'desc' : 'asc';
    }

    // Sort staff and render when clicking on the header
    $("#sort-by").change(function () {
        var attribute = $("#sort-by").val();
        var sortOrder = toggleOrder($("#sort-order").val());
        $("#sort-order").val(sortOrder); // Update the dropdown value
        dataSet.sort(compareBy(attribute, sortOrder));
        renderStaffCards(dataSet);
    });
    
    // Trigger initial sorting based on default values
    $(document).ready(function () {
        $("#sort-by").trigger('change');
    });
    
}}*/