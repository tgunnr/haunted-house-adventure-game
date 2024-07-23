console.log('oh no')

// Image Array

var mainImage = document.getElementById

var imgArray = new Array()

imgArray[0] = new Image()
imgArray[0].src = '../assets/img/hauntedHouse.png'

imgArray[1] = new Image()
imgArray[1].src = '../assets/img/enterMansion.png'

imgArray[2] = new Image()
imgArray[2].src = '../assets/img/firstEscape.png'

imgArray[3] = new Image()
imgArray[3].src = '../assets/img/firstCarEscape.png'

imgArray[4] = new Image()
imgArray[4].src = '../assets/img/stairs.png'

imgArray[5] = new Image()
imgArray[5].src = '../assets/img/library.png'

imgArray[6] = new Image()
imgArray[6].src = '../assets/img/kitchen.png'

// Stairs pathway img assets

imgArray[7] = new Image()
imgArray[7].src = '../assets/img/masterBedroom.png'

imgArray[8] = new Image()
imgArray[8].src = '../assets/img/guestRoom.png'

imgArray[9] = new Image()
imgArray[9].src = '../assets/img/abyss.png'

// Stairs -> Bathroom img assets

imgArray[10] = new Image()
imgArray[10].src = '../assets/img/bathroom.png'

imgArray[11] = new Image()
imgArray[11].src = '../assets/img/bathtub.png'

imgArray[12] = new Image()
imgArray[12].src = '../assets/img/bathtubCreature.png'

imgArray[13] = new Image()
imgArray[13].src = '../assets/img/bathtubHand.png'

// Stairs -> Balcony img asset

imgArray[14] = new Image()
imgArray[14].src = '../assets/img/balcony.png'

// Stairs -> Bat img asset

imgArray[15] = new Image()
imgArray[15].src = '../assets/img/batSwirl.png'

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
    {
        id: 4,
        question: 'The stairs were old and decrepit. Small wonder how they have yet to collapse. You ponder as to which room you should enter first.',
        options: [
          {text: 'Master Bedroom', navigateToIdx: 7},
          {text: 'Guest Room', navigateToIdx: 8},
          {text: 'End of hallway', navigateToIdx: 9}
        ]
    },
    {
        id: 5,
        question: 'As you enter the library, you are filled with a sense of bewilderment over its vast collection. What will you do while you are here?',
        options: [
          {text: 'Search for a secret passageway', navigateToIdx: 0},
          {text: 'Investigate the bookshelves', navigateToIdx: 0},
          {text: 'Investigate the fireplace', navigateToIdx: 0}
        ]
    },
    {
        id: 6,
        question: 'The kitchen is somehow both smaller and larger than you were expecting. What is even more surprising is the availability of fresh food. Now who baked the pie on the counter?',
        options: [
          {text: 'Eat the pie', navigateToIdx: 0},
          {text: 'Investigate the pantry', navigateToIdx: 0},
          {text: 'Open the fridge', navigateToIdx: 0}
        ]
    },

    // Stairs ending pathway

    {
        id: 7,
        question: 'At one point the master bedroom was a sight to behold, unfortunately that time has long since passed. What secrets lie waiting for you?',
        options: [
          {text: 'Enter the bathroom', navigateToIdx: 10},
          {text: 'Pickup the diary on the bed', navigateToIdx: 0},
          {text: 'Open the balcony', navigateToIdx: 14}
        ]
    },
    {
        id: 8,
        question: "For being a guest room, it is larger than most small apartments, yet embarrassingly cleaner than your place. Bats swirl around the room, disturbed by your presence, and you swear you can hear whispers from next door. Isn’t this place supposed to be abandoned?",
        options: [
          {text: 'Shoo the bats away', navigateToIdx: 15},
          {text: 'Enter the room next door', navigateToIdx: 0},
          {text: 'Take a nap', navigateToIdx: 0}
        ]
      },
      {
        id: 9,
        question: 'You open the door at the end of the hallway only to find a massive void on the other side. Try as you may, you cannot close the door and escape the forces pulling you in.',
        options: [
          {text: 'Try', navigateToIdx: 0},
          {text: 'Again', navigateToIdx: 0},
          {text: '?', navigateToIdx: 0}
        ]
      },

      // Stairs -> Bathroom pathway

      {
        id: 10,
        question: 'You enter the dilapidated bathroom. Somehow it’s not as bad as some of the restrooms at the clubs you have been to.',
        options: [
          {text: 'Search the medicine cabinet', navigateToIdx: 0},
          {text: 'Search the bathtub', navigateToIdx: 11},
          {text: 'Go back', navigateToIdx: 7}
        ]
      },
      {
        id: 11,
        question: 'Despite the surroundings, the bathtub not only appears clean, but it is filled with fresh hot water and bubbles. A bath does sound nice right about now.',
        options: [
          {text: 'Drain the tub', navigateToIdx: 12},
          {text: 'Test the water', navigateToIdx: 13},
          {text: 'Go back', navigateToIdx: 10}
        ]
      },
      {
        id: 12,
        question: 'If video games have taught you anything, there should be a key item if you drain the tub. Unfortunately there is a creature made almost entirely of tentacles residing in the water. Of which this fact was discovered too late and the creature immediately latches on to you. Everything goes black, never to awake again.',
        options: [
          {text: 'Try', navigateToIdx: 0},
          {text: 'Again', navigateToIdx: 0},
          {text: '?', navigateToIdx: 0}
        ]
      },
      {
        id: 13,
        question: 'You find it odd that the bathtub is full of fresh hot water. You decide to test the water and dip your fingers into the water, but as soon as your fingers break the water, a hand grabs you and pulls you in. Unable to hold your breath for long, everything goes black.',
        options: [
          {text: 'Try', navigateToIdx: 0},
          {text: 'Again', navigateToIdx: 0},
          {text: '?', navigateToIdx: 0}
        ]
      },

    //   Stairs -> Balcony end

      {
        id: 14,
        question: 'You enter the balcony and out nowhere appears a giant bat. There is no escape. It grabs you and flies off to its den.',
        options: [
          {text: 'Try', navigateToIdx: 0},
          {text: 'Again', navigateToIdx: 0},
          {text: '?', navigateToIdx: 0}
        ]
      },

    //   Stairs -> Bat end
    {
        id: 15,
        question: "You decide to shoo the bats away because they keep getting in the way of your investigation. However the bats are not pleased at being disturbed. Out of pure spite, the bats begin to swirl around you and consume everything in sight. They don’t even leave bones behind when they are done.",
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
  const resetButton = document.querySelector('#reset')
  
  buttonA.addEventListener('click', handleClickButtonA)
  buttonB.addEventListener('click', handleClickButtonB)
  buttonC.addEventListener('click', handleClickButtonC)
  resetButton.addEventListener('click', handleClickReset)

  
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

  function handleClickReset() {
    init()
  }
