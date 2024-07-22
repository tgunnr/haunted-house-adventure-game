console.log('oh no')

// Images

var mainImage = document.getElementById

var imgArray = new Array()

imgArray[0] = new Image()
imgArray[0].src = '../assets/img/hauntedHouse.png'

imgArray[1] = new Image()
imgArray[1].src = '../assets/img/firstEscape.png'

// Button/ story choices

const prompts = [
    {
      id: 0,
      question: 'Are you ready to enter?',
      options: [
        {text: 'Enter', navigateToIdx: 1},
        {text: 'Leave', navigateToIdx: 2},
        {text: 'Reset', navigateToIdx: 0}
      ]
    },
    {
      id: 1,
      question: 'You chose left',
      options: [
        {text: 'Opt A', navigateToIdx: 1},
        {text: 'Opt B', navigateToIdx: 2},
        {text: 'Opt C', navigateToIdx: 3}
      ]
    },
    {
      id: 2,
      question: 'You chose right',
      options: [
        {text: 'Opt A', navigateToIdx: 1},
        {text: 'Opt B', navigateToIdx: 2},
        {text: 'Opt C', navigateToIdx: 3}
      ]
    },
    {
      id: 3,
      question: 'You chose forward',
      options: [
        {text: 'Opt A', navigateToIdx: 1},
        {text: 'Opt B', navigateToIdx: 2},
        {text: 'Opt C', navigateToIdx: 3}
      ]
    },
  ]
  
  const questionEl = document.querySelector('#question')
  const buttonA = document.querySelector('#btn1')
  const buttonB = document.querySelector('#btn2')
  const buttonC = document.querySelector('#btn3')
  
  buttonA.addEventListener('click', handleClickButtonA)
  
  let currPromptIdx
  let currPrompt 
  
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
  }
  
  function handleClickButtonA() {
    currPromptIdx = currPrompt.options[0].navigateToIdx
    currPrompt = prompts[currPromptIdx]
    render()
  }