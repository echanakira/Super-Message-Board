
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
  s+="<option value=\"\"><\/option>";
  for(i=0;i<numofclasses;i++){
    s+="<option value=\""+classes[i]+"\">"+classes[i]+"<\/option>";
  }
  document.getElementById("smeagol").innerHTML=s;
}
dropd();
function loadHome(){
location.href = "HomePage.html";
}
function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}
function validateNum(num) {
    var re = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;
    return re.test(String(num));
}
function validateName(name) {
    var re = /^([a-zA-Z]+(-[a-zA-Z]+)*(\s[a-zA-Z]+)*)$/;
    return re.test(String(name).toLowerCase());
}
function validateMSG(msg) {
  var re = /^.*[a-zA-Z]+.*$/;
  return re.test(String(msg).toLowerCase());

}
function addToWaitlist(){
  var name;//doc get element name
  var email;
  var phonenum;
  var position;
  var cls;
  var msg;
  //read
  //add error functions
  name=document.getElementById("name").value;
  if(validateName(name)){}else{
    alert("invalid name, please enter a valid character string a-z, space and hyphens are allowed");
    return false;
}
  email=document.getElementById("email").value;
  if(validateEmail(email)){

  }else{
    alert("invalid email youremail[at]email[dot]blah");
    return false;
  }
  phonenum=document.getElementById("phone").value;
if(validateNum(phonenum)){

}else{
  alert("invalid phone number (),-,., [0-9]");
  return false;
}
  cls=document.getElementById("smeagol").value;
  if(cls){

  }else{
    alert("Please choose a class");
    return false;
  }
  msg=document.getElementById("msg").value;
  if(validateMSG(msg)){

  }else{
    alert("Please give a reason why you are here");
    return false;
  }
  position=incId();
  setID();
  var s1= new Student(name, position,email,phonenum,cls,msg);
  getCurrentQueue()
  if(!queue){
    queue=[]
    queue.push(s1)
  localStorage.setItem('currentQueue', JSON.stringify(queue));
}else{
  addToQueue(s1);
}
  //write
  alert("you have been added to the queue, your number is: "+position);
  return true;
}
var id;
if (!JSON.parse(localStorage.getItem('id'))) {
 id=0;
}else{
 id= JSON.parse(localStorage.getItem('id'));
}
function incId() {
  id = JSON.parse(localStorage.getItem('id'));
    localStorage.setItem('id', JSON.stringify(queue));

    return id++;

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
function setID(){
    localStorage.setItem('id', JSON.stringify(id))
}
setID();

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

//gets next in queue
function resetCL(){
localStorage.setItem('classlist', JSON.stringify(classlist));

let cls="Other";

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
     queue = JSON.parse(localStorage.getItem('currentQueue'));
    console.log(queue);
}


function setupNav(){
    let office = document.querySelector('#nav-office-number');

    office.innerHTML = localStorage.getItem('officeNumber');

  }
