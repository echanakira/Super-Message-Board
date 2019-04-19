
<<<<<<< HEAD

//shift
var classes=[];
var currentpos=0;
var last =currentpos+1;
=======
  //var fs = require("fs");
//shift
var classes=[];
classes.push("CMSC434");
classes.push("CMSC412");
classes.push("CMSC666");
classes.push("Other");
let queue=[];
var currentpos=0;
var last =currentpos;
>>>>>>> c5c84ef85b2ea83a46a4f7a6f88564557e0e3970
function Student(name,position,email, phonenum,cls,msg){
  this.name=name;
  this.posistion=position;
  this.email=email;
  this.phonenum=phonenum;
  this.cls=cls;
  this.msg=msg;
}
var waitlist = [];
var s1= new Student();

document.getElementById("msg").setAttribute("style", "height: 100px;");

function dropd(){
  getCurrentCL();
  let numofclasses=classes.length;
  let s="";
  for(i=0;i<numofclasses;i++){
<<<<<<< HEAD
    "<option>"
  }

}
dropd();
=======
    s+="<option value=\""+classes[i]+"\">"+classes[i]+"<\/option>";
  }
  document.getElementById("smeagol").innerHTML=s;
}
dropd();
function loadHome(){
location.href = "HomePage.html";
}
>>>>>>> c5c84ef85b2ea83a46a4f7a6f88564557e0e3970
function addToWaitlist(){
  var name;//doc get element name
  var email;
  var phonenum;
  var position;
  var cls;
  var msg;
<<<<<<< HEAD

  name=document.getElementById("name").value;
  email=document.getElementById("email").value;
  phonenum=document.getElementById("num").value;
  cls=document.getElementById("cls").value;
=======
  //read
  name=document.getElementById("name").value;
  email=document.getElementById("email").value;
  phonenum=document.getElementById("phone").value;
  cls=document.getElementById("smeagol").value;
>>>>>>> c5c84ef85b2ea83a46a4f7a6f88564557e0e3970
  msg=document.getElementById("msg").value;
  position=incId();

  var s1= new Student(name, position,email,phonenum,cls,msg);
<<<<<<< HEAD
<<<<<<< HEAD
  waitlist.push(s1);
  alert("you have been added");
=======
  waitlist.enqueue(s1);
  //write
  alert("you have been added to the queue, your number is: "+position);
>>>>>>> c5c84ef85b2ea83a46a4f7a6f88564557e0e3970
=======

  addToQueue(s1);
  //write
  alert("you have been added to the queue, your number is: "+position);
>>>>>>> c5c84ef85b2ea83a46a4f7a6f88564557e0e3970
}
let id=0;
function setID(){
    localStorage.setItem('id', JSON.stringify(id))
}
setID();

function incId() {
  let id = JSON.parse(localStorage.getItem('id'));
    localStorage.setItem('id', JSON.stringify(queue));
    return id;

}

function addToQueue(studentObj) {
    getCurrentQueue();
    queue.push(studentObj);
    localStorage.setItem('currentQueue', JSON.stringify(queue));
}
function getNumberInline(){
    getCurrentQueue();
    console.log(queue.length);
    return queue.length;
>>>>>>> 71c9770bff1282e2321fe8037fe017f5e3ea0ede
}
var currentStudent=null;

<<<<<<< HEAD
function removeFromWaitlist(){
  currentpos+=1;
<<<<<<< HEAD
  waitlist.pop();
=======
  waitlist.dequeue();
>>>>>>> c5c84ef85b2ea83a46a4f7a6f88564557e0e3970
=======
//removes a specific index
function removeFromQueue(index){
  getCurrentQueue();
    queue.splice(index,1);
    localStorage.setItem('currentQueue', JSON.stringify(queue));
>>>>>>> c18495e1fabbd31840ce5b9f018ffbc23cabc87a
>>>>>>> 71c9770bff1282e2321fe8037fe017f5e3ea0ede
}
//gets next in queue

function nextInQueue(){
  getCurrentQueue();
  currentStudent=queue.shift();
  localStorage.setItem('currentQueue', JSON.stringify(queue));
}
function getCurrentCL() {
    let classes = JSON.parse(localStorage.getItem('classlist'));
    console.log(classes);
}
<<<<<<< HEAD
<<<<<<< HEAD
=======
function writeToFile(filename, list){
waitlist=[];
var text = fs.readFileSync(filename);
var textByLine = text.split("\n");
for(i=textByLine.length-1;i>=0;i--){
  var sarray=textByLine[i].split(",");
  var s1= new Student(sarray[0], sarray[1],sarray[2],sarray[3],sarray[4],sarray[5]);
  waitlist.push(s1);
=======
//cls is a string for the class name and all that

function addToCL(cls) {
    getCurrentCL();
    classes.unshift(cls);
    localStorage.setItem('classlist', JSON.stringify(classes));
}


//removes a specific index
function removeFromCL(index){
  getCurrentCL();
    classses.splice(index,1);
    localStorage.setItem('classlist', JSON.stringify(classes));
>>>>>>> 71c9770bff1282e2321fe8037fe017f5e3ea0ede
}
//gets next in queue
function resetCL(){
localStorage.setItem('classlist', JSON.stringify(classlist));

let cls="Other";

classes.unshift(cls);
localStorage.setItem('classlist', JSON.stringify(classes));

}

function getCurrentCL() {
    let classes = JSON.parse(localStorage.getItem('classlist'));
    console.log(classes);
}
function getCurrentQueue() {
    let queue = JSON.parse(localStorage.getItem('queue'));
    console.log(queue);
}
>>>>>>> c5c84ef85b2ea83a46a4f7a6f88564557e0e3970
