const board = document.querySelector('#board')
const colors =['#d95656','#de9320','#7ebb45', '#14d9cf','#41aec7','#1424d9', '#7845c5','#c532da','#4d0641','#d21425']
const SQUARES_NUMBER = 500

for (let i = 0; i < SQUARES_NUMBER; i++){
    const square = document.createElement('div')
    square.classList.add('square')

    square.addEventListener('mouseover', ()=>      //наводим мышь  
    setColor(square))
    square.addEventListener('mouseleave', ()=>     //убираем мышь
    removeColor(square))

    board.append(square)
}

function setColor(element) {
    const color = getColorRandom()
    element.style.backgroundColor =color
    element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}

function removeColor(element) {
    element.style.backgroundColor = '#1d1d1d'
    element.style.boxShadow = `0 0 2px #000`
}

function getColorRandom() {
  const index = Math.floor( Math.random() * colors.length)
    return colors[index]
}