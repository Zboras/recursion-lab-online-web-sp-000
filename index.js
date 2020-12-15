function printString(myString) {
  console.log(myString[0]);
 
  if (myString.length > 1) {
    let mySubString = myString.substring(1, myString.length);
    printString(mySubString);
  } else {
    return true;
  }
}// Code your solution here!

function reverseString(string) {
  if (string === "")
    return "";
  
  else
    return reverseString(string.substr(1)) + string.charAt(0)
}


function isPalindrome(str){
  let le = str.length;
  if (le === 0 || le === 1) {
    return true;
  }
  if (str[0] === str[le - 1]) {
    return isPalindrome(str.slice(1, le - 1) );
  }  
  return false;
}

function addUpTo(array, index) {
  
  
  if (array.length < 1) return 0;
  return array.pop() + addUpTo(array);
 }



