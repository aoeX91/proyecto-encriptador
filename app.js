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
    document.getElementById("txtout").innerHTML=nuevoTexto
    document.getElementById("cuerpo10").style.display = "none";
    document.getElementById("cuerpo20").style.display = "block";
}
function mostrarDencri(){
    let txtUsuario=document.getElementById("txtin").value;
    nuevoTexto=dencri(txtUsuario)
    document.getElementById("txtout").innerHTML=nuevoTexto
    document.getElementById("cuerpo10").style.display = "none";
    document.getElementById("cuerpo20").style.display = "block";
}
function copiarResu(){
    let resultado=document.getElementById("txtout")
    navigator.clipboard.writeText(resultado.value)
    
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