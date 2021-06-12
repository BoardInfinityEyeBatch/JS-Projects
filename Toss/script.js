button=document.querySelectorAll("button")
output=document.querySelector(".output")
let headCount=0
let tailCount=0

button[0].addEventListener("click",
()=>{
    headCount++
     message = `You Clicked Head, Total count of Head:${headCount} , Tail:${tailCount}`
     
    
    output.innerHTML=message
}
)
button[1].addEventListener("click",
()=>{
    tailCount++
     message = `You Clicked Tail, Total count of Head:${headCount} , Tail:${tailCount}`
    
    output.innerHTML=message
}
)