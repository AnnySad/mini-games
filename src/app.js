const board = document.querySelector('#board')
const colors =['#d95656','#de9320','#7ebb45', '#14d9cf','#41aec7','#1424d9', '#7845c5','#c532da','#4d0641','#d21425']
const SQUARES_NUMBER = 500

for (let i = 0; i < SQUARES_NUMBER; i++){
    const square = document.createElement('div')
    square.classList.add('square')

    square.addEventListener('mouseover', setColor)//наводим мышь
    square.addEventListener('mouseleave', removeColor)    //убираем мышь


    board.append(square)
}

function setColor(event) {
    const element = event.target
    const color = getColorRandom()
    element.style.backgroundColor =color
    element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}

function removeColor(event) {
    const element = event.target
    element.style.backgroundColor = '#1d1d1d'
    element.style.boxShadow = `0 0 2px #000`
}

function getColorRandom() {
    return colors[Math.floor( Math.random() * colors.length)]
}