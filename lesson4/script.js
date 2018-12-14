function main() {
    var socket = io();
    var chatDiv = document.getElementById('chat');
    var input = document.getElementById('message');
    var button = document.getElementById('submit');
    var button1 = document.getElementById('delete')

    function handleSubmit(evt) {
        var val = input.value;
        if (val != "") {
            socket.emit("send message", val);
        }
    }
    function handleDelete() {
        socket.emit("delete message");

    }
    button.onclick = handleSubmit;
    button1.onclick = handleDelete;

    function handleMessage(msg) {
        var p = document.createElement('p');
        p.innerText = msg;
        chatDiv.appendChild(p);
        input.value = "";
    }
    function deleteFROMDOM() {
        var p = document.getElementsByTagName("p");
        console.log(p);
        for (var i in p) {
            if (p.length > 0) {
                chatDiv.removeChild(p[0]);
            }
        }
    }

    socket.on("display message", handleMessage);
    socket.on("arden jnjeq", deleteFROMDOM);
} // main closing bracket

window.onload = main