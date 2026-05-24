const endDate="25 Septmber 2024 3:00 PM"

document.getElementById("end-date").innerText=endDate

let days=document.getElementById("days");
let hours=document.getElementById("hours");
let minutes=document.getElementById("minutes");
let seconds=document.getElementById("seconds");

setInterval(()=>{
    
        let end=new Date(endDate)
        let date=new Date();
        let diff=(end-date) / 1000;
        // console.log(Math.floor(diff / 3600 / 24));
        // console.log(Math.floor(diff / 3600)% 24 );
        // console.log(Math.floor(diff / 60) % 60 );
        // console.log(Math.floor(diff) % 60 );
        // console.log(end,date);
        
        days.value=Math.floor(diff / 3600 / 24)
        hours.value=Math.floor(diff / 3600) % 24 
        minutes.value=Math.floor(diff / 60) % 60
        seconds.value=Math.floor(diff) % 60 
    
},1000)

