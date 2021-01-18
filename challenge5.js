/*
challenge 5:
Write a function which takes a single line html string as input and prints the properly indented
version of it.
-Assume that html will be plain xml meaning all tags will be without attributes or styling
just simple raw xml tags
Eg:
Input: <html><head></head><body><div></div></body></html>
Output:
<html>
    <head>
    </head>
    <body>
        <div>
        </div>
    </body>
</html>
*/

//SOLUTION =>

var tagString = "<html><head></head><body><div></div></body></html>";
//CONVERTING ARRAY OF STRINGS CONTAINING DIFFERENT TAGS.

(function htmlParser(tagString){
    let arrayofString = [];
    let string = "";
    for(let i=0;i<tagString.length;i++){
        if(tagString.charAt(i)=='>'){
            string=string+tagString.charAt(i);
            arrayofString.push(string);
            string="";
        }
        else{
            string=string+tagString.charAt(i);
        }
    }

    //TAKING AN EMPTY STACK
    let stack = [];

    console.log(arrayofString[0]);
    let s1 = arrayofString[0];
    s1=s1.charAt(0)+"/"+s1.substring(1);
    stack.push(s1);

    let finalString="";

    //MAIN PARSER FOR DIFFERENT TAGS
    for(let i=1;i<arrayofString.length;i++){
        let lengthofCurrentStack = stack.length;
        if(arrayofString[i].charAt(1)=='/'){
            lengthofCurrentStack=lengthofCurrentStack-1;
            while(lengthofCurrentStack!=0){
                finalString=finalString+"\t";
                lengthofCurrentStack--;
            }
            console.log(finalString+arrayofString[i]);
            stack.pop();
        }

        else{
            while(lengthofCurrentStack!=0){
                finalString=finalString+"\t";
                lengthofCurrentStack--;
            }
            console.log(finalString+arrayofString[i]);
            let str = arrayofString[i].charAt(0)+"/"+arrayofString[i].substring(1);
            stack.push(str);
        }
        finalString="";
    }
})(tagString); // CALLING FUNCTION BY IMMEDIATELY INVOKED FUNCTION EXPRESSION (IIFE)