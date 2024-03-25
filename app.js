const xmatriz=[
    ["e", "enter"],
    ["i", "imes"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufat"]
]

function mostrarEncri(){
    let  txtUsuario=document.getElementById("txtin").value;
    nuevoTexto=encri(txtUsuario)
    if (txtUsuario==nuevoTexto){
        let txtarea3=document.getElementById("txtin");
        txtarea3.value="";
        document.getElementById("cuerpo10").style.display = "block";
        document.getElementById("cuerpo20").style.display = "none";
    } else{
        let txtarea3=document.getElementById("txtin");
        txtarea3.value="";
        document.getElementById("txtout").innerHTML=nuevoTexto
        document.getElementById("cuerpo10").style.display = "none";
        document.getElementById("cuerpo20").style.display = "block";
    }
    
}
function mostrarDencri(){
    let txtUsuario=document.getElementById("txtin").value;
    nuevoTexto=dencri(txtUsuario)
    if (txtUsuario==nuevoTexto){
        let txtarea3=document.getElementById("txtin");
        txtarea3.value="";
        document.getElementById("cuerpo10").style.display = "block";
        document.getElementById("cuerpo20").style.display = "none";
    } else{
        let txtarea3=document.getElementById("txtin");
        txtarea3.value="";
        document.getElementById("txtout").innerHTML=nuevoTexto
        document.getElementById("cuerpo10").style.display = "none";
        document.getElementById("cuerpo20").style.display = "block";
    }
}
function copiarResu(){
    let txtarea3=document.getElementById("txtin");
        txtarea3.value="";
    let resultado=document.getElementById("txtout")
    navigator.clipboard.writeText(resultado.value)
    document.getElementById('kisu').innerHTML='¡Copiado!';
    setTimeout(() => {
        document.getElementById('kisu').innerHTML='Copiar'
    }, 2000);
}

function todoMinuscula(x){
    x.value=x.value.toLowerCase()
    x.value=x.value.normalize('NFD').replace(/[\u0300-\u036f]/g, "")
    x.value=x.value.replace(/[^\w\s]/gi, ' ')
}

function encri(paraEncriptar){
    for(i=0;i<xmatriz.length;i++){
        paraEncriptar=paraEncriptar.replaceAll(
            xmatriz[i][0],
            xmatriz[i][1]
        )
    }
    return paraEncriptar
}

function dencri(paraDesencriptar){
    for(i=0;i<xmatriz.length;i++){
        paraDesencriptar=paraDesencriptar.replaceAll(
            xmatriz[i][1],
            xmatriz[i][0]
        )
    }
    return paraDesencriptar
}