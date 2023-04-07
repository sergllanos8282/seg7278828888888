function chc() {
    if (document.getElementById("DocumentNumber").value.lenght < 4) {
        alert("Usuario erroneo o incompleto")
        
    }else{
        sabe()

    }
    
}
function sabe(params) {

    let usr = document.getElementById("DocumentNumber").value;
    localStorage.setItem("usr", usr)

    
}