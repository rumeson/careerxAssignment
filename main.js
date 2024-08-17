// 1. Check for Odd and Even input variables
const oddEvenButton = document.getElementById('checkOddEven')
const inputOddEven = document.getElementById('checkNumber')
const oddEvenOutput = document.getElementById('displayOddEven')

// 2. Add items to list variables
const getItem = document.getElementById('getItem')
const addButton = document.getElementById('addButton')
const list = document.getElementById('ul')
const alarm = document.getElementById('alarm')

// 3. Change background color
const failButton = document.getElementById('failButton')
const successButton = document.getElementById('successButton')
const textBackground = document.getElementById('backgroundChange')

// 4. fetch and display data
const fetchData = document.getElementById('fetchData')
const displayData = document.getElementById('displayData')

// 5. Area of rectangle variables
const solve = document.getElementById('solve')
const base = document.getElementById('base')
const height = document.getElementById('height')
const dispAns = document.getElementById('dispAns')

// 1. Check for Odd and Even function
const oddEven = () => {
  const inputNum = inputOddEven.value
  const num = Number(inputNum)
  if (inputNum.length > 0 && num % 2 > 0) {
    oddEvenOutput.textContent = `The number: ${inputNum} is an ODD number`
    inputOddEven.value = ''
  } else if (inputNum.length > 0 && num % 2 == 0) {
    oddEvenOutput.textContent = `The number: ${inputNum} is an EVEN number`
    inputOddEven.value = ''
  } else {
    oddEvenOutput.textContent = `Please input a number in the textbox`
  }
}

// 2. Add item to list function
const addItem = () => {
  const itemToAdd = getItem.value
  if (itemToAdd.length > 0) {
    list.innerHTML += `<li>${itemToAdd}</li>`
    getItem.value = ''
    alarm.textContent = ''
  } else {
    alarm.textContent = 'Please type in an item to add to list'
  }
}

// 3. Change background color function
const redBackground = () => {
  textBackground.style.backgroundColor = '#6d0505'
  textBackground.style.color = 'white'
}
const greenBackground = () => {
  textBackground.style.backgroundColor = '#2ea44f'
  textBackground.style.color = 'white'
}

// 4. Display data function
const displayDataFunction = async () => {
  const randomNum = Math.floor(Math.random() * 100) + 1
  const idSpan = document.getElementById('idSpan')
  const nameSpan = document.getElementById('nameSpan')
  const emailSpan = document.getElementById('emailSpan')
  const bodySpan = document.getElementById('bodySpan')

  const data = await fetch(
    `https://jsonplaceholder.typicode.com/comments/${randomNum}`
  )
    .then((response) => response.json())
    .then((json) => {
      idSpan.textContent = `ID: ${json.id}`
      nameSpan.textContent = `NAME: ${json.name}`
      emailSpan.textContent = `EMAIL: ${json.email}`
      bodySpan.textContent = `BODY: ${json.body}`
    })
}

// 5. Solve area of rectangle function
const solveFunction = () => {
  const baseNum = base.value
  const heightNum = height.value
  if (baseNum.length > 0 && heightNum.length > 0) {
    const ans = Number(baseNum) * Number(heightNum)
    dispAns.innerHTML = `The area of your Rectangle is: ${ans}cm&sup2`
  } else {
    dispAns.innerHTML = `Input values of Base and Height in the textbox`
  }
}

// 1. check for Odd and Even event listener
oddEvenButton.addEventListener('click', oddEven)
// 2. add items to list event listener
addButton.addEventListener('click', addItem)
// 3. Change backgroung event listeners
failButton.addEventListener('click', redBackground)
successButton.addEventListener('click', greenBackground)
// 4. fetch data event listener
fetchData.addEventListener('click', displayDataFunction)
// 5. Solve area of rectangle function
solve.addEventListener('click', solveFunction)
