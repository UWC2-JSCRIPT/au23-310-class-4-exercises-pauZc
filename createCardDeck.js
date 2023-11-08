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