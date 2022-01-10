module.exports = function toReadable (number) {  
  
  let strNum = number.toString();
  let readNum = {
      '0':'',
      '1':'one',
      '2':'two',
      '3':'three',
      '4':'four',
      '5':'five',
      '6':'six',
      '7':'seven',
      '8':'eight',
      '9':'nine',
      '10':'ten',
      '11':'eleven',
      '12':'twelve',
      '13':'thirteen',
      '14':'fourteen',
      '15':'fifteen',
      '16':'sixteen',
      '17':'seventeen',
      '18':'eighteen',
      '19':'nineteen',
      '20':'twenty',
      '30':'thirty',
      '40':'forty',
      '50':'fifty',
      '60':'sixty',
      '70':'seventy',
      '80':'eighty',
      '90':'ninety'      
  };

  if(strNum.length === 1 && strNum.charAt(0) === '0'){
    return 'zero';
  } else if (strNum.length === 1){
    return readNum[strNum.charAt(0)];
  };

  if(strNum.length === 2 && strNum.charAt(0) === '1'){
    return readNum[strNum];
  } else if(strNum.length === 2 && strNum.charAt(0) !== '1'){
    let dec = strNum.charAt(0) + "0";
    return `${readNum[dec]} ${readNum[strNum.charAt(1)]}`.trim();
  };

  if(strNum.length === 3 && strNum.charAt(1) === '1'){
    return `${readNum[strNum.charAt(0)]} hundred ${readNum[strNum.slice(1)]}`;
  } else if(strNum.length === 3 && strNum.charAt(1) === '0' ){
    let dec = strNum.charAt(1) + "0";
    return `${readNum[strNum.charAt(0)]} hundred ${readNum[strNum.charAt(2)]}`.trim();
  } else if(strNum.length === 3 && strNum.charAt(1) !== '1'){
    let dec = strNum.charAt(1) + "0";
    return `${readNum[strNum.charAt(0)]} hundred ${readNum[dec]} ${readNum[strNum.charAt(2)]}`.trim();
};
};
