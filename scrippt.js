 var a = "";
 var names = ["a"];
 
 function abc(event) {
   if(window.event.keyCode == 13) {
     saveName();
   }
 }
 function saveName() {
   var a = document.getElementById('hello').value;
   names.push(a);
   document.getElementById('hello').value = "";
 }
 function nextPage() {
   localStorage.setItem("name",names);
   location.href="gohere2.html"
 }
 
 function submitName() {
   var reimon = localStorage.getItem('name');
   window.alert(reimon);
 }
 
 function goingBack() {
   location.href="gohere.html"
 }
