console.log('oh no')

// Image Array

// var mainImage = document.getElementById

// var imgArray = new Array()

// imgArray[0] = new Image()
// imgArray[0].src = '../assets/img/hauntedHouse.png'

// imgArray[1] = new Image()
// imgArray[1].src = '../assets/img/enterMansion.png'

// imgArray[2] = new Image()
// imgArray[2].src = '../assets/img/firstEscape.png'

// imgArray[3] = new Image()
// imgArray[3].src = '../assets/img/firstCarEscape.png'

// Button/ story choices

const prompts = [
    {
      id: 0,
      question: 'Are you ready to enter?',
      options: [
        {text: 'Enter', navigateToIdx: 1},
        {text: 'Leave', navigateToIdx: 2},
        {text: 'Run Away', navigateToIdx: 3}
      ]
    },
    {
      id: 1,
      question: "You have entered the mansion to find your missing partner. Where will you go first?",
      options: [
        {text: 'Stairs', navigateToIdx: 4},
        {text: 'Library', navigateToIdx: 5},
        {text: 'Kitchen', navigateToIdx: 6}
      ]
    },
    {
      id: 2,
      question: "You have chosen the logical option and decided it was not worth the risk of what may lie inside, but in your haste as you were leaving the mansion, you did not notice that car coming for you. What a shame.",
      options: [
        {text: 'Try', navigateToIdx: 0},
        {text: 'Again', navigateToIdx: 0},
        {text: '?', navigateToIdx: 0}
      ]
    },
    {
      id: 3,
      question: 'Upon seeing the monstrosity that is the mansion, and the twisted tree that rose up from the ground, you decided to bolt and get away from this place as soon as possible. Quickly you got into your vehicle and slammed on the gas, but in such haste you ended up running over a stranger that also decided to leave the mansion. Without a doubt your insurance premiums are going up. What a shame.',
      options: [
        {text: 'Try', navigateToIdx: 0},
        {text: 'Again', navigateToIdx: 0},
        {text: '?', navigateToIdx: 0}
      ]
    },
  ]
  
  const questionEl = document.querySelector('#question')
  const buttonA = document.querySelector('#btn1')
  const buttonB = document.querySelector('#btn2')
  const buttonC = document.querySelector('#btn3')
  
  buttonA.addEventListener('click', handleClickButtonA)
  buttonB.addEventListener('click', handleClickButtonB)
  buttonC.addEventListener('click', handleClickButtonC)
  
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