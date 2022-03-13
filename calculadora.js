const prompt = require("prompt-sync")({ sigint: true})

let sumar = (numero1,numero2)=>{
    return numero1 + numero2
}
let a= parseInt(prompt("ingreso el numero 1 : "))
let b= parseInt(prompt("ingreso el numero 2 : "))
let c= parseInt(prompt("ingreso el numero 3 : "))


console.log("la suma es " + sumar(a,b));

let restar =(numero1,numero2)=>{
    return numero1 - numero2
}
console.log("la resta es "+restar(a,b));

let multiplicar =(numero1,numero2)=>{
    return numero1 * numero2
}

console.log("la multiplicacion es " + multiplicar(a, b));

let dividir = (numero1,numero2)=>{
    return numero1/numero2
}

console.log("la division es "+ dividir(a,b));

let cuadrado = (numero)=>{
    return multiplicar(numero,numero)
}
console.log("El cuadro de un numero es : "+cuadrado(a));

let promedioDeTresNumeros = (numero1, numero2, numero3)=>{
    let resultadoSuma = sumar(numero1,numero2)
    resultadoSuma=sumar(resultadoSuma,numero3)
    let resultadoDivision = dividir(resultadoSuma,3)
    return resultadoDivision
}

console.log("El promedio de los numeros es :");
