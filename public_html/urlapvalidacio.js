window.addEventListener("load", init);

function $(nev) {
    return document.querySelectorAll(nev);
}

function ID(nev) {
    return document.getElementById(nev);
}

function init() {
    ID("kuld").addEventListener("click", validalas);
}

function validalas() {
    console.log("Validálunk");
    //hossz legalább 3 karakter
    var nevMezo = ID("nev").value;
    //Nagybetúvel kezdődjön
    var hiba = "";
    var adat = "";

    var szuro = /[A-Z]{1}[a-z]+\s[A-Z]{1}[a-z]+/;
    if (!szuro.test(nevMezo)) {
        hiba += "Nagybetűvel kezdődjön!<br>";
        ID("nev").style.border = "2px solid red";
    } else {
        ID("nev").style.border = "1px solid black";
        adat += "Név: " + nevMezo + "<br>";
    }
    //max hossz
    //Csak betű
    //van-e benne szóköz

    //E-mail
    var emailMezo = ID("email").value;
    var szuro = /^[\w-\.]+@([\w-]+\.)+[\w]{2,4}$/;
    if (!szuro.test(emailMezo)) {
        hiba += "Az e-mail formátuma nem megfelelő!<br>"
        ID("email").style.border = "2px solid red";
    } else {
        ID("email").style.border = "1px solid black";
        adat += "Email: " + emailMezo + "<br>";
    }

    var emailMezoketto = ID("emailujra").value;
    if (!szuro.test(emailMezoketto)) {
        hiba += "Az e-mail formátuma nem megfelelő!<br>"
        ID("emailujra").style.border = "2px solid red";
    }
    if (emailMezo !== emailMezoketto) {
        hiba += "A két E-mail cím nem egyezik!<br>"
        ID("email").style.border = "2px solid red";
        ID("emailujra").style.border = "2px solid red";
    } else {
        ID("emailujra").style.border = "1px solid black";

    }

    var telMezo = ID("tel").value;
    var szuro = /^\+[0-9]{11}$/;
    if (!szuro.test(telMezo)) {
        hiba += "Hibás telefonszám formátum! (+36 szükséges)<br>"
        ID("tel").style.border = "2px solid red";
    } else {
        ID("tel").style.border = "1px solid black";
        adat += "Telefonszám: " + telMezo + "<br>";
    }

    var webMezo = ID("weboldal").value;
    var szuro = /^http:\\{1}.../;
    var szuro2 = /.{0}/;
    if (!szuro.test(webMezo)) {
        hiba += "Hibás webcím formátum<br>"
        ID("weboldal").style.border = "2px solid red";
    } else {
        ID("weboldal").style.border = "1px solid black";
        adat += "Weboldal: " + webMezo + "<br>";
    }


    $("aside section:nth-child(1) p")[0].innerHTML = hiba;
    $("aside section:nth-child(2) p")[0].innerHTML = adat;

}

