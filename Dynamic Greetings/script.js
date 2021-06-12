but1=document.querySelector("button");
op = document.querySelector(".output")
but1.addEventListener("click",tellGreeting);

function tellGreeting()
{
    let dat=new Date();
    let mes="not assigned";
    let hr =dat.getHours();

    if(hr>1||hr<12)
    {
    mes="Good Morning!";
    }
    if(hr>12||hr<=18)
    {
    mes="Good Afternoon!";
    }
    if (hr>18||hr<=24)
    {
    mes="Good Evening!";
    }
    else 
    mes="Good Night!";

    op.innerHTML=hr+' '+mes;

}