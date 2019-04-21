//title: 'xxxx', description: 'xxx', photo:'/folder'
let announcements = [{
        title: 'Test1',
        description: 'Test Description',
        photo: '../settings/assets/stock1.jpg'
    },
    {
        title: 'Test2',
        description: 'Test Description',
        photo: '../settings/assets/stock2.png'
    },
    {
        title: 'Test3',
        description: 'Test Description',
        photo: '../settings/assets/stock3.jpg'
    },
];
localStorage.setItem('announcements', JSON.stringify(announcements))
function loadAnnouncements() {
    let announcemnets = JSON.parse(localStorage.getItem('announcements'))
    return announcemnets;
}

function setupAnnouncements() {
    let currentAnnouncements = loadAnnouncements();
    let titles = document.querySelector("#annoucement-titles");
    let submitBtn = document.querySelector('#announcement-submit');

    for (let i = 0; i < currentAnnouncements.length; i++) {
        let li = document.createElement('li');

        let closeBtn = document.createElement('span')
        closeBtn.classList.add('remove')
        closeBtn.innerHTML = '&#x2716;';
        closeBtn.addEventListener('click', function () {
            let index = findTitle(this.parentElement.textContent, announcements);
            queue = removeAnnFromLocalStorage(index, announcements);
            this.parentElement.remove();
        })

        li.innerHTML = currentAnnouncements[i]['title'];

        li.appendChild(closeBtn);
        titles.appendChild(li);
    }

    submitBtn.addEventListener('click', function () {
        addAnnouncement();
    });
}

function findTitle(name, announcements) {
    let result = -1;
    let trimmed = name.substring(0, name.length - 1);
    for (let index = 0; index < announcements.length; index++) {
        if (announcements[index]['title'] === trimmed) {
            return index;
        }
    }

    return result;
}

function removeAnnFromLocalStorage(index, announcements) {
    announcements.splice(index, 1)
    localStorage.setItem("announcements", JSON.stringify(announcements));
    return announcements;
}

function updateAnnouncements() {
    let currentAnnouncements = loadAnnouncements();
    let titles = document.querySelector("#annoucement-titles");
    let submitBtn = document.querySelector('#announcement-submit');

    titles.innerHTML = "";

    for (let i = 0; i < currentAnnouncements.length; i++) {
        let li = document.createElement('li');

        let closeBtn = document.createElement('span')
        closeBtn.classList.add('remove')
        closeBtn.innerHTML = '&#x2716;';
        closeBtn.addEventListener('click', function () {
            console.log(this.parentElement.textContent)
            let index = findTitle(this.parentElement.textContent, queue);
            queue = removeFromLocalStorage(index, announcements);
            this.parentElement.remove();
        })

        console.log(currentAnnouncements[i])
        li.innerHTML = currentAnnouncements[i]['title'];

        li.appendChild(closeBtn);
        titles.appendChild(li);
    }
}

function addAnnouncement() {
    let announcements = loadAnnouncements();
    let newTitle = document.getElementById('announcement-title').value;
    let newDescription = document.getElementById('announcement-description').value;
    let newPhoto;

    if (document.querySelector('#option-1').checked) {
        newPhoto = '../assets/stock1.jpg'
    } else if (document.querySelector('#option-2').checked) {
        newPhoto = '../assets/stock2.png'
    } else if (document.querySelector('#option-3').checked) {
        newPhoto = '../assets/stock3.jpg'
    } else {
        newPhoto = '../assets/stock5.jpg'
    }
    announcements.push({
        title: newTitle,
        description: newDescription,
        photo: newPhoto
    })
    localStorage.setItem('announcements', JSON.stringify(announcements));

    updateAnnouncements();

    return announcements;
}