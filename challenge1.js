/*
CHALLENGE 1 =>
Create a function which prints the changes between two objects.
-Function takes two objects as input
-Prints the changes between them in console e.g attribute x has been added and value set to, attribute y
has been deleted, attribute z has been changed to value v3 etc
-Returns true if object has changed else false.
*/

// SOLUTION:-
let obj1={
    "id" : "0001" ,
    "type" : "donut" ,
    "name" : "Cake" ,
    "ppu" : 0.55 ,

    "batters" : {
    "batter" : [
    { "id" : "1001" , "type" : "Regular" },
    { "id" : "1002" , "type" : "Chocolate" },
    { "id" : "1003" , "type" : "Blueberry" },
    { "id" : "1004" , "type" : "Devil's Food" }
    ]
    },

    "topping" : [
    { "id" : "5001" , "type" : "None" },
    { "id" : "5002" , "type" : "Glazed" },
    { "id" : "5005" , "type" : "Sugar" },
    { "id" : "5007" , "type" : "Powdered Sugar" },
    { "id" : "5006" , "type" : "Chocolate with Sprinkles" },
    { "id" : "5003" , "type" : "Chocolate" },
    { "id" : "5004" , "type" : "Maple" }
    ]
    }

let obj2={
"id" : "00368" ,
"type" : "salad" ,
"name" : "Fruit Salad" ,

"veggies" : [
{ "id" : "a" , "type" : "Tomato" },
{ "id" : "b" , "type" : "Potato" }
],

"topping" : [
{ "id" : "5001" , "type" : "None" },
{ "id" : "5002" , "type" : "Glazed" },
{ "id" : "5007" , "type" : "Mayonnaise" },
]
}


function compareObjects(obj1,obj2){
    for(let i in obj1){
        if(obj2[i]==undefined){
            console.log("Attribute " + i + " has been deleted");
        }
        else{
            console.log("Attribute " + i + " has been changed value from "+ obj1[i] + " to " + obj2[i]);
        }    
    }

    for(let i in obj2){
        if(obj1[i]==undefined){
            console.log("Attribute "+ i +" has been added and value set to "+ obj2[i]);
        }
    }
    return (obj1==obj2);
}

// FUNCTION IS FOR COMPARING obj1 WITH obj2
console.log("COMPARING object1 WITH object2");
console.log(compareObjects(obj1,obj2));

// FUNCTION IS FOR COMPARING obj2 WITH obj1
console.log("COMPARING object2 WITH object1");
console.log(compareObjects(obj2,obj1));