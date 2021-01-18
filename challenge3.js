/*
Create a function which takes in a string and prints the count of occurrence of each
digit/character in the input.
-Upper and lower case of same alphabet character will count towards same character but
Uppercase will have twice the weightage of lowercase. E.g in the word ‘Pop’ the count of the
letter P is 3 since there is one uppercase P(count weight=2) and one lowercase(count
weight=1). Console output = (p=2, o =1)
-Only numbers and letters should be counted. Special characters should be ignored.
*/

//SOLUTION:-

let string = "Pop";

function countOccuranceOfCharacter(string){
    let countOccurence = {}; // object to store character/digit - frequency pair. 
    for(let i=0;i<string.length;i++){
        if(string.charCodeAt(i)>=65 && string.charCodeAt(i)<=90){
            if(countOccurence[string.charAt(i)]==undefined){
                countOccurence[string.charAt(i)]=2;
            }
            else{
                countOccurence[string.charAt(i)]+=2;
            }
        }
        else if((string.charCodeAt(i)>=97 && string.charCodeAt(i)<=122) || (string.charCodeAt(i)>=48 && string.charCodeAt(i)<=57)){
            if(countOccurence[string.charAt(i)]==undefined){
                countOccurence[string.charAt(i)]=1;
            }
            else{
                countOccurence[string.charAt(i)]+=1;
            }
        }
    }
    return countOccurence;
}

console.log(countOccuranceOfCharacter(string));