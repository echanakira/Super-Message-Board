function setupQueue() {
    let queueStatus = localStorage.getItem('queueStatus');

    if(queueStatus == 'Enabled'){
        toggleQueue();
    }
}

function toggleQueue() {
    let toggle = document.querySelector('#queue-toggle');
    let container = document.querySelector("#queue-modal-content")

    let notify = document.createElement("button");
    let br = document.createElement("br");
    br.id ="br";

    notify.id = "notify-queue";

    if (toggle.innerHTML === 'Enable') {
        toggle.remove();
        container.appendChild(notify);
        container.appendChild(br);
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
            }
            alert(`${name} has been notified.`)
        });
    } else {
        let notify = document.querySelector('#notify-queue')
        let br = document.querySelector('#br')

        if (confirm('Are you sure you want to disable queue?')) {
            toggle.innerHTML = 'Enable';
            notify.remove();
            br.remove();
            disableQueue();
            localStorage.setItem('queueStatus', 'Disabled')
            notify.addEventListener('click', function () {});
        }
    }
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
        let description = document.createElement("div");
        let closeBtn = document.createElement('span')

        li.classList.add("closed")
        description.className = "description hide";
        li.appendChild(description);

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

        li.addEventListener('click', function(){
            if(this.classList.contains("closed")){//If description closed
                description.innerHTML = `<h4> ${queue[index].cls} </h4> \n <b> Reason: </b> ${queue[index].msg}`;
                this.classList.remove('closed')
                this.classList.add("open")
            }else{//Otherwise if description is open
                description.innerHTML = "";
                this.classList.remove('open')
                this.classList.add("closed")
            }

        })

        li.innerHTML = student['name'];

        li.appendChild(closeBtn)
        li.appendChild(description);
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