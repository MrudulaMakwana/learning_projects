

let btn=document.getElementById("btn")
btn.addEventListener("click",getColor)


function getColor()
{
    const rNumber=Math.floor(Math.random()*16777215);
    // console.log(rNumber);
    const rCode="#"+rNumber.toString(16)
    console.log(rNumber,rCode);
    document.getElementById("color-code").innerHTML=rCode;
    document.body.style.background=rCode
}




