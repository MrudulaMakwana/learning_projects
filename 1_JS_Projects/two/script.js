let ctc = document.getElementById('ctc')
let chc = document.getElementById('chc')
let hexheader = document.getElementById('hexheader')




chc.addEventListener('click', () => {
    // let hex=Math.floor(Math.random()*16777215)
    // const rCode="#"+hex.toString(16)
    // document.querySelector('.hexContainer').style.background=`${rCode}`
    // hexheader.innerHTML=rCode

    let charSet = '0123456789ABCDEF'
    let hexNum = "";
    for (let i = 0; i < 6; i++) {
        hexNum += charSet.charAt(Math.floor(Math.random() * charSet.length))
    }
    console.log(`#${hexNum}`)
    document.querySelector('.hexContainer').style.background = `#${hexNum}`
    hexheader.innerHTML = `#${hexNum}`
})


let rgbHeader = document.getElementById('rgbHeader')

let gc = document.getElementById('gc')
gc.addEventListener('click', () => {
    let red = document.getElementById('red').value
    let green = document.getElementById('green').value
    let blue = document.getElementById('blue').value
    console.log("==================");
    console.log(red, green, blue)
    rgbHeader.innerText = `rgb(${red},${green},${blue})`
    document.querySelector('.rgbContainer').style.background = `rgb(${red},${green},${blue})`

})


function ctch() {
    navigator.clipboard.writeText(hexheader.textContent)
    console.log(hexheader.textContent);
    alert('copied successfully')
}

function ctcr() {
    navigator.clipboard.writeText(rgbHeader.textContent)
    console.log((rgbHeader.textContent));
    alert('copied successfully')

}


let ctcrgb = document.getElementById('ctcrgb').addEventListener('click', ctcr)
let ctchex = document.getElementById('ctchex').addEventListener('click', ctch)