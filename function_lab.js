//Question #1:
//Define a function maxOfTwoNumbers that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript. You'll have to remember your pre-work, or do some googling to figure this out.

//Answer #1
function maxOfTwoNumbers(a,b){
    if (a>b) {
       return a; 
    } else {
       return b;
    }    
}
//To invoke function: maxOfTwoNumbers(5,9)
//-----------------------------------------
//Question #2:
//Define a function maxOfThree that takes three numbers as arguments and returns the largest of them.

//Answer #2
function maxOfThree(a,b,c){
    if (a>b && a>c) {
        return a;
    } else if (b>a && b>c) {
        return b;
    } else {
        return c;
    }    	
}
//To invoke function: maxOfThree(5,9,4)
//-----------------------------------------
//Question #3:
//Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.

//Answer #3:
function isVowel (character) { 
    var array = ["a", "e", "i", "o", "u"]
    for (i = 0; i<array.length; i++) {
        if (character==array[i]){
            return true
        }
    }
    return false
}
//To invoke function: isVowel("k")
//-----------------------------------------
//Question #4:
//Define a function sumArray and a function multiplyArray that sums and multiplies (respectively) all the numbers in an array of numbers. For example, sumArray([1,2,3,4]) should return 10, and multiplyArray([1,2,3,4]) should return 24.

//Answer #4:

var myArray = [1, 2, 3, 4]

function multiplyArray(array){
    var total = 1;
    for (i = 0; i < array.length; i++) {
        total*=array[i];
    }
    return total
}
//To invoke function: multiplyArray(myArray)
function sumArray(array){
    var total = 0;
    for (i = 0; i < array.length; i++) {
        total+=array[i];
    }
    return total
}
//To invoke function: sumArray(myArray)
//-----------------------------------------
//Bonus Question #1:
//Define a function reverseString that computes the reversal of a string. For example, reverseString("jag testar") should return the string "ratset gaj".

//Answer:
function reverseString(s) {
  return s.split('').reverse().join('');
}
//To invoke function: reverseString("jag testar")
//-------------------------------------------
//Bonus Question #2:
//Write a function findLongestWord that takes an array of words and returns the length of the longest one.

//Answer:
function findLongestWord (wordArray) {
    var longestword = 0;
    for (i = 0; i < wordArray.length; i++) {
        var word = wordArray[i];

        if (word.length > longestword) {
            longestword = word.length
        }
    }
    return longestword
}
//To invoke function: findLongestWord(["tap", "cluck", "arf", "meow"])
//------------------------------------------
//Bonus Question #3:
//Write a function filterLongWords that takes an array of words and an number i and returns the array of words that are longer than i.

//Answer:
