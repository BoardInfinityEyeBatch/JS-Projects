b1 = document.querySelector("button")
output = document.querySelector(".output")

b1.addEventListener("click", displayMessage);

function displayMessage()
{
 let date  = new Date()
 let hours = date.getHours()

 if(hours <12){
      output.innerHTML="Good Morning"
 }
 else if(hours >=12 && hours <=17){
     output.innerHTML="Good Afternoon"
}
else if(hours >17 && hours <=22){
     output.innerHTML="Good evening"
}
else{
     output.innerHTML="Good Night" 
}
}
