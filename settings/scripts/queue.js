function setupQueue() {
    let queueElement = document.querySelector('#queue');
    let currentQueue = JSON.parse(localStorage.getItem('currentQueue'));
    console.log(currentQueue)
}


function toggleQueue() {
    let toggle = document.querySelector('#queue-toggle');
    let notify = document.querySelector('#notify-queue')

    if (toggle.innerHTML === 'Enable') {
        localStorage.setItem('queueStatus', 'Enabled')
        toggle.innerHTML = 'Disable'
        let queue = loadQueue();
        notify.innerHTML = 'Notify ' + queue[0]['name'];

        notify.addEventListener('click', function () {
            let name = queue[0]['name'];
            nextInQueue();
            queue = loadQueue();
            if(queue.length > 0){
                this.innerHTML = 'Notify ' + queue[0]['name']
            }else{
                this.innerHTML = '------'
            }
            alert(`${name} has been notified.`)
        });
    } else {
        if (confirm('Are you sure you want to disable queue?')) {
            toggle.innerHTML = 'Enable';
            notify.innerHTML = '------'
            disableQueue();
            localStorage.setItem('queueStatus', 'Disabled')
            notify.addEventListener('click', function () {});
        }
    }
}


<<<<<<< HEAD
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
        
        
    }
=======
function OLDnextInQueue() {
    getCurrentQueue();
    let nextStudent = queue.shift();
    localStorage.setItem('currentQueue', JSON.stringify(queue))
    return nextStudent;
}
function nextInQueue() {
    getCurrentQueue();
    var nextStudent = queue[0];
    return nextStudent;
}
>>>>>>> 28b18cdd32085aabd08163d3f7354b9725876c63

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

    for (let index = 0; index < queue.length; index++) {
        let student = queue[index];

        let li = document.createElement('li');
        let closeBtn = document.createElement('span')

        closeBtn.classList.add('remove')
        closeBtn.innerHTML = '&#x2716;';
        closeBtn.addEventListener('click', function () {
            console.log(this.parentElement.textContent)
            let index = findStudent(this.parentElement.textContent, queue);
            console.log(index)
            queue = removeFromLocalStorage(index, queue);
            let notify = document.querySelector('#notify-queue');
            if(queue.length > 0){
                notify.innerHTML = 'Notify ' + queue[0]['name']
            }else{
                notify.innerHTML = '------'
            }
            this.parentElement.remove();
        });
        li.innerHTML = student['name'];

        li.appendChild(closeBtn)
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
