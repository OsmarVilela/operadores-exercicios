const numberOne = prompt("Insira um número")

const numberTwo = prompt("Insira outro número")

console.log(numberOne)
console.log(numberTwo)

console.log(`O Primeiro número é maior que o segundo? ${numberOne > numberTwo}

O primeiro numero é igual ao segundo? ${numberOne === numberTwo}

O primeiro numero é divisível pelo segundo? ${(numberOne % numberTwo) === 0}

O segundo numero é divisível pelo primeiro? ${(numberTwo % numberOne) === 0}
`)

// Quando o resultado é zero na 3ª e 4ª pergunta é divisivel