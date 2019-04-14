
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
var queuefilname="../user_data/queue.txt";

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


function dropd(){
  var numofclasses=classes.length;
  var s="";
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
  position=last+1;
  last=position
  var s1= new Student(name, position,email,phonenum,cls,msg);
<<<<<<< HEAD
  waitlist.push(s1);
  alert("you have been added");
=======
  waitlist.enqueue(s1);
  //write
  alert("you have been added to the queue, your number is: "+position);
>>>>>>> c5c84ef85b2ea83a46a4f7a6f88564557e0e3970
}

function removeFromWaitlist(){
  currentpos+=1;
<<<<<<< HEAD
  waitlist.pop();
=======
  waitlist.dequeue();
>>>>>>> c5c84ef85b2ea83a46a4f7a6f88564557e0e3970
}
function removeFromWaitlist(i){
  currentpos+=1;
  waitlist.splice(i,1);
}
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
}
}
function readFromFile(filename, list){

}
>>>>>>> c5c84ef85b2ea83a46a4f7a6f88564557e0e3970
