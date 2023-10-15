
function updateCountry(){
    let contacts = new Map()
    contacts.set('Usa','+002 576888888')
    contacts.set('French','+800 25525525')
    contacts.set('India','+91 7683844093')


    document.getElementById("country").addEventListener('change',function()
    {
        let country=this.value;
        console.log(country);
        document.getElementById("contact").innerHTML=contacts.get(country)
        
        document.getElementById("flag").src=`./images/${country}.png`
    })

}

var scrollevent=document.getElementById("header-sticky");
console.log(scrollevent);
window.onscroll=function()
{
    if(window.pageYOffset > 100)
    {
        scrollevent.classList.add("sticky")
    }
    else{
        scrollevent.classList.remove("sticky")
    }
}

// document.getElementById("scrollUp").addEventListener('scroll',Scroll)

// function Scroll()
// {
//     window.body.style.scrollBehavior="smooth"
// }