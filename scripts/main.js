const theButton = document.getElementById('Button1');
const Stick1 = document.getElementById('Stick1');


const dealerBody = document.getElementById('BodyForDealer');
const theBody = document.getElementById('BodyForOutput1');

 
function getRandomItem(arr) {
    const randomIndex = Math.floor(Math.random() * arr.length);
    const item = arr[randomIndex];
    return item;
}

const simpleDeck = [1, 2, 3, 4, 5, 6, 7, 8 , 9, 10, 10, 10, 10];

let dealerFirstCard = getRandomItem(simpleDeck)

const dealerHand = [dealerFirstCard];
const p1Hand = [];

let dealerHandTotal = dealerFirstCard;
let p1HandTotal = 0;

dealerBody.innerHTML = 'Dealer Hand: ' + dealerFirstCard + ', ';
theBody.innerHTML = 'Player Hand: ';


theButton.onclick = function() {
    p1Hand.push(getRandomItem(simpleDeck));
    p1HandTotal += p1Hand[p1Hand.length -1];
    theBody.innerHTML += p1Hand[p1Hand.length -1] + ', ';
    if (p1HandTotal > 21){
        alert('GAME OVER!');
        theButton.disabled = true;
    }
}

Stick1.onclick = function(){
    theButton.disabled = true;
    Stick1.disabled = true;
    while (dealerHandTotal < 17) {
    dealerHand.push(getRandomItem(simpleDeck));
    dealerHandTotal += dealerHand[dealerHand.length -1];
    dealerBody.innerHTML += dealerHand[dealerHand.length -1] + ', ';
    }
    if (dealerHandTotal < 22 && dealerHandTotal > p1HandTotal){
        alert('GAME OVER!');
    }
    else{
        alert('YOU WIN!');
    }
}


ResetButton.onclick = function(){

    let dealerNewCard = getRandomItem(simpleDeck);

    theButton.disabled = false;
    Stick1.disabled

    dealerBody.innerHTML = 'Dealer Hand: ' + dealerNewCard + ', ';
    theBody.innerHTML = 'Player Hand: ';

    dealerHand.length = 1;
    dealerHand[0] = dealerNewCard;
    p1Hand.length = 0;

    dealerHandTotal = dealerNewCard;
    p1HandTotal = 0;
    p2HandTotal = 0;
}




