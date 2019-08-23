window.cipher = {
  encode: (text,number) => {
   let finalmessage = "";
    for (let i = 0; i < text.length; i++){
      let letternumber = text.charCodeAt(i);
      if(letternumber >= 65 && letternumber <= 90){
      let newnumber = (letternumber - 65 + number) % 26 + 65;
      finalmessage += String.fromCharCode(newnumber);
    }
  } 
    return finalmessage;
  },
  decode: (text,number) => {
   let finalmessage = "";
   for (let i = 0; i < text.length; i++) {
    let letternumber = text.charCodeAt(i);
   if (letternumber >= 65 && letternumber <= 90){
    let newnumber = (letternumber - 90 - number) % 26 + 90;
    finalmessage += String.fromCharCode(newnumber);
   }
} 
return finalmessage;








  }
};
  

