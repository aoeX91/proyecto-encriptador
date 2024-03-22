const xmatriz=[
    ["e", "enter"],
    ["i", "imes"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufat"]
]
const txtUsuario=document.getElementById(txtIn).value;


function encri(newTxt){
    for(i=0;i<xmatriz.length;i++){
        newTxt=newTxt.replaceAll(
            xmatriz[i][0],
            xmatriz[i][1]
        )
    }
    return newTxt
}
function dencri(newTxt){
    for(i=0;i<xmatriz.length;i++){
        newTxt=newTxt.replaceAll(
            xmatriz[i][1],
            xmatriz[i][0]
        )
    }
    return newTxt
}