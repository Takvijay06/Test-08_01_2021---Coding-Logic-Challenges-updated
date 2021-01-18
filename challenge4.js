/*
Challenge 4
Create a function which takes a string as input and processes it according to the
following instructions
- Any word which starts with letter ‘a’ and ends with letter ‘d’ should be replaced with the
word “mango”
- Any word containing the letters ‘o’ or ‘u’ should be turned to uppercase.
- Any word containing both the letters ‘i’ and ‘f’ should have be made camelcase (first
letter turned to uppercase)
Include sample strings you use as input and their output in comments or description.
*/
//SOLUTION =>
let string = "My request is to add vijay tak";

function instructionInChallenge4(){
    string.trim(); 
    let stringArray = string.split(" ");
    for(let i=0;i<stringArray.length;i++){
        let n = stringArray[i].length;
        if(stringArray[i].charAt(0)=='a' && stringArray[i].charAt(n-1)=='d'){
            stringArray[i]="mango";
            continue;
        }
        let charFlag = '';
        for(let x=0;x<n;x++){
            if(stringArray[i].charAt(x)=='o' || stringArray[i].charAt(x)=='u'){
                stringArray[i]=stringArray[i].toUpperCase();
                break;
            }
            if(stringArray[i].charAt(x)=='i' || stringArray[i].charAt(x)=='j'){
                charFlag=charFlag+stringArray[i].charAt(x);
                if(charFlag=='ij' || charFlag=='ji'){
                    stringArray[i]=stringArray[i].charAt(0).toUpperCase()+s[i].substring(1);
                    break;
                }
            }
        }
    }
    return s;
}

console.log(instructionInChallenge4(string));

