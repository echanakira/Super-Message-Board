//Adding the student object and making the changes to access the object and store it as a Json file
//student object takes name, id num for the queue(now serving number)
function Student(name, position, email, phonenum, cls, msg) {
    this.name = name;
    this.posistion = position;
    this.email = email;
    this.phonenum = phonenum;
    this.cls = cls;
    this.msg = msg;
}

//using shift to dequeue and push to enqueue
var id = 0;
let queue = [];
let currentStudent;
let numInQueue = 0;

window.onload = function () {
    // resetStorage();
    setup();
}

function resetStorage() {
    resetStorageupdated();
}

function resetStorageupdated() {
    var student = new Student("Elijah", id, "bob@bill.com", "333-333-3333", "cmsc434", "need help on project");
    id++;
    queue.push(student);
    //create a new student and then increase the id for the next person
    student = new Student("Jacob", id, "bob@bill.com", "333-333-3333", "cmsc434", "need help on project");
    id++;
    queue.push(student);
    localStorage.setItem('currentQueue', JSON.stringify(queue))
    localStorage.setItem('officeNumber', '1208');
    // localStorage.setItem('officeStatus', JSON.stringify({status:true, time:null}))
}

/******************** HTML STEUP AND MANIPULATION ********************/
function setup() {
    // console.log('Setting up')
    setupProfessorInfo();
    modalSetup();
    setupQueue();
    setupEvents();
    setupAnnouncements();
    loadAvailableTime();
    setupThemeModal();
    setupThemeSettings();
}

function validateName(name) {
    var re = /^([a-zA-Z]+(-[a-zA-Z]+)*(\s[a-zA-Z]+)*)$/;
    return re.test(String(name).toLowerCase());
}

function validateNumber(num) {
    var re = /^[0-5][0-9][0-9][0-9]$/;
    return re.test(String(num));
}

function setupEvents() {
    let officeBtn = document.querySelector('#submit-office');
    let toggleBtn = document.querySelector('#queue-toggle');
    let notifyBtn = document.querySelector('#notify-queue');
    let value = 0;

    officeBtn.addEventListener('click', function () {
        submitOfficeInfo();
    })

    toggleBtn.addEventListener('click', function () {
        toggleQueue();
    })

}

//Event that updates office information
function submitOfficeInfo() {
    let name = document.querySelector('#office-modal #professor-name');
    let office = document.querySelector('#office-number');

    if (!validateName(name.value)) {
        alert("please enter a valid name");
        return false;
    }
    if (!validateNumber(office.value)) {
        alert("please enter a valid Office number ####");
        return false;
    }

    let statusObj;

    localStorage.setItem('professorName', JSON.stringify(name.value));
    localStorage.setItem('officeNumber', JSON.stringify(office.value));

    if (document.getElementById('in-office').checked) {
        statusObj = {
            status: 'true',
            hours: null,
            minutes: null,
        }
        localStorage.setItem('officeStatus', JSON.stringify(statusObj));
    } else {
        let newHours = document.querySelector('#hours');
        let newMinutes = document.querySelector("#minutes")
        statusObj = {
            status: 'false',
            hours: newHours.value,
            minutes: newMinutes.value,
        }
        localStorage.setItem('officeStatus', JSON.stringify(statusObj));
    }
    // refreshPage();
    return true;
}

//Converts time from XX:XX:XX to XX:XX (AM/PM)
function toStandardTime(time) {

    time = time.split(':'); // convert to array

    // fetch
    let hours = Number(time[0]);
    let minutes = Number(time[1]);

    // calculate
    var timeValue;

    if (hours > 0 && hours <= 12) {
        timeValue = "" + hours;
    } else if (hours > 12) {
        timeValue = "" + (hours - 12);
    } else if (hours == 0) {
        timeValue = "12";
    }

    timeValue += (minutes < 10) ? ":0" + minutes : ":" + minutes; // get minutes
    timeValue += (hours >= 12) ? " PM" : " AM"; // get AM/PM

    return timeValue;
}

//Initializes each modal and the li events
function modalSetup() {
    let listElements = document.getElementsByTagName('li');

    for (let index = 0; index < listElements.length; index++) {
        let li = listElements[index];
        if (li.id == null) break;
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
            function () {
                this.parentElement.style.display = 'none';
            }
        );
    }
}


function setupProfessorInfo() {
    let title = document.querySelector('#page-title');
    title.innerHTML = `${JSON.parse(localStorage.getItem('professorName'))}'s
    Hub`;
    let office = document.querySelector('#nav-office-number');
    console.log(office);
    office.innerHTML = JSON.parse(localStorage.getItem('officeNumber'));

    let navNam = document.querySelector('#prof-name');
    navNam.innerHTML = `${JSON.parse(localStorage.getItem('professorName'))}'s Page`;

}

function refreshPage() {
    setupProfessorInfo();
}

function setupThemeModal() {
    let themeOptions = document.querySelectorAll('.themes');
    let button = document.querySelector('#theme-submit');

    button.addEventListener('click',
        function () {
            for (let index = 0; index < themeOptions.length; index++) {
                if (themeOptions[index].checked) {
                    changeTheme(themeOptions[index], index);
                    window.location.reload();
                    return;
                }
            }
        }
    );
    //Calls method to setup last saved theme, otherwise defaults to #1
}


//Function changes the current theme in local storage
function changeTheme(option, index) {
    let text, nav, bg, secondaryBG, modalB, navText, type;
    if (option.value == 'dark') {
        nav = '#f6f6f6';
        bg = '#333';
        text = 'white';
        secondaryBG = '#515151';
        modalB = 'rgba(black, 0.4)'
        navText = '#f2f2f2';
        type = 'dark';
    } else if (option.value == 'umd') {
        nav = 'red';
        bg = 'white';
        text = 'black'
        secondaryBG = '#f6f6f6';
        modalB = 'rgba(black, 0.4)'
        navText = '#f2f2f2';
        type = 'umd';
    } else {
        nav = '#333';
        bg = 'white';
        text = 'black';
        secondaryBG = '#f6f6f6';
        modalB = 'rgba(black, 0.4)'
        navText = '#f2f2f2';
        type = 'normal';
    }
    let themes = [nav, bg, text, secondaryBG, modalB, navText,type];
    localStorage.setItem('themes', JSON.stringify(themes));
    setupThemeSettings();
    alert('Theme Changed');
}

//Function called to set theme onwindow load or when theme is changed;
//themes[nav,bg,text,secondaryBG, modalBG, navText]
function setupThemeSettings() {
    let nav = document.querySelector('.navbar');
    let body = document.querySelector('body');
    let themes = JSON.parse(localStorage.getItem('themes'));

    let li = document.querySelectorAll('ul li');
    let modal = document.querySelectorAll('.modal');
    let modalContent = document.querySelectorAll('.modal-content')


    /* Consistent Across All Pages */
    nav.style.backgroundColor = themes[0]
    nav.style.color = themes[3];
    body.style.backgroundColor = themes[1];
    body.style.color = themes[2];

    /* Page Specific */
    li.forEach(item => item.style.backgroundColor = themes[3])


    modal.forEach(modal => {
        modal.style.backgroundColor = themes[4];
        modal.style.color = themes[2]
    });

    modalContent.forEach(modal => {
        modal.style.backgroundColor = themes[1];
    });

}

