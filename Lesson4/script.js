function main() {
   var socket = io.connect('http://localhost:3000');
   var chatDiv = document.getElementById('chat');
   var input = document.getElementById('message');
   var button = document.getElementById('submit');
   var deletebutton = document.getElementById('delete');
   function handleSubmit(evt) {
       var val = input.value;
       if (val != "") {
           socket.emit("send message", val);
       }
   }
   button.onclick = handleSubmit;

    function handleDELETE(evt) {
       
           socket.emit("delete message");
       
   }
   deletebutton.onclick = handleDELETE;
function handleMessage(msg) {
   		var p = document.createElement('p');
   		p.innerText = msg;
   		chatDiv.appendChild(p);
   		input.value = "";
}

function deleteMessage(msg){
   var parent = document.getElementById("chat");
var child = document.getElementsByName("p");
parent.removeChild(child);
   		input.value = "";
}

socket.on('display message', handleMessage);
socket.on('delete all message', deleteMessage);
} // main closing bracket

window.onload = main;
