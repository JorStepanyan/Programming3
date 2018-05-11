function main() {
    var socket = io.connect('http://localhost:3000');
    // var chatDiv = document.getElementById('text');
    // var chatText = document.getElementsByTagName('p');
    // var input = document.getElementById('message');
    // var button = document.getElementById('submit');
    // var buttonDelete = document.getElementById('delete'); 

    function handleSubmit(evt) {
        // var val = input.value;
        // if (val != "") {
            socket.emit("send message", val);
        // }
    }
    // button.onclick = handleSubmit;
    // function galust say(msg) {
        // var p = document.createElement('p');
        // p.innerText = msg;
        // chatDiv.appendChild(p);
        // input.value = "";
    }

    socket.on('display message', handleMessage);

    // function handleDelete() {
        // chatDiv.innerHTML = '';
    // }
    // buttonDelete.onclick = handleDelete;
// } 

// window.onload = main;