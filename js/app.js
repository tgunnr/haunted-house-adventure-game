// Imports

import {prompts} from './data.js'
import {imgArray} from './img.js'

// Cached element references

  const questionEl = document.querySelector('#question')
  const buttonA = document.querySelector('#btn1')
  const buttonB = document.querySelector('#btn2')
  const buttonC = document.querySelector('#btn3')
  const resetButton = document.querySelector('#reset')
  const img = document.querySelector('.main-image')
  
// Event listeners

  buttonA.addEventListener('click', handleClickButtonA)
  buttonB.addEventListener('click', handleClickButtonB)
  buttonC.addEventListener('click', handleClickButtonC)
  resetButton.addEventListener('click', handleClickReset)
  
// Variables

  let currPromptIdx
  let currPrompt 

// Functions
  
  function init() {
    currPromptIdx = 0
    currPrompt = prompts[currPromptIdx]
    render()
  }
  
  init()
  
  function render() {
    questionEl.textContent = currPrompt.question
    buttonA.textContent = currPrompt.options[0].text
    buttonB.textContent = currPrompt.options[1].text
    buttonC.textContent = currPrompt.options[2].text
    img.src = imgArray[currPromptIdx].src
  }
  
  function handleClickButtonA() {
    currPromptIdx = currPrompt.options[0].navigateToIdx
    currPrompt = prompts[currPromptIdx]
    render()
  }

  function handleClickButtonB() {
    currPromptIdx = currPrompt.options[1].navigateToIdx
    currPrompt = prompts[currPromptIdx]
    render()
  }

  function handleClickButtonC() {
    currPromptIdx = currPrompt.options[2].navigateToIdx
    currPrompt = prompts[currPromptIdx]
    render()
  }

  function handleClickReset() {
    init()
  }
