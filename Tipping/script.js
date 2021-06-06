// functions, arrow function , call back and callback with arrow

button1 = document.querySelector("button")
input1 = document.querySelector("input")
output = document.querySelector(".output")

//arrow function
// let doSomething = ()=>{
//     console.log("I am doing something")
//  }
button1.addEventListener("click",
   () => {
       message = `You can tip an amount of ${(input1.value* 0.1).toFixed(2)}`
       output.innerHTML =message
   }

)








