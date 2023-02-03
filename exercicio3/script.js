// PARTE 1
/*
const a = 5 > 20 && 5 > 2
console.log("5 é maior que 20 e também é menor que 2", a)

const b = 5 === 5 || 5 === "5"
console.log("5 é igual a 5 ou é igual a “5”", b)
// como é uma operação "ou ||" true e false, imprime sempre true

const c = !20 > 50
console.log("negação de (vinte é maior que cinquenta)", c)

const d = !20 > 50 || 50 > 60
console.log(`negação de (vinte é maior que cinquenta 
OU cinquenta é maior que sessenta) ${d}`)
*/


// PARTE 2

const salarioFixo = 2000
const auxilioCreche = 45.50 * 2
const inss = 0.05
const janeiro = 5784.50
const fevereiro = 3418.41
const marco = 4124.10
const abril = 1874
const maio = 7000
const junho = 9450
const comissao10 = 0.10

//   1)Salario fixo mais o auxilio creche
const salarioECreche = salarioFixo + auxilioCreche
console.log("Salario fixo mais o auxilio creche", salarioECreche)

//   2)Comissão de janeiro
const comissaoJaneiro = janeiro * comissao10
console.log("Comissão recebida em Janeiro", comissaoJaneiro)

//   3)Valor descontado em Janeiro
const salarioJaneiro = salarioECreche + comissaoJaneiro
const inssJaneiro = salarioJaneiro * inss
console.log("INSS Janeiro", inssJaneiro)

//  4) Salario de todos os meses com acrescimo e desconto
// comissões dos meses
const comissaoFevereiro = fevereiro * comissao10
const comissaoMarco = marco * comissao10
const comissaoAbril = abril * comissao10
const comissaoMaio = maio * comissao10
const comissaoJunho = junho * comissao10

// Salario dos meses
const salarioFevereiro = salarioECreche + comissaoFevereiro
const salarioMarco = salarioECreche + comissaoMarco
const salarioAbril = salarioECreche + comissaoAbril
const salarioMaio = salarioECreche + comissaoMaio
const salarioJunho = salarioECreche + comissaoJunho

// inss dos meses
const inssFevereiro = salarioFevereiro * inss
const inssMarco = salarioMarco * inss
const inssAbril = salarioAbril * inss
const inssMaio = salarioMaio * inss
const inssJunho = salarioJunho * inss

// Salario todos os meses com acrescimo e desconto
console.log("Salário Líquido Janeiro", salarioJaneiro - inssJaneiro)
console.log("Salário Líquido Fevereiro", salarioFevereiro - inssFevereiro)
console.log("Salário Líquido Março", salarioMarco - inssMarco)
console.log("Salário Líquido Abril", salarioAbril - inssAbril)
console.log("Salário Líquido Maio", salarioMaio - inssMaio)
console.log("Salário Líquido Junho", salarioJunho - inssJunho)

// Média semestral do Salário
const mediaSalarioSemestre = (salarioJaneiro - inssJaneiro) + (salarioFevereiro - inssFevereiro) + (salarioMarco - inssMarco) + (salarioAbril - inssAbril) + (salarioMaio - inssMaio) + (salarioJunho - inssJunho)
console.log("Média Semestral Salário ", mediaSalarioSemestre / 6)