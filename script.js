// var randomNumber= Math.trunc(Math.random()*8 + 1);
var quote = document.getElementById("quote").innerHTML;
var button =document.getElementById("btn");
var quoteNumber;
var quotes=["Be yourself; everyone else is already taken.",
            "So many books, so little time.",
            "A room without books is like a body without a soul.",
            "You only live once, but if you do it right, once is enough",
            "Be the change that you wish to see in the world.",
            "In three words I can sum up everything I've learned about life: it goes on",
            "If you tell the truth, you don't have to remember anything",
            "To live is the rarest thing in the world. Most people exist, that is all."
        ]



//count => number of unique numbers.
var numbers;
var result;
var randomNumber= function(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

// console.log(randomNumber(3,9));
var i;
function generateUniqueRandomNumbers(count, min, max) {
    numbers = new Set();
    while (numbers.size < count) {
        numbers.add(randomNumber(min, max));
    }
     result =Array.from(numbers);
    console.log(result[randomNumber(1,8)]);
    return result[randomNumber(1,8)];


    //----------------------------------------------------------------------------------
    // for(i=1;i<=result.length;i++){
    //     console.log(i);
    // }
    // console.log(result);
    // console.log("###############################################");
    // console.log(result[i]);


   
}    

console.log(generateUniqueRandomNumbers(8,1,8));
// console.log(numbers);


function getQuote(){
 quoteNumber=  quotes[generateUniqueRandomNumbers(8, 1, 8)];
 document.getElementById('quote').innerHTML=quoteNumber;
}