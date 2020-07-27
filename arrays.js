var chocolateBars = [
  'snickers',
  'hundred grand',
  'kitkat',
  'skittles'
  ]
  
  function addElementToBeginningOfArray(chocolateBars, candies){
    return[candies, ...chocolateBars]
  }
  
  function destructivelyAddElementToBeginningOfArray(chocolateBars, candies){
  chocolateBars.unshift(candies);
  return chocolateBars;
}

function addElementToEndOfArray(chocolateBars, candies){
  return [...chocolateBars, candies];
}
 
function destructivelyAddElementToEndOfArray(chocolateBars, candies){
  chocolateBars.push(candies);
  return chocolateBars;