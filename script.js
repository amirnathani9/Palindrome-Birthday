function reverseString(str){
    var listOfChars = str.split('');
    var listOFReverseChar = listOfChars.reverse();
    var reversedChars = listOFReverseChar.join('');
    return reversedChars;
}

console.log(reverseString('zaid'));