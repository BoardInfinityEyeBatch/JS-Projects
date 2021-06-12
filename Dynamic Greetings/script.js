<<<<<<< HEAD
button1=document.querySelector("button")
output=document.querySelector(".output")
button1.addEventListener("click",
()=>{
    var date= new Date();
    var hours = date.getHours();
    if(hours<12)
     message = `Good Morning, its ${hours} am`
    else if(hours<15)
    {
     hours=hours-12
     message = `Good Afternoon, its ${hours} pm`
    }
    else if(hours<19)
    {
        hours=hours-12
    message = `Good Evening, its ${hours} pm`
    }
    else
    {
        hours=hours-12
    message = `Good Night, its ${hours} pm`
    }
    output.innerHTML=message
}
)
=======
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
>>>>>>> be1e471cc47798a800a45a18ec2946261edbca3a
