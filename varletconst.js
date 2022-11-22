// teste hackerrank

const numeroAte21 = (maxDigit) => {
  const listNumbers = [];
  let numeros = [];
  for (let i = 1000; i < 9999; i++) {
    let num = i.toString();
    for (let k = 0; k < 4; k++) {
      let slice = num.slice(k, k + 1);
      let toNumber = parseInt(slice);
      if (toNumber <= maxDigit) {
        numeros.push(toNumber);
      }
    }
    let soma = 0;
    for (let j = 0; j < numeros.length; j++) {
      soma += numeros[j];
    }
    if (soma == 21) {
      listNumbers.push(i);
    }
    soma = 0;
    numeros = [];
  }
  return listNumbers;
};

console.log(numeroAte21(6));
