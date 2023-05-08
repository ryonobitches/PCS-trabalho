function start() {
    document.getElementById("div0").style.display = "none";
    document.getElementById("btn0").style.display = "none";

    document.getElementById("div1").style.display = "flex";
    document.getElementById("div1").style.justifyContent = "center";
    document.getElementById("div1").style.alignItems = "center";
}

function menuquiz() {
    if (document.getElementById("cre-o").style.display = "block"){
        document.getElementById("cre-o").style.display = "none";
    }
    document.getElementById("mqo").style.display = "block";
}

function Xmenu() {
    document.getElementById("mqo").style.display = "none";
}

function Xcreditosbtn() {
    document.getElementById("cre-o").style.display = "none";
}

function Voltcreditosbtn() {
    document.getElementById("cre-o").style.display = "none";
    document.getElementById("mqo").style.display = "block";
}


function cred() {
    document.getElementById("cre-o").style.display = "block";
    document.getElementById("mqo").style.display = "none";
}

var r1, r2, r3, r4, r5;

function a1() {
    r1 = ("Resposta da numero 1 = a | ")
    document.getElementById("div1").style.display = "none";
    document.getElementById("div2").style.display = "flex";
    console.log("Resposta 1 = a")
}

function b1() {
    r1 = ("Resposta da numero 1 = b | ")
    document.getElementById("div1").style.display = "none";
    document.getElementById("div2").style.display = "flex";
    console.log("Resposta 1 = b")
}

function c1() {
    r1 = ("Resposta da numero 1 = c | ")
    document.getElementById("div1").style.display = "none";
    document.getElementById("div2").style.display = "flex";
    console.log("Resposta 1 = c")
}

function d1() {
    r1 = ("Resposta da numero 1 = d | ")
    document.getElementById("div1").style.display = "none";
    document.getElementById("div2").style.display = "flex";
    console.log("Resposta 1 = d")
}

function e1() {
    document.getElementById("btr1er").style.display = "flex"
    document.getElementById("enviarE").style.display = "block"
}

function ERL1() {
    var value1 = document.getElementById("btr1er").value;

    if (value1 == "") {
        alert("a caixa de resposta não pode estar vazia!")
        return
    }else {
        r1 =("Resposta da numero 1 'e' = ")+ document.getElementById("btr1er").value+(" | ");
        document.getElementById("div1").style.display = "none";
        document.getElementById("div2").style.display = "flex";
        console.log("Resposta 1 'e' = "+ r1)}
}



// Segunda seção Pergunta 2


function a2() {
    r2 = ("Resposta da numero 2 = a | ")
    document.getElementById("div2").style.display = "none";
    document.getElementById("div3").style.display = "flex";
    console.log("Resposta 2 = a")
}

function b2() {
    r2 = ("Resposta da numero 2 = b | ")
    document.getElementById("div2").style.display = "none";
    document.getElementById("div3").style.display = "flex";
    console.log("Resposta 2 = b")
}

function c2() {
    r2 = ("Resposta da numero 2 = c | ")
    document.getElementById("div2").style.display = "none";
    document.getElementById("div3").style.display = "flex";
    console.log("Resposta 2 = c")
}

function d2() {
    r2 = ("Resposta da numero 2 = d | ")
    document.getElementById("div2").style.display = "none";
    document.getElementById("div3").style.display = "flex";
    console.log("Resposta 2 = d")
}

function e2() {
    document.getElementById("btr2er").style.display = "flex"
    document.getElementById("enviarE2").style.display = "block"
}

function ERL2() {
    var value2 = document.getElementById("btr2er").value;

        if (value2 == "") {
    alert("a caixa de resposta não pode estar vazia!")
    return
    }else {
    r2 =("Resposta da numero 2 'e' = ")+ document.getElementById("btr2er").value+(" | ");
    document.getElementById("div2").style.display = "none";
    document.getElementById("div3").style.display = "flex";
    console.log("Resposta 2 'e' = "+ r2)}
}

// Segunda seção Pergunta 3


function a3() {
    r3 = ("Resposta da numero 3 = a | ")
    document.getElementById("div3").style.display = "none";
    document.getElementById("div4").style.display = "flex";
    console.log("Resposta 3 = a")
}

function b3() {
    r3 = ("Resposta da numero 3 = b | ")
    document.getElementById("div3").style.display = "none";
    document.getElementById("div4").style.display = "flex";
    console.log("Resposta 3 = b")
}

function c3() {
    r3 = ("Resposta da numero 3 = c | ")
    document.getElementById("div3").style.display = "none";
    document.getElementById("div4").style.display = "flex";
    console.log("Resposta 3 = c")
}

function d3() {
    r3 = ("Resposta da numero 3 = d | ")
    document.getElementById("div3").style.display = "none";
    document.getElementById("div4").style.display = "flex";
    console.log("Resposta 3 = d")
}

function e3() {
    document.getElementById("btr3er").style.display = "flex"
    document.getElementById("enviarE3").style.display = "block"
}

function ERL3() {
    var value3 = document.getElementById("btr3er").value;

    if (value3 == "") {
        alert("a caixa de resposta não pode estar vazia!")
        return
    }else {
        r3 =("Resposta da numero 3 'e' = ")+ document.getElementById("btr3er").value+(" | ");
        document.getElementById("div3").style.display = "none";
        document.getElementById("div4").style.display = "flex";
        console.log("Resposta 3 'e' = "+ r3)}
}


// Segunda seção Pergunta 4


function a4() {
    r4 = ("Resposta da numero 4 = a | ")
    document.getElementById("div4").style.display = "none";
    document.getElementById("div5").style.display = "flex";
    console.log("Resposta 4 = a")
}

function b4() {
    r4 = ("Resposta da numero 4 = b | ")
    document.getElementById("div4").style.display = "none";
    document.getElementById("div5").style.display = "flex";
    console.log("Resposta 4 = b")
}

function c4() {
    r4 = ("Resposta da numero 4 = c | ")
    document.getElementById("div4").style.display = "none";
    document.getElementById("div5").style.display = "flex";
    console.log("Resposta 4 = c")
}

function d4() {
    r4 = ("Resposta da numero 4 = d  | ")
    document.getElementById("div4").style.display = "none";
    document.getElementById("div5").style.display = "flex";
    console.log("Resposta 4 = d")
}

function e4() {
    document.getElementById("btr4er").style.display = "flex"
    document.getElementById("enviarE4").style.display = "block"
}

function ERL4() {
    var value4 = document.getElementById("btr4er").value;

    if (value4 == "") {
        alert("a caixa de resposta não pode estar vazia!")
        return
    }else {
        r4 =("Resposta da numero 4 'e' = ")+ document.getElementById("btr4er").value+(" | ");
        document.getElementById("div4").style.display = "none";
        document.getElementById("div5").style.display = "flex";
        console.log("Resposta 4 'e' = "+ r4)}
}


// Segunda seção Pergunta 5



function e5() {
    document.getElementById("btr5er").style.display = "flex"
    document.getElementById("enviarE5").style.display = "block"
}

function ERL5() {
    var value5 = document.getElementById("btr5er").value;

    if (value5 == "") {
        alert("a caixa de resposta não pode estar vazia!")
        return
    }else {
        r5 =("Resposta da numero 5 'e' = ")+ document.getElementById("btr5er").value+(" | ");
        document.getElementById("div5").style.display = "none";
        document.getElementById("div6").style.display = "flex";
        console.log("Resposta 5 'e' = "+ r5)}
    document.getElementById("mensagem").innerHTML = r1+r2+r3+r4+r5;
}
