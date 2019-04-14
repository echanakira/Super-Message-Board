/* Example for using file-system is at the bottom */

function setup() {

    modalSetup();


}

// Setup opening a modal
function modalSetup() {
    let listElements = document.getElementsByTagName('li');
    for (let index = 0; index < listElements.length; index++) {
        let li = listElements[index];
        li.addEventListener('click', function () {
            let name = this.id;
            let modal = document.querySelector(`#${name}-modal`)
            modal.style.display = 'block';
        })
    }

    //Setup the close button
    let closeBtns = document.querySelectorAll('.close');

    for (let index = 0; index < closeBtns.length; index++) {
        let btn = closeBtns[index];
        btn.addEventListener('click', function () {
            let currentModal = document.querySelectorAll('.modal');
            currentModal[index].style.display = 'none';
        })
    }
    var rmButton = document.getElementsByClassName("rmButton");
    for (i = 0; i < rmButton.length; i++) {
        rmButton[i].addEventListener("click", 
        function() {
            this.parentElement.style.display = 'none';
        }
                                     );
    }
}

var availability = new Array(7);
// Inits to 7, for 7 days of the week. 
function loadAvailableTime() {
    var i, k, j;
    var timesArr;
    var htmlString = "";
    var days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
    document.getElementById('submitTimes').submit();
    //init all 7 days of the week to empty arrays. 
    for (i = 0; i < availability.length; i++) {
        availability[i] = [];
    }
    // Read in file data, process it and name it a variable. 
    // Generate HTML from the filled availability array. 
    for(i = 0; i < availability.length; i++) {
        timesArr = localStorage.getItem(days[i]);
        if(timesArr != undefined) {
            for(k = 0; k < timesArr.length; k++) {
                availability[i].push(timesArr[k]);
            }
        }
    }
    for(i = 0; i < availability.length; i++) {
        if(availability[i] != undefined) {
            if(availability[i].length == 0) {
                htmlString += "<h4>" + days[i] + "</h4>";
            } else {
                htmlString += "<h4>" + days[i] + "</h4>";
                for(j = 0; j < availability[i]; j++) {
                    var currTime = availability[i][j];
                    htmlString += "<li>" + currTime + "<span class=\"rmButton\"> &#x2716;</span></li>";
                }
            }
        }
    }
    
    document.getElementById('changeTime').innerHTML += htmlString;
}


setup();

function addAvailableTime() {
    var days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
    var day = document.getElementById("dayOfWeek").value;
    var start = document.getElementById("startTime").value;
    var end = document.getElementById("endTime").value;
    var AMorPMStart, startHour, startMinute;
    var AMorPMEnd, endHour, endMinute;
    startHour = parseInt(start.substr(0,2));
    endHour = parseInt(end.substr(0,2));
    if(startHour > 12) {
        AMorPMStart = " PM";
        startMinute = start.substr(2);
        startMinute = (startHour % 12).toString() + startMinute;
        start = startMinute;
    } else {
        AMorPMStart = " AM";
        start = start.substr(1);
    }
    if(endHour > 12) {
        AMorPMEnd = " PM";
        endMinute = end.substr(2);
        endMinute = (endHour % 12).toString() + endMinute;
        end = endMinute;
    } else {
        AMorPMEnd = " AM";
        end = end.substr(1);
    }
    document.getElementById("changeTime").innerHTML += "<h4>" + days[day - 1] + "</h4>" + "<li>" + start + AMorPMStart + " - " + end + AMorPMEnd + "<span class=\"rmButton\"> &#x2716;</span></li>";
    removeTime();   
}

function removeTime() {
    var rmButton = document.getElementsByClassName("rmButton");
    for (i = 0; i < rmButton.length; i++) {
        rmButton[i].addEventListener("click", 
        function() {
            this.parentElement.style.display = 'none';
        }
                                     );
    }
}
/* file-system example */
let fs = require('file-system')

let test = {
    'firstName': 'Elijah',
    'lastName': 'Chanakira',
    'roomNumber': 240,
    'courseTitle': 'CMSC423'
}


fs.writeFile('./test.json', JSON.stringify(test), function (err) {})