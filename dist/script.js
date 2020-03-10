function sumTwoSmallestNumbers(numbers) {  
  let arr = numbers 
  
  function compareNumbers(a,b){
    return a - b   
  }
  arr.sort(compareNumbers)
  
  return arr[0] + arr[1]
}