b=document.querySelectorAll("button");
op = document.querySelector(".output")
for(let i=0;i<100;i++)
{
    
b[0].addEventListener("click",clickHead);
b[1].addEventListener("click",clickTail);

}
let playerPointCounter=0; //count for
let systemPointCounter=0;
let message="";
let result="";
function clickHead()
{ 
//here 0 is heads,1 is tails
    if(Math.floor(Math.random()*2)==0)
    {
        playerPointCounter++;
        result="heads";
    }
    else 
    //if(Math.floor(Math.random()*2)==1)
    {
        systemPointCounter++;
        result="tails";
    }
    if(playerPointCounter>systemPointCounter)
    {
     message="you are in lead!";
    }
    else if(playerPointCounter==systemPointCounter)
    {
     message="it's Draw!";
    }
    else  //this one didn't work in p=0,sys=1
    {
        message="Opponenet is in lead";
        //some issue with this -- messsage="opponent is in lead!";
    }
    op.innerHTML='Result : '+result+'<br>'+message+'<br> your score is : '+playerPointCounter+'<br>opponent score is : '+systemPointCounter;
}
function clickTail()
{ 
//here 0 is heads,1 is tails
    if(Math.floor(Math.random()*2)==1)
    {
        playerPointCounter++;
        result="tails";
    }
    else 
     {
        systemPointCounter++;
        result="heads";
     }
     if(playerPointCounter>systemPointCounter)
     {
      message="you are in lead!";
     }
     else if(playerPointCounter==systemPointCounter)
     {
      message="it's Draw!";
     }
     else  //this one didn't work in p=0,sys=1
     {
         message="Opponenet is in lead";
     }
     op.innerHTML='Result : '+result+'<br>'+message+'<br> your score is : '+playerPointCounter+'<br>opponent score is : '+systemPointCounter;
    }