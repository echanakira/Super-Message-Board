
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
    s+="<option value=\""+classes[i]+"\">"+classes[i]+"<\/option>";
  }
  document.getElementById("smeagol").innerHTML=s;
}
dropd();
function loadHome(){
location.href = "HomePage.html";
}
function addToWaitlist(){
  var name;//doc get element name
  var email;
  var phonenum;
  var position;
  var cls;
  var msg;
  //read
  name=document.getElementById("name").value;
  email=document.getElementById("email").value;
  phonenum=document.getElementById("phone").value;
  cls=document.getElementById("smeagol").value;
  msg=document.getElementById("msg").value;
  position=incId();

  var s1= new Student(name, position,email,phonenum,cls,msg);

  addToQueue(s1);
  //write
  alert("you have been added to the queue, your number is: "+position);
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
}
var currentStudent=null;

//removes a specific index
function removeFromQueue(index){
  getCurrentQueue();
    queue.splice(index,1);
    localStorage.setItem('currentQueue', JSON.stringify(queue));
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
