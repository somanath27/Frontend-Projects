let count=document.getElementById("count")
let counter=0;
count.innerText=counter

function incrementcounter()
{
    counter++;
    count.innerText=counter
}

function decrementcounter()
{
   if(counter>0)
   {
    counter--;
    count.innerText=counter
   } 
   
}

