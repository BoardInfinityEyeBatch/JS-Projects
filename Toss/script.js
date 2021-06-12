headButton=document.querySelector("#head")
tailButton=document.querySelector("#tail")
output=document.querySelector(".output")
let headCount=0
let tailCount=0

headButton.addEventListener("click",
()=>{
    headCount++
     message = `You Clicked Head, Total count of Head:${headCount} , Tail:${tailCount}`
     
    
    output.innerHTML=message
}
)
tailButton.addEventListener("click",
()=>{
    tailCount++
     message = `You Clicked Tail, Total count of Head:${headCount} , Tail:${tailCount}`
    
    output.innerHTML=message
}
)