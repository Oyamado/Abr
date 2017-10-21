opened=false;
function openPresent(event) {
  if(opened==false){
    var cur1 = event.currentTarget.parentNode.childNodes[0];
    cur1.innerHTML="UnFinish";
    var cur = event.currentTarget.parentNode.childNodes[1];
    cur =cur.style.textDecoration="line-through";
    opened=true;
  }
  else{
    var cur1 = event.currentTarget.parentNode.childNodes[0];
    cur1.innerHTML="Finish";
    var cur = event.currentTarget.parentNode.childNodes[1];
    cur =cur.style.textDecoration="none";
    opened=false;
  }
}
console.log(document.querySelector("#tasks"));
for (var index = 0; index < document.querySelector("#tasks").querySelectorAll('button').length; index++) {
  document.querySelector("#tasks").querySelectorAll('button')[index].addEventListener("click",openPresent);  
}
