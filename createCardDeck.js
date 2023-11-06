/**
 * Returns an array of 52 Cards
 * @returns {Array} deck - a deck of cards
 */
const getDeck = () => {
  const deck = new Array()
  const suits = ['hearts', 'spades', 'clubs', 'diamonds']
 
  suits.forEach(suit => 
    {
      let cardNo = 1;
      while( cardNo <= 13 ){
        let card = new Object();
        card.suit = suit
        switch (cardNo) {
          case 1:
            card.displayVal = 'Ace'
            card.val = 11
            break;
          case 11:
              card.displayVal = 'Jack'
              card.val = 10
              break;
          case 12:
              card.displayVal = 'Queen'
              card.val = 10
              break;
          case 13:
              card.displayVal = 'King'
              card.val = 10
              break;
          default:
              card.displayVal = cardNo
              card.val = cardNo
            break;
        }
        deck.push(card)
        cardNo++;
      }
      
    }
  )
  return deck;
}

// CHECKS

const deck = getDeck()
console.log(`Deck length equals 52? ${deck.length === 52}`)

/*
Create a function cardsWorthTen that uses the array functions above (no regular loops allowed, no array forEach allowed)

Will accept an array of cards in the format below. 
Will return a comma separated string of the displayVals of only those cards worth exactly 10.
*/

const cardsWorthTen = () =>{
  const cards = getDeck()
  const cardsFilter =cards.filter(card => card.val === 10)
  return cardsFilter.map(card => card.displayVal)
}
console.log(`cards worth ten: ${cardsWorthTen()}`)




/*
const randomCard = deck[Math.floor(Math.random() * 52)]

const cardHasVal =
  randomCard && randomCard.val && typeof randomCard.val === 'number'
console.log(`Random card has val? ${cardHasVal}`)

const cardHasSuit =
  randomCard && randomCard.suit && typeof randomCard.suit === 'string'
console.log(`Random card has suit? ${cardHasSuit}`)

const cardHasDisplayVal =
  randomCard &&
  randomCard.displayVal &&
  typeof randomCard.displayVal === 'string'
console.log(`Random card has display value? ${cardHasDisplayVal}`)
*/