/*Acá va tu código*/
//crear una  variable para llamar los botones
let btnEncrypt = document.getElementById("btncode");
let btnDecrypt = document.getElementById("btndecode");

//crear la funcion click
btnEncrypt.addEventListener("click",() => {

//valor que necesito cuando ingrese el texto
let text = document.getElementById("textencrypted").value;

let number = document.getElementById("offset").value;

//combierto en mayusculas
text = text.toUpperCase();
number = parseInt(number);

// devuelva resultado
document.getElementById("final message").innerHTML=cipher.encode(text,number);
});

//crear la funcion click
btnDecrypt.addEventListener("click",() => {

    //valor que necesito cuando ingrese el texto
    let text = document.getElementById("textencrypted").value;
    
    let number = document.getElementById("offset").value;
    
    //combierto en mayusculas
    text = text.toUpperCase();
    number = parseInt(number);
    
    // devuelva resultado
    document.getElementById("final message").innerHTML = cipher.decode(text,number);
    });