const cards = {
    0: {
        src: '1-f.svg',
        type: 'flouss',
        num: 1
    },
    1: {
        src: '1-j.svg',
        type: 'jaben', 
        num: 1
    },
    2: {
        src: '1-s.svg',
        type: 'sayef',
        num: 1
    },
    3: {
        src: '1-z.svg',
        type: 'zarwat', 
        num: 1
    },
    4: {
        src: '2-f.svg',
        type: 'flouss', 
        num: 2 
    },
    5: {
        src: '2-j.svg',
        type: 'jaben', 
        num: 2 
    },
    6: {
        src: '2-s.svg',
        type: 'sayef', 
        num: 2 
    },
    7: {
        src: '2-z.svg',
        type: 'zarwat', 
        num: 2 
    },
    8: {
        src: '3-f.svg',
        type: 'flouss', 
        num: 3
    },
    9: {
        src: '3-j.svg',
        type: 'jaben', 
        num: 3 
    },
    10: {
        src: '3-s.svg',
        type: 'sayef', 
        num: 3
    },
    11: {
        src: '3-z.svg',
        type: 'zarwat', 
        num: 3
    },
    12: {
        src: '4-f.svg',
        type: 'flouss', 
        num: 4
    },
    13: {
        src: '4-j.svg',
        type: 'jaben', 
        num: 4
    },
    14: {
        src: '4-s.svg',
        type: 'sayef', 
        num: 4
    },
    15: {
        src: '4-z.svg',
        type: 'zarwat', 
        num: 4
    },
    16: {
        src: '5-f.svg',
        type: 'flouss', 
        num: 5
    },
    17: {
        src: '5-j.svg',
        type: 'jaben', 
        num: 5
    },
    18: {
        src: '5-s.svg',
        type: 'sayef', 
        num: 5
    },
    19: {
        src: '5-z.svg',
        type: 'zarwat', 
        num: 5
    },
    20: {
        src: '6-f.svg',
        type: 'flouss', 
        num: 6
    },
    21: {
        src: '6-j.svg',
        type: 'jaben', 
        num: 6
    },
    22: {
        src: '6-s.svg',
        type: 'sayef', 
        num: 6
    },
    23: {
        src: '6-z.svg',
        type: 'zarwat', 
        num: 6
    },
    24: {
        src: '7-f.svg',
        type: 'flouss', 
        num: 7
    },
    25: {
        src: '7-j.svg',
        type: 'jaben', 
        num: 7
    },
    26: {
        src: '7-s.svg',
        type: 'sayef', 
        num: 7
    },
    27: {
        src: '7-z.svg',
        type: 'zarwat', 
        num: 7
    },
    28: {
        src: '10-f.svg',
        type: 'flouss', 
        num: 10
    },
    29: {
        src: '10-j.svg',
        type: 'jaben', 
        num: 10
    },
    30: {
        src: '10-s.svg',
        type: 'sayef', 
        num: 10
    },
    31: {
        src: '10-z.svg',
        type: 'zarwat', 
        num: 10
    },
    32: {
        src: '11-f.svg',
        type: 'flouss', 
        num: 11
    },
    33: {
        src: '11-j.svg',
        type: 'jaben', 
        num: 11
    },
    34: {
        src: '11-s.svg',
        type: 'sayef',
        num: 11
    },
    35: {
        src: '12-f.svg',
        type: 'flouss', 
        num: 12
    },
    36: {
        src: '12-j.svg',
        type: 'jaben', 
        num: 12
    },
    37: {
        src: '12-s.svg',
        type: 'sayef',
        num: 12
    },
    38: {
        src: '12-z.svg',
        type: 'zarwat', 
        num: 12
    },
};
const startInput = document.getElementById("start-input")
const startDescription = document.getElementById("start-desc")
const startBtn = document.getElementById("start-btn")
const platrform = document.getElementById("platform")
const robotBox = document.getElementById("robot-box")
const playerBox = document.getElementById("player-box")
const asideCardHTML = document.getElementById("taking-card")
var asideCard = [];
var playerCardsHTML = document.getElementsByClassName("p-card-container")
var numberOfCards = 4;
var cardsAvailable = []
var robotCards = []
var playerCards = []
var randomCard = newDiv = null
const robotBackgroundText = "ACAB ACAB ACAB ACAB ACAB ACAB ACAB ACAB ACAB ACAB ACAB ACAB ACAB ACAB ACAB ACAB ACAB ACAB ACAB ACAB ACAB ACAB ACAB ACAB ACAB ACAB ACAB ACAB ACAB ACAB ACAB ACAB ACAB ACAB ACAB ACAB ACAB ACAB ACAB ACAB ACAB ACAB ACAB ACAB ACAB ACAB ACAB ACAB ACAB ACAB ACAB ACAB ACAB ACAB ACAB ACAB ACAB ACAB ACAB ACAB ACAB ACAB ACAB ACAB ACAB ACAB ACAB ACAB ACAB ACAB ACAB ACAB ACAB ACAB ACAB ACAB ACAB ACAB ACAB ACAB ACAB ACAB ACAB ACAB"
var el = null // element
var randomCard; 
var isGameOver = false
var turn = "p"
var middleCard = []

