'use strict'

function BinarioADecimal(num) {
  // tu codigo aca
 /* if( num.constructor != String){
    return null;
  }
    
 var num =  num.replace(/[^01]/gi, '');

  return Number.parseInt(num, 2);*/
var res = 0;
var pos = 0;
for (var i = num.length-1; i >= 0; i--){
  res += num[i] * 2 ** pos;
  pos++; //
}
  return res;
}


function DecimalABinario(num) {
  // tu codigo aca
  /* let number = num;
  let bin = (number % 2).toString();
  for (; number > 1; ) {
      number = parseInt(number / 2);
      bin =  (number % 2) + (bin);
  } 
  return bin; */
   
   
   let resto = '';
  while (num !== 0) {
    resto = num % 2 + resto; 
    num = Math.floor(num / 2); //sss
  } 
  return resto;   
   
   /*
   ///////--------------------------------
   var nume = num.toString(2);
   return nume; */
}


module.exports = {
  BinarioADecimal,
  DecimalABinario,
}