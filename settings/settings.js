
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


setup();