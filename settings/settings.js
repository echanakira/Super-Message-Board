<<<<<<< HEAD

let queue = [{
        student: "Elijah",
        subject: 'CMSC434',
        description: 'NONE'
    },
    {
        student: "Hamza",
        subject: 'CMSC436',
        description: 'Exam 1'
    },
    {
        student: "Andrew",
        subject: 'CMSC436',
        description: 'Exam 3'
    }
]
resetStorage();

function resetStorage() {
    queue = [{
            student: "Elijah",
            subject: 'CMSC434',
            description: 'NONE'
        },
        {
            student: "Hamza",
            subject: 'CMSC436',
            description: 'Exam 1'
        },
        {
            student: "Andrew",
            subject: 'CMSC436',
            description: 'Exam 3'
        }
    ]
    localStorage.setItem('currentQueue', JSON.stringify(queue))
}

function updateQueue() {
    queue.push({
        student: "JACOB",
        subject: 'CMSC417',
        description: 'Exam 3'
    })

    localStorage.setItem('currentQueue', JSON.stringify(queue))
=======
//Adding the student object and making the changes to access the object and store it as a Json file
//student object takes name, id num for the queue(now serving number)
function Student(name,position,email, phonenum,cls,msg){
  this.name=name;
  this.posistion=position;
  this.email=email;
  this.phonenum=phonenum;
  this.cls=cls;
  this.msg=msg;
}
//using shift to dequeue and push to enqueue
var id=0;
let queue = [];
function resetStorageupdated() {
var student=new Student("Elijah",id,"bob@bill.com", "333-333-3333","cmsc434","need help on project");
id++;
queue.push(student);
//create a new student and then increase the id for the next person
student =new Student("Elijah",id,"bob@bill.com", "333-333-3333","cmsc434","need help on project");
id++;
queue.push(student);
localStorage.setItem('currentQueue', JSON.stringify(queue))
}
/*
let queue = [{
        student: "Elijah",
        subject: 'CMSC434',
        description: 'NONE'
    },
    {
        student: "Hamza",
        subject: 'CMSC436',
        description: 'Exam 1'
    },
    {
        student: "Andrew",
        subject: 'CMSC436',
        description: 'Exam 3'
    }
]
*/
resetStorage();

function resetStorage() {
  resetStorageupdated();
  /*
    queue = [{
            student: "Elijah",
            subject: 'CMSC434',
            description: 'NONE'
        },
        {
            student: "Hamza",
            subject: 'CMSC436',
            description: 'Exam 1'
        },
        {
            student: "Andrew",
            subject: 'CMSC436',
            description: 'Exam 3'
        }
    ]

    localStorage.setItem('currentQueue', JSON.stringify(queue))
    */
}
//old update queue
function addToQueue(studentObj) {
    getCurrentQueue();
    queue.push(studentObj);
    localStorage.setItem('currentQueue', JSON.stringify(queue))
}

var currentStudent=null;

//removes a specific index
function removeFromQueue(index){
  getCurrentQueue();
    queue.splice(index,1);
    localStorage.setItem('currentQueue', JSON.stringify(queue))
}
//gets next in queue

function nextInQueue(){
  getCurrentQueue();
  currentpos++;
  currentStudent=queue.shift();
  localStorage.setItem('currentQueue', JSON.stringify(queue))
}
function getCurrentQueue() {
    let queue = JSON.parse(localStorage.getItem('currentQueue'))
    console.log(queue)
>>>>>>> c5c84ef85b2ea83a46a4f7a6f88564557e0e3970
}

function getCurrentQueue() {
    let queue = JSON.parse(localStorage.getItem('currentQueue'))
    console.log(queue)
}

load('fs-extra').then((fs) => fs.writeFile());

// Setup opening a modal
function modalSetup() {
    let listElements = document.getElementsByTagName('li');
    let set = document.querySelector('#set-storage');
    let get = document.querySelector('#get-storage');

    set.addEventListener('click',function(){
        updateQueue();
    })

    get.addEventListener('click',function(){
        getCurrentQueue();
    })

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
}

function setup() {
    modalSetup();
    console.log('Modals were setup')
}


<<<<<<< HEAD
setup();
=======
setup();
>>>>>>> c5c84ef85b2ea83a46a4f7a6f88564557e0e3970