// add available cards
for (let i = 0; i < 39; i ++){
    cardsAvailable.push(i)
}


startDescription.textContent = "Please insert a number"


// start configuration
startBtn.addEventListener("click", () => {
    if (isNaN(startInput.value) || startInput.value == ""){
        startDescription.textContent = "A number!"
    }
    else{
        startDescription.textContent = ""

        if (startInput.value > 1 && startInput.value < 9){
            numberOfCards = parseInt(startInput.value)
            startBtn.disabled = true
            startInput.disabled = true
            setTimeout(
                () => {
                    document.querySelector("#start-procedure").style.display = "none"
                }
                ,10_00)

            preparingWorkEnvironment()
        }
        else{
            alert("You should insert a number between 2 and 8.")
        }
        
    }
})

// /////// functions /////// //


// crete an element in html
function createHtmlElment(elmentName, className, targetElement, addBackGroundEffect = true, isImg = false, src = null){
    el = document.createElement(elmentName)
    el.classList = className
    targetElement.append(el)
    
    if (isImg){
        el.src = src
    }
    else{
        if (addBackGroundEffect){
            el.textContent = robotBackgroundText
        }
    }
}


// create card
function createNewCard(nameOfArray, addToArray = true){
    cardInd = Math.floor(Math.random() * cardsAvailable.length)
    randomCard  =  cardsAvailable[cardInd]

    if (addToArray){
        nameOfArray.push(randomCard)
    }
    cardsAvailable.splice(cardInd, 1)
}


// creating aside card function

// game over function 
function gameover(){
    console.log("Game is over")
    isGameOver = true
}

function preparingWorkEnvironment(){

    // loop to add cards for the robot and the player
    for (let ind = 0; ind < numberOfCards; ind++){

        // add robot card
        createNewCard(robotCards)
        createHtmlElment("div", "card-container r-card-container", robotBox, true, false)

        // add player card
        createNewCard(playerCards)

        createHtmlElment("div", "card-container p-card-container", playerBox, false)
        createHtmlElment("img", "card", el, false, true, `./pics/${cards[randomCard].src}`)
    }

    // card on the middle => platrform
    createNewCard(middleCard)

    createHtmlElment("div", "card-container plat-card-container", platrform, false)
    createHtmlElment("img", "card middle-card", el, false, true, `./pics/${cards[randomCard].src}`)
    
    // add aside card
    createNewCard(asideCard)

    createHtmlElment("div", "card", asideCardHTML)
    
    // start game
    start()
}

function start(){
    // add event when the user clicked to one of the cards
    for (let cardInd = 0; cardInd < playerCardsHTML.length; cardInd++){
        playerCardsHTML[cardInd].addEventListener("click", () => {
            
            // check if card
            if (cards[playerCards[cardInd]]["type"] == cards[middleCard]["type"] || 
                cards[playerCards[cardInd]]["num"] == cards[middleCard]["num"])
                {
                    // hide player card
                    playerCardsHTML[cardInd].style.display = "none"

                    // change the middle card
                    document.querySelector(".middle-card").src = `./pics/${cards[playerCards[cardInd]]["src"]}`
                    middleCard = []
                    middleCard.push(playerCards[cardInd])

                    // remove player card clicked from the array
                    playerCards.splice(playerCards.indexOf(playerCards[cardInd]), 1)
                }
                else{
                    alert("Opps. It shoud be same category or number! :<")
                }
        })
    }

    // aside card clicked
    asideCardHTML.addEventListener("click", () =>{
        playerCards = playerCards.concat(asideCard)
        createHtmlElment("div", "card-container p-card-container", playerBox, false)
        createHtmlElment("img", "card", el, false, true, `./pics/${cards[asideCard[0].src]}`) 
        asideCard = []
    })

    // check if the game has been ended 
    setInterval(() => {
        if (playerCardsHTML.length == 0){
            gameover()         
        }
    }, 500);
}

