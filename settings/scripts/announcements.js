let announcements = [
    {title:'Test1', description:'Test Description', photo:'../assets/stock1.jpg'},
    {title:'Test2', description:'Test Description', photo:'../assets/stock1.jpg'},
    {title:'Test3', description:'Test Description', photo:'../assets/stock1.jpg'},

];
localStorage.setItem('announcements', JSON.stringify(announcements))
//title: 'xxxx', description: 'xxx', photo:'/folder'
function loadAnnouncement(){
   let announcemnets = JSON.parse(localStorage.getItem('announcements'))
    return announcemnets;
}

function setupAnnouncements(){
    let currentAnnouncements = loadAnnouncement();
    let titles = document.querySelector("#annoucement-titles");
    for(let i = 0; i < currentAnnouncements.length; i++){
        console.log('About to loop')
        let li = document.createElement('li');

        let closeBtn = document.createElement('span')
        closeBtn.classList.add('remove')
        closeBtn.innerHTML = '&#x2716;';

        console.log(currentAnnouncements[i])
        li.innerHTML = currentAnnouncements[i]['title'];

        li.appendChild(closeBtn);
        titles.appendChild(li);
    }
}

