function clicou(){
    //alert('Obrigado por clicar !');
    document.getElementById('agradecimento').innerHTML = "<b>Obrigado por clicar</b>";
    //console.log(document.getElementById('agradecimento'))
}
function redirecionar(){
    window.open("https://www.google.com.br");
    //window.location.href="https://www.google.com.br";
}

function trocar(elemento){
    //document.getElementById("mousemove").innerHTML = "Ai não Oni-chan >///<"
    //alert("trocar texto")
    elemento.innerHTML = 'Ai não Oni-chan >///<';
}

function voltar(elemento){
    //document.getElementById("mousemove").innerHTML = "Não passe o mouse aqui !"
    elemento.innerHTML = 'Não passe o mouse aqui !';
}
function loading(){
    alert("Página carregada !");
}
function funcaoChange(elemento){
    console.log(elemento.value)
}
/*function soma(n1,n2){
    return n1+n2;
}

function valida_Idade(idade){
    var validar;
    if (idade >= 18){
        validar = true;
    } 
    else{
        validar = false;
    }
    return validar
}


//var idade = prompt('Qual sua idade ?');
//console.log(valida_Idade(idade));*/