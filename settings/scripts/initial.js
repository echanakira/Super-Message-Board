function setupLocalStorage() {
    if (localStorage.getItem("announcements") == null) {
        initialAnnouncements();
        console.log("Ann setup")
    }
    if (localStorage.getItem("availability") == null) {
        intialAvailability();
        console.log("Avail setup")
    }
    if (localStorage.getItem("professorName") == null) {
        localStorage.setItem("professorName", "Professor")
    }
    if (localStorage.getItem("officeNumber") == null) {
        localStorage.setItem("officeNumber", "0000")
    }
    if (localStorage.getItem("queueStatus") == null) {
        localStorage.setItem("queueStatus", "Disabled")
    }
    if (localStorage.getItem("themes") == null) {
        initialThemes()
    }
    if (localStorage.getItem("currentQueue") == null) {
        initializeQueue();
    }
}

function initializeQueue() {
    let student = new Student("Elijah", id, "bob@bill.com", "333-333-3333", "cmsc434", "need help on project 1");
    id++;
    queue.push(student);
    student = new Student("Andrew", id, "bob@bill.com", "333-333-3333", "cmsc436", "need help on project 2");
    id++;
    queue.push(student);
    student = new Student("Hamza", id, "bob@bill.com", "333-333-3333", "cmsc434", "need help on project 3");
    id++;
    queue.push(student);
    //create a new student and then increase the id for the next person
    student = new Student("Jacob", id, "bob@bill.com", "333-333-3333", "cmsc434", "need help on project");
    id++;
    queue.push(student);
    localStorage.setItem('currentQueue', JSON.stringify(queue))
    localStorage.setItem('officeNumber', '1208');
}

function initialAnnouncements() {
    let announcements = [{
            title: 'Test1',
            description: 'Test Description',
            photo: '../settings/assets/Prof1.png'
        },
        {
            title: 'Test2',
            description: 'Test Description',
            photo: '../settings/assets/Prof2.png'
        },
        {
            title: 'Test3',
            description: 'Test Description',
            photo: '../settings/assets/Prof3.png'
        },
    ];
    localStorage.setItem('announcements', JSON.stringify(announcements))
}

function intialAvailability() {
    var weekJSON = {
        "Monday": [],
        "Tuesday": [],
        "Wedneday": [],
        "Thursday": [],
        "Friday": [],
        "Saturday": [],
        "Sunday": []
    }
    localStorage.setItem("availability", JSON.stringify(weekJSON));
}

function initialThemes() {
    let text, nav, bg, secondaryBG, modalB, navText, type;

    nav = '#333';
    bg = 'white';
    text = 'black';
    secondaryBG = '#f6f6f6';
    modalB = 'rgba(black, 0.4)'
    navText = '#f2f2f2';
    type = 'normal';
    let themes = [nav, bg, text, secondaryBG, modalB, navText, type];
    localStorage.setItem('themes', JSON.stringify(themes));
}