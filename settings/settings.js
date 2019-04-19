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
}


/******************** HTML STEUP AND MANIPULATION ********************/
function setup() {
    // console.log('Setting up')
    setupProfessorInfo();
    modalSetup();
    setupQueue();
    setupEvents();
    setupAnnouncements();
}

function setupEvents() {
    let officeBtn = document.querySelector('#submit-office');
    let toggleBtn = document.querySelector('#queue-toggle');
    let notifyBtn = document.querySelector('#notify-queue');


    officeBtn.addEventListener('click', function () {
        submitOfficeInfo();
    })

    toggleBtn.addEventListener('click', function () {
        toggleQueue();
    })
}

function modalSetup() {
    let listElements = document.getElementsByTagName('li');
    console.log(`page-body li -> ${listElements}`)
    console.log(listElements)
    let set = document.querySelector('#set-storage');
    let get = document.querySelector('#get-storage');

    set.addEventListener('click', function () {
        updateQueue();
    })

    get.addEventListener('click', function () {
        getCurrentQueue();
    })

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
}


function setupProfessorInfo() {
    let title = document.querySelector('#page-title');
    title.innerHTML = `${JSON.parse(localStorage.getItem('professorName'))}'s
    Hub`;
}


function refreshPage() {
    setupProfessorInfo();
}

resetStorage();
setup();

//Created localStorage variable to enable and disable queue
//Created queue population
//TODO: Add Hover Effect on X's
//TODO: option with in or out of office -> send array of time (Look at Andy's Time)

//old update queue
function addToQueue(studentObj) {
    getCurrentQueue();
    queue.push(studentObj);
    localStorage.setItem('currentQueue', JSON.stringify(queue))
}

//removes a specific index
function removeFromQueue(index) {
    getCurrentQueue();
    queue.splice(index, 1);
    localStorage.setItem('currentQueue', JSON.stringify(queue))
}