// 1. qyerySelector
// 2. addEventListener
// 3. innerText, innerHTML
// 4. javascript functions

button1 = document.querySelector("button")
input1 = document.querySelector("input")
output = document.querySelector(".output")

button1.addEventListener("click", showMessage)
function showMessage(){
    let message = `Welcome ${input1.value} in the course of javascript`
    output.innerHTML =  message
}


