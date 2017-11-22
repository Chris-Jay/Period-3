var namesArray=[];

function addnames(){
  namesArray.push(document.getElementById('add').value);
  document.getElementById('add').value="";
}

function alldone(){
  localStorage .setItem('list', namesArray);
      location.href="gohere.html";
}

function showNames(){
 var x = localStorage.getItem('list');
 document.getElementById('showall').inner.HTML = x
}