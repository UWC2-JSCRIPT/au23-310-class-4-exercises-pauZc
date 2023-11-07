const cards = [
  { val: 2, displayVal: "2", suit: "hearts" },
  { val: 3, displayVal: "3", suit: "hearts" },
  { val: 4, displayVal: "4", suit: "hearts" },
  { val: 5, displayVal: "5", suit: "hearts" },
  { val: 6, displayVal: "6", suit: "hearts" },
  { val: 7, displayVal: "7", suit: "hearts" },
  { val: 8, displayVal: "8", suit: "hearts" },
  { val: 9, displayVal: "9", suit: "hearts" },
  { val: 10, displayVal: "10", suit: "hearts" },
  { val: 10, displayVal: "Jack", suit: "hearts" },
  { val: 10, displayVal: "Queen", suit: "hearts" },
  { val: 10, displayVal: "King", suit: "hearts" },
  { val: 11, displayVal: "Ace", suit: "hearts" }
];

/**
 * Takes an array of cards and returns a string of the card display
 * values where the value is equal to 10
 *
 * @param {array} cards
 * @return {string} displayVal
 */
/*
*   Create a function cardsWorthTen that uses the array functions above (no regular loops allowed, no array forEach allowed)
*   Will accept an array of cards in the format below. 
* Will return a comma separated string of the displayVals of only those cards worth exactly 10.
*/

const cardsWorthTen = cards => {
  const cardsFilter = cards.filter(card => card.val === 10)
  const cardLabels = cardsFilter.map(card => card.displayVal)
  return cardLabels.join(', ')
};

console.log(cardsWorthTen(cards));
// should return/log "10, Jack, Queen, King"
