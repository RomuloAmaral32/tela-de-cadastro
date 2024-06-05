var zero = document.getElementById("p0");
var primeiro = document.getElementById("p1");
var segundo = document.getElementById("p2");
var terceiro = document.getElementById("p3");
var quarto = document.getElementById("p4");
var quinto = document.getElementById("p5");
var sexto = document.getElementById("p6");
var campinput = document.getElementsByClassName("entrada");

function registro() {
    var todosPreenchidos = true;
    
    if (zero.value === "") {
        zero.style.border = "2px solid red";
        todosPreenchidos = false;
    } else {
        zero.style.border = "";
    }

    if (primeiro.value === "") {
        primeiro.style.border = "2px solid red";
        todosPreenchidos = false;
    } else {
        primeiro.style.border = "";
    }

    if (segundo.value === "") {
        segundo.style.border = "2px solid red";
        todosPreenchidos = false;
    } else {
        segundo.style.border = "";
    }

    if (terceiro.value === "") {
        terceiro.style.border = "2px solid red";
        todosPreenchidos = false;
    } else {
        terceiro.style.border = "";
    }

    if (quarto.value === "") {
        quarto.style.border = "2px solid red";
        todosPreenchidos = false;
    } else {
        quarto.style.border = "";
    }

    if (quinto.value === "") {
        quinto.style.border = "2px solid red";
        todosPreenchidos = false;
    } else {
        quinto.style.border = "";
    }

    if (sexto.value === "") {
        sexto.style.border = "2px solid red";
        todosPreenchidos = false;
    } else {
        sexto.style.border = "";
    }

    if (todosPreenchidos) {
        for (var i = 0; i < campinput.length; i++) {
            campinput[i].style.border = "";
            campinput[i].value = "";
        }
        zero.focus();
    }
}
