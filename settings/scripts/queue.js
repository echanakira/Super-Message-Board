function setupQueue() {
    let queueElement = document.querySelector('#queue');
    let currentQueue = JSON.parse(localStorage.getItem('currentQueue'));
    console.log(currentQueue)
}

function toggleQueue() {
    let toggle = document.querySelector('#queue-toggle');
    let container = document.querySelector("#queue-modal-content")

    let notify = document.createElement("button");
    notify.id = "notify-queue";

    if (toggle.innerHTML === 'Enable') {
        toggle.remove();
        container.appendChild(notify);
        container.appendChild(toggle);
        localStorage.setItem('queueStatus', 'Enabled')
        toggle.innerHTML = 'Disable'
        let queue = loadQueue();
        notify.innerHTML = 'Notify ' + queue[0]['name'];

        notify.addEventListener('click', function () {
            let name = queue[0]['name'];
            nextInQueue();
            queue = loadQueue();
            if (queue.length > 0) {
                this.innerHTML = 'Notify ' + queue[0]['name']
            } else {
                this.innerHTML = '------'
            }
            alert(`${name} has been notified.`)
        });
    } else {
        let notify = document.querySelector('#notify-queue')
        if (confirm('Are you sure you want to disable queue?')) {
            toggle.innerHTML = 'Enable';
            notify.remove();
            disableQueue();
            localStorage.setItem('queueStatus', 'Disabled')
            notify.addEventListener('click', function () {});
        }
    }
}

/*
function nextInQueue() {

        getCurrentQueue();
    if(queue){
    var nextStudent = queue[0];
    return nextStudent;
    }else{
    //null error 
    alert(" no more students in queue");
    return null;
    }
        
        
<<<<<<< HEAD
    }*/



function OLDnextInQueue() {
    getCurrentQueue();
    let nextStudent = queue.shift();
    localStorage.setItem('currentQueue', JSON.stringify(queue))
    return nextStudent;
}

function nextInQueue() {
    getCurrentQueue();
    if (queue) {
        var nextStudent = queue[0];
        return nextStudent;
    } else {
        //null error 
        alert(" no more students in queue");
        return null;
    }
}


function getCurrentQueue() {
    let queue = JSON.parse(localStorage.getItem('currentQueue'))
    console.log(queue)
    return queue;
}

//TODO: When student is removed update Notify Prompt
//TODO: Stop removal of duplicate students

function loadQueue() {
    let queueElement = document.querySelector('ol');
    queueElement.innerHTML = "";
    let queue = getCurrentQueue();
    if (queue == null) {
        return;
    }

    for (let index = 0; index < queue.length; index++) {
        let student = queue[index];

        let li = document.createElement('li');
        let closeBtn = document.createElement('span')
        let collapsible = document.createElement("button");
        collapsible.id = "student-collapse"

        closeBtn.classList.add('remove')
        closeBtn.innerHTML = '&#x2716;';
        closeBtn.addEventListener('click', function () {
            console.log(this.parentElement.textContent)
            let index = findStudent(this.parentElement.textContent, queue);
            console.log(index)
            queue = removeFromLocalStorage(index, queue);
            let notify = document.querySelector('#notify-queue');
            if (queue.length > 0) {
                notify.innerHTML = 'Notify ' + queue[0]['name']
            } else {
                notify.innerHTML = '------'
            }
            this.parentElement.remove();
        });

        collapsible.addEventListener('click', function(){
            let collapse = this;
            let message = document.querySelector(".message");
            console.log(queue[index])

            if(message.style.display == 'block'){
                console.log("In If");
                message.innerHTML = queue[index].msg;
                console.log(queue[index].msg)
                collapse.innerHTML = "Show";
                collapse.style.background = "#305A72";
                message.style.content  = 'none';
                message.innerHTML = "";
            }else{
                console.log('In else');
                console.log(message.style.display)
                message.innerHTML = queue[index].msg;
                collapse.innerHTML = "Hide";
                collapse.style.background = 'DarkRed';
                message.style.display  = 'block';
            }

        })

        collapsible.innerHTML = "Show";
        li.innerHTML = student['name'];

        li.appendChild(closeBtn)
        li.appendChild(collapsible);
        queueElement.appendChild(li);
    }
    return queue;
}

/* Function that finds a student in the queue 
 * Student name has a special character which needs to be removed
 */
function findStudent(studentName, queue) {
    let result = -1;

    let trimmedName = studentName.substring(0, studentName.length - 1);
    for (let index = 0; index < queue.length; index++) {
        if (queue[index]['name'] === trimmedName) {
            return index;
        }
    }

    return result;
}

/* Function removes an object from localStorage
 *
 */
function removeFromLocalStorage(index, queue) {
    queue.splice(index, 1)
    localStorage.setItem("currentQueue", JSON.stringify(queue));
    return queue;
}

function disableQueue() {
    let queueElement = document.querySelector('ol');
    queueElement.innerHTML = "";
}