// Christian Torres
// Matching Game
// Due: 11/22/19

let imgSrcs = [ // Defining array for image sources
'1.png', '2.png', '3.png', '4.png', '5.png', '6.png', '7.png', '8.png', 
'9.png', '10.png', '11.png', '12.png', '13.png', '14.png', '15.png', '16.png'
];

let imgValues = [ // Defining array for card values
    1, 2, 3, 4, 5, 6, 7, 8, 1, 2, 3, 4, 5, 6, 7, 8
]

let cardPicture = null; // Defining variables to store randomly picked card and value
let cardValue = null;

let randNum = null; // Defining variable to use as random number when indexing the card srcs/values

let i = null; // Defining variable to use in for loops

let card1 = null; // Defining variables to store the two cards that you picked ID and value.
let card1ID = null;
let card2 = null;
let card2ID = null;

let turnCtr = 0; // Counters to use to keep track of what how many cards are faced up currently, how many tries you've had, and matches
let tryCtr = 0;
let matchesCtr = 0;

let game = true; // Variable to decide whether game is started or not, aka true or false

function sleep(ms) { // Sleep function to use later on for one second
    return new Promise(resolve => setTimeout(resolve, ms));
}

function assignValues() // Function to assign values to card
{
    document.getElementById("startBtn").disabled = true; // Disables start button once game has started
    game = true; // Sets game to true so it can be played
    for(i = 1; i <= 16; i++) // For loop to assign card images and values
    {
        randNum = Math.floor(Math.random() * imgSrcs.length); // Picks random number from cards left in array
        
        cardPicture = imgSrcs[randNum]; // Picks random card image from array
        cardValue = imgValues[randNum]; // Picks corresponding card value from array

        document.getElementById(i).alt = `Images/${cardPicture}`; // Stores card image in alt attribute
        document.getElementById(i).value = cardValue; // Stores card value in value attribute

        imgValues.splice(randNum, 1); // Deletes card image and value from array so it can't be chosen again
        imgSrcs.splice(randNum, 1);
    }
}

async function show(card) // Function to show card that has been clicked on
{
    if(game == true) // If the game variable is true, the game can be played
    {
        turnCtr++;
        
        if(turnCtr == 2)
        {
            if(card.getAttribute("src") == "Images/back.png")
            {
                card.src = card.alt;
            }

            card2 = card.value;
            card2ID = card.id;

            if(card1 == card2)
            {
                game = false;
                await sleep(1000);
                game = true;
                document.getElementById(card1ID).style.visibility = "hidden";
                document.getElementById(card2ID).style.visibility = "hidden";

                matchesCtr++;
                turnCtr = 0;

                tryCtr++;
                document.getElementById("triesCtr").innerHTML = `Tries: ${tryCtr}`;
                if(matchesCtr == 8)
                {
                    game = false;
                    document.getElementById("resetBtn").disabled = false;
                }
            }
            else
            {
                game = false;
                await sleep(1000);
                game = true;
                document.getElementById(card1ID).src = "Images/back.png";
                document.getElementById(card2ID).src = "Images/back.png";

                turnCtr = 0;

                tryCtr++;
                document.getElementById("triesCtr").innerHTML = `Tries: ${tryCtr}`;
            }
        }
        else
        {
            if(card.getAttribute("src") == "Images/back.png")
            {
                card.src = card.alt;
            }

            card1 = card.value;
            card1ID = card.id;
        }
    }
    
}

function init()
{
    imgSrcs = [
    '1.png', '2.png', '3.png', '4.png', '5.png', '6.png', '7.png', '8.png', 
    '9.png', '10.png', '11.png', '12.png', '13.png', '14.png', '15.png', '16.png'
    ];
        
    imgValues = [
        1, 2, 3, 4, 5, 6, 7, 8, 1, 2, 3, 4, 5, 6, 7, 8
    ]
    
    cardPicture = null;
    cardValue = null;
    
    randNum = null;
    
    i = null;
    
    card1 = null;
    card1ID = null;
    card2 = null;
    card2ID = null;
    
    turnCtr = 0;
    tryCtr = 0;
    matchesCtr = 0;

    document.getElementById("resetBtn").disabled = true;

    for(i = 1; i <= 16; i++)
    {
        document.getElementById(i).style.visibility = "visible";
        document.getElementById(i).src = "Images/back.png";
    }

    document.getElementById("triesCtr").innerHTML = "Tries = 0";

    document.getElementById("startBtn").disabled = false;
}
