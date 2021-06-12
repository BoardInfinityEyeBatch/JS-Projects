b1 = document.querySelector("button")

b1.addEventListener("click", displayMessage);

function displayMessage()
{
 let date  = new Date()
 let hours = date.getHours()
 if(hours > 17 && hours <=22){
      console.log("Good Evenning")
 }
}
