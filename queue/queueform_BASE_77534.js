
  //var fs = require("fs");
//shift
var classes=[];
classes.push("CMSC434");
classes.push("CMSC412");
classes.push("CMSC666");
classes.push("Other");
var queuefilname="../user_data/queue.txt";

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


function dropd(){
  var numofclasses=classes.length;
  var s="";
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
  position=last+1;
  last=position
  var s1= new Student(name, position,email,phonenum,cls,msg);
  waitlist.enqueue(s1);
  //write
  alert("you have been added to the queue, your number is: "+position);
}

function removeFromWaitlist(){
  currentpos+=1;
  waitlist.dequeue();
}
function removeFromWaitlist(i){
  currentpos+=1;
  waitlist.splice(i,1);
}
function writeToFile(filename, list){
waitlist=[];
var text = fs.readFileSync(filename);
var textByLine = text.split("\n");
for(i=textByLine.length-1;i>=0;i--){
  var sarray=textByLine[i].split(",");
  var s1= new Student(sarray[0], sarray[1],sarray[2],sarray[3],sarray[4],sarray[5]);
  waitlist.push(s1);
}
}
function readFromFile(filename, list){

}
