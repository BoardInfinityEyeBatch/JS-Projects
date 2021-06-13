button = document.querySelectorAll("button")
output =  document.querySelector(".output")

for(i = 0; i<=button.length-1; i++){
    button[i].addEventListener("click", tossWinner );
}
tossArray = ["Head", "Tail"]
function tossWinner(e){
    toss = tossArray[parseInt(Math.random()*2)]
    console.log(toss)
    userInput = e.target.innerHTML
    if(toss == userInput.trim()){
        console.log("You won the toss")
        console.log(userInput)
    }
    else{
        console.log("You lost the toss")
        console.log(userInput)
    }
    
    
}




















// calling function inside callback
// for(i = 0; i<=button.length-1; i++){
//     button[i].addEventListener("click",
//      function (){
//         tossWinner("Abhi")
//      }
//     );
// }
// function tossWinner(name){
//     console.log(name)
// }


