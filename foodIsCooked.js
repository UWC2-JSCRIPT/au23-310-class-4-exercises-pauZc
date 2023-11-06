/**
 * Determines whether meat temperature is high enough
 * @param {string} kind 
 * @param {number} internalTemp 
 * @param {string} doneness
 * @returns {boolean} isCooked
 */
const foodIsCooked = function(kind, internalTemp, doneness) {
  // Write function HERE
  if(kind === 'beef'){
    return( (internalTemp > 125 &&  doneness === 'rare') ||//rare
          (internalTemp > 135 && doneness === 'medium') ||//medium
          (internalTemp > 155 && doneness === 'well'))//well
        
  }else if(kind === 'chicken')
    return(internalTemp > 165)
}
/*
const getIdealBeefTemp = (doneness) =>{
  let idealTemp;

}
*/

// Test function
console.log(foodIsCooked('chicken', 90)); // should be false
console.log(foodIsCooked('chicken', 190)); // should be true
console.log(foodIsCooked('beef', 138, 'well')); // should be false
console.log(foodIsCooked('beef', 138, 'medium')); // should be true
console.log(foodIsCooked('beef', 138, 'rare')); // should be true