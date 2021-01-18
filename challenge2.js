/*
Challenge 2
Write a function which processes a given number string to give output according to the given set
of sequential instructions:
- 0s at odd places in the input number should be removed.
- 2s from even places in the input number should be replaced with 0.
- Any repeated sequence of 0s in the number should be truncated to a single 0. Eg 7800056
becomes 78056.
- Format output string to have commas so that its human readable ex 200000 will become 200,000
- Print and return the output.
Sample Input number for testing: 00064833255500543076233434343400
*/
//SOLUTION =>
let mainString="00064833255500543076233434343400";

function stringConversion(mainString){
    let updatedString='';
    for(let i=0;i<mainString.length;i++){
        if(i%2==0 && mainString.charAt(i)=='0'){
            continue;
        }
        else{
            updatedString=updatedString+mainString.charAt(i);
        }
    }

    mainString=updatedString;
    updatedString='';

    for(let i=0;i<mainString.length;i++){
        if(i%2!=0 && mainString.charAt(i)=='2'){
            updatedString=updatedString+'0';
        }
        else{
            updatedString=updatedString+mainString.charAt(i);
        }
    }
    mainString=updatedString;
    updatedString='';

    let i=0;
    let n=mainString.length;
    let j=1;
    while(j<n){
        if(mainString[i]!=mainString[j]){
            updatedString=updatedString+mainString[i];
        }
        else{
            if(mainString[i]!='0'){
                updatedString=updatedString+mainString[i];
            }
        }
        i++;
        j++;
    }
    updatedString = updatedString + mainString[n-1];
    mainString=updatedString;
    updatedString='';

    let stack=[];
    let count=0;
    for(let i=mainString.length-1;i>=0;i--){
        stack.push(mainString[i]);
        count=count+1;
        if(count==3){
            stack.push(',');
            count=0;
        }
    }
    while(stack.length!=0){
        updatedString=updatedString+stack.pop();
    }
    mainString=updatedString;
    return mainString;
}

console.log(stringConversion(mainString));