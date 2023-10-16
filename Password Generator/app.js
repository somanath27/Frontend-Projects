function getRandomLower()
{
    return String.fromCharCode(Math.floor(Math.random()*26)+97)
}
function getRandomUpper()
{
    return String.fromCharCode(Math.floor(Math.random()*26)+65)
}
function getRandomNumber()
{
    return String.fromCharCode(Math.floor(Math.random()*10)+48)
}
function getRandomSymbol()
{
    const symbols="!@#$%^&*(){}<>/"
    return symbols[Math.floor(Math.random()*symbols.length)]
}
// console.log( getRandomSymbol())



const randomFunc={
    lower:getRandomLower,
    upper:getRandomUpper,
    number:getRandomNumber,
    symbol:getRandomSymbol
}



const resultElement=document.getElementById("result")
const lengthElement=document.getElementById("length")
const upperCaseElement=document.getElementById("uppercase")
const lowerCaseElement=document.getElementById("lowercase")
const numberElement=document.getElementById("number")
const symbolElement=document.getElementById("symbol")
const generateElement=document.getElementById("generate")
const clipboardElement=document.getElementById("clipboard")


//functionality for click button and get data
generateElement.addEventListener('click',()=>
{
    const length = +lengthElement.value
    // console.log(typeof(length))
    const hasLower=lowerCaseElement.checked
    const hasUpper=upperCaseElement.checked
    const hasNumber=numberElement.checked
    const hasSymbol=symbolElement.checked

    resultElement.innerText = generatePassword(length,hasLower,hasUpper,hasNumber,hasSymbol)
})


clipboardElement.addEventListener("click",()=>
{
    const textarea=document.createElement("textarea")
    const Password=resultElement.innerText

    if(!Password)
    {
        return
    }
    textarea.value=Password
    document.body.appendChild(textarea)
    textarea.select()
    document.execCommand("copy")
    textarea.remove()
    alert("password copied to clipboard")

})








//code for Password Generator
function generatePassword(length,lower,upper,number,symbol)
{
    // console.log(length)
    let generatedPassword=""
    const typesCount=lower+upper+number+symbol
    // console.log(typesCount)

    const typeArr=[{lower},{upper},{number},{symbol}].filter(item=>Object.values(item)[0])
   
if(typesCount===0)
{
    return ""
}

for(let i=0;i<=length;i+=typesCount)
{
    typeArr.forEach(type=>
        {
            const funcName=Object.keys(type)[0]
            // console.log(funcName)
            generatedPassword+=randomFunc[funcName]()
        })
}

const finalPassword=generatedPassword.slice(0,length)
return finalPassword
}
