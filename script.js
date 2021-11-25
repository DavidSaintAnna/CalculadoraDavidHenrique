let number1 = document.querySelector('#number1')
let number2 = document.querySelector('#number2')
let result = document.querySelector('span')

function soma() {
    result.innerHTML = parseInt(number1.value) + parseInt(number2.value)
}

function subtração() {
    result.innerHTML = parseInt(number1.value) - parseInt(number2.value)
}

function multiplicação() {
    result.innerHTML = parseInt(number1.value) * parseInt(number2.value)
}

function divisão() {
    result.innerHTML = parseInt(number1.value) / parseInt(number2.value)
}