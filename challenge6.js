/*
Challenge 6
Create a countdown timer.
-Create a function which takes minutes as input from user and counts down from those minutes
and prints the progress in the console every 2 secs.
Eg: if I call the function with 5 minutes like this countMeDown(5), this should be the output in
console every 2 secs:
5mins remaining
4mins 58secs remaining
4mins 56secs remaining
….
…..
*/
//SOLUTION =>

let allotedTime = 5;
let timeinSeconds=allotedTime*60;
console.log("Time starts now !!!")
function countTimer(){
    let id =setInterval(function timer(){
        timeinSeconds=timeinSeconds-2;
        let min = parseInt(timeinSeconds/60);
        let sec = timeinSeconds%60;
        if(sec==0){
            console.log(min + " mins remaining");
        }
        else{
        console.log(min + " mins "+sec+" secs remaining");
        }
        if(timeinSeconds==0){
            console.log("Time up, STOP !!!");
            clearInterval(id);
        }
    },2000);//2000 miliseconds means 2sec 
}
countTimer();