module.exports = function toReadable (number) {
    let ones = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19],
    strOnes = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen','sixteen', 'seventeen', 'eighteen', 'nineteen'],
    tens = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

 if (number <= 19) {
    return(strOnes[number]); 
 }
 else if (number > 19 && number < 100){
    if (number % 10 == 0) {
      return(tens[number/10 - 2]);
    } else {
      return(tens[Math.floor(number/10)-2] + ' ' + strOnes[number%10]);
    }
}
else if (number >= 100 && number < 1000) {
    if (number % 100 == 0) { 
      return(strOnes[number/100] + ' hundred');
    } else if (number % 100 < 20) { 
       return(strOnes[Math.floor(number/100)] + " hundred " + strOnes[number% 100]) ;
    } else if (number % 10 == 0) { 
     return(strOnes[Math.floor(number/100)] + " hundred " + tens[number%100/10-2 ]);
    } else {//526
     return(strOnes[Math.floor(number/100)] + ' hundred ' + tens[Math.floor(number%100/10-2)] + ' ' + strOnes[number%10]);//заменить на return
 }
}
}