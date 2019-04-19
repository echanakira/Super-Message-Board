/* Example for using file-system is at the bottom */

function setup() {

    modalSetup();
    loadAvailableTime();
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

setup();

function loadAvailableTime() {
    var temp, time,i, j, dayArr;
    var counter = 0;
    var days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
    if(localStorage.getItem("availability") != null) {
        temp = localStorage.getItem("availability");
        time = JSON.parse(temp);
        for(i = 0; i< days.length; i++) {
            dayArr = time[days[i]];
            if(dayArr != undefined) {
                for(j = 0; j < dayArr.length; j++) {
                    console.log(dayArr);
                    document.getElementById(days[i]).innerHTML += "<li>" + dayArr[j] + "<span class=\"rmButton\"> &#x2716;</span></li>";
                }
            }
        }
    }
    removeTime();
}
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
    document.getElementById(days[day - 1]).innerHTML += "<li>" + start + AMorPMStart + " - " + end + AMorPMEnd + "<span class=\"rmButton\"> &#x2716;</span></li>";
    // add this time into localStorage so that Hamza's page can access it. 
    var temp, timeJSON;
    var weekJSON = 
        {
            "Monday": [],
            "Tuesday": [],
            "Wedneday": [],
            "Thursday":[],
            "Friday":[],
            "Saturday":[],
            "Sunday":[]
        }
    if(localStorage.getItem("availability") != null) {
        temp = localStorage.getItem("availability");
        timeJSON = JSON.parse(temp);
        timeJSON[days[day-1]].push(start + AMorPMStart + " - " + end + AMorPMEnd);
        localStorage.setItem("availability", JSON.stringify(timeJSON));
    } else {
        weekJSON[days[day-1]].push(start + AMorPMStart + " - " + end + AMorPMEnd);
        localStorage.setItem("availability", JSON.stringify(weekJSON));
    }
    removeTime();   
}

function removeTime() {
    var days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
    var time = JSON.parse(localStorage.getItem("availability"));
    var i, j, timeRm, dayArr;
    var rmButton = document.getElementsByClassName("rmButton");
    for (i = 0; i < rmButton.length; i++) {
        rmButton[i].addEventListener("click", 
        function() {
            timeRm = this.parentElement.textContent.trim().slice(0,-2);
            for(i = 0; i < days.length; i++) {
                dayArr = time[days[i]];
                if(dayArr != undefined) {
                    for(j = 0; j < dayArr.length; j++) {
                        if(dayArr[j] != undefined) {
                            if(dayArr[j].localeCompare(timeRm) == 0) {
                                dayArr[j] = undefined;
                                break;
                            }
                        }
                    }
                    if(dayArr[0] == null) {
                        dayArr = [];
                    }
                    time[days[i]] = dayArr;
                }
            }
            localStorage.setItem("availability", JSON.stringify(time));
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