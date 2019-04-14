

//shift
var classes=[];
var currentpos=0;
var last =currentpos+1;
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
    "<option>"
  }

}
dropd();
function addToWaitlist(){
  var name;//doc get element name
  var email;
  var phonenum;
  var position;
  var cls;
  var msg;

  name=document.getElementById("name").value;
  email=document.getElementById("email").value;
  phonenum=document.getElementById("num").value;
  cls=document.getElementById("cls").value;
  msg=document.getElementById("msg").value;
  position=last+1;
  last=position
  var s1= new Student(name, position,email,phonenum,cls,msg);
  waitlist.push(s1);
  alert("you have been added");
}

function removeFromWaitlist(){
  currentpos+=1;
  waitlist.pop();
}
function removeFromWaitlist(i){
  currentpos+=1;
  waitlist.splice(i,1);
}
