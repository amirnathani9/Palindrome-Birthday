function reverseString(str){
    var listOfChars = str.split('');
    var listOFReverseChar = listOfChars.reverse();
    var reversedString = listOFReverseChar.join('');
    return reversedString;
}

function isPalindrome(str){
    var reversedString = reverseString(str);
    return str === reversedString;
}

console.log(isPalindrome('oppo'))


