// Christian Torres
// Matching Game
// Due: 11/22/19

let imgSrcs = [
'1.png', '2.png', '3.png', '4.png', '5.png', '6.png', '7.png', '8.png', 
'9.png', '10.png', '11.png', '12.png', '13.png', '14.png', '15.png', '16.png'
];

let cardPicture = null;

let randNum = null;

let i = null;

function assignValues()
{
    for(i = 1; i <= 16; i++)
    {
        randNum = Math.floor(Math.random() * imgSrcs.length);
        
        cardPicture = imgSrcs[randNum];

        document.getElementById(i).value = `Images/${cardPicture}`;

        imgSrcs.splice(randNum, 1);
    }
}

function show(card)
{
    card.src = card.value;
}

