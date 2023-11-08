
const blackjackDeck = getDeck();

// /**
//  * Represents a card player (including dealer).
//  * @constructor
//  * @param {string} name - The name of the player
//  */
class CardPlayer {
    constructor (playerName){
        this.name =playerName
        this.hand = new Array()
    }
    drawCard(player){
        const newCard = blackjackDeck[Math.floor(Math.random() * 52)]
        switch (player) {
            case 'p':
                document.getElementById("player").innerHTML += `<p>|   ${newCard.suit}.....${newCard.displayVal}    |</p>`
                break;
            case 'd':
                document.getElementById("dealer").innerHTML += `<p>|   ${newCard.suit}.....${newCard.displayVal}    |</p>`
                break;
        }
       this.hand.push(newCard)
    }
}; //TODO

// // CREATE TWO NEW CardPlayers
const dealer = new CardPlayer('Angel') // TODO
const player = new CardPlayer('Luis') // TODO

// /**
//  * Calculates the score of a Blackjack hand
//  * @param {Array} hand - Array of card objects with val, displayVal, suit properties
//  * @returns {Object} blackJackScore
//  * @returns {number} blackJackScore.total
//  * @returns {boolean} blackJackScore.isSoft
//  */
const calcPoints = (hand) => {
    let handScore ={
        score: 0,
        sofhand: false
    }
    const aces = hand.filter(card => card.displayVal === 'Ace')
    for (let index = 0; index < hand.length; index++) {
        const card = hand[index];
        if(aces.length > 0 && card.displayVal === 'Ace')
            continue;
        handScore.score += card.val
    }
    if ( aces.length === 1 ){
        if( handScore.score <= 10 ){
            handScore.score += 11
            handScore.sofhand = true
        }else if( handScore.score > 10 ){
             //false if the hand has no Aces, or if all Aces are counting as 1 point
            handScore.score += 1
            handScore.sofhand = false
        }
        return handScore
    }

    if ( aces.length > 1 & handScore.score > 9 ){
        for (let index = 0; index < aces.length; index++) {
            handScore.score ++;
            //false if the hand has no Aces, or if all Aces are counting as 1 point
            handScore.sofhand = false
        }
        return handScore
    }

    if ( aces.length > 1 && handScore.score <= 9 ){
        for (let index = 0; index < aces.length; index++) {
            if(index === 0)
                handScore.score += 11;
            else
                handScore.score ++;
        }
        if(handScore.score <= 21)
            handScore.sofhand = true
        return handScore
    }

    return handScore
    
}

// /**
//  * Determines whether the dealer should draw another card.
//  * 
//  * @param {Array} dealerHand Array of card objects with val, displayVal, suit properties
//  * @returns {boolean} whether dealer should draw another card
//  */
const dealerShouldDraw = (dealerHand) => {
//   // CREATE FUNCTION HERE
    const dealerScore = calcPoints(dealerHand)
//The dealer must abide by a strict set of rules:
//If the dealer's hand is 16 points or less, the dealer must draw another card
    if( dealerScore.score <= 16 )
        return true;
//If the dealer's hand is exactly 17 points, and the dealer has an Ace valued at 11, the dealer must draw another card
    if( dealerScore.score === 17  && dealerScore.softHand )
            return true;
//Otherwise if the dealer's hand is 17 points or more, the dealer will end her turn
    if(dealerScore.score >= 17 )
        return false


}

// /**
//  * Determines the winner if both player and dealer stand
//  * @param {number} playerScore 
//  * @param {number} dealerScore 
//  * @returns {string} Shows the player's score, the dealer's score, and who wins
//  */
const determineWinner = (playerScore, dealerScore) => {
   // CREATE FUNCTION HERE
   let winner;
    if((playerScore > dealerScore && playerScore <= 21) || dealerScore > 21)
        winner = 'player'
    else
        if((dealerScore > playerScore && dealerScore <= 21) || playerScore > 21)
            winner = 'dealer'


    console.log(`The winner is ${winner}
                Player - score: ${playerScore} \n
                 Dealer - score: ${dealerScore}`)
    
 }

// /**
//  * Creates user prompt to ask if they'd like to draw a card
//  * @param {number} count 
//  * @param {string} dealerCard 
//  */
const getMessage = (count, dealerCard) => {
   return `Dealer showing ${dealerCard.displayVal}, your count is ${count}.  Draw card?`
 }

// /**
//  * Logs the player's hand to the console
//  * @param {CardPlayer} player 
//  */
const showHand = (player) => {
  const displayHand = player.hand.map((card) => card.displayVal);
  console.log(`${player.name}'s hand is ${displayHand.join(', ')} (${calcPoints(player.hand).score})`);
}

// /**
//  * Runs Blackjack Game
//  */
const startGame = function() {
   player.drawCard('p');
   dealer.drawCard('d');
  player.drawCard('p');
  dealer.drawCard('d');


  let dealerScore = calcPoints(dealer.hand).score;

  if(dealerScore === 21)
  console.log('Sorry you lost! Dealer Perfect score 21')

  while (dealerScore < 21 && dealerShouldDraw(dealer.hand)) {
    dealer.drawCard('d');
    dealerScore = calcPoints(dealer.hand).score;
    showHand(dealer);
    if(dealerScore === 21){
        console.log('Sorry you lost! Dealer Perfect score 21')
        break;
    }
  }

  console.log(`Dealer stands at ${dealerScore}`);



  let playerScore = calcPoints(player.hand).score;
  showHand(player);
  if(playerScore === 21)
        console.log('Congratulations you win! Perfect score 21')


  while (playerScore < 21 && confirm(getMessage(playerScore, dealer.hand[0]))) {
    player.drawCard('p');
    playerScore = calcPoints(player.hand).score;
    showHand(player);
    if(playerScore === 21){
        console.log('Congratulations you win! Perfect score 21')
        break;
    }
    
  }
  console.log(`Player stands at ${playerScore}`);

  

    determineWinner(playerScore, dealerScore);
}