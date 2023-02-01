const Hourhand = document.querySelector(".hour");
const Minutehand = document.querySelector(".minute");
const Secondhand= document.querySelector(".second");

//console.log(hour);

function updateClock(){
    //saves current date as object 
    const currentDate = new Date();
    //executes function everysecond
    setTimeout(updateClock,1000)
    const hour = currentDate.getHours();
    const minute = currentDate.getMinutes();
    const second = currentDate.getSeconds();
    const hourDeg = (hour/12)*360;
    const secondDeg = (second/60)*360;
    const minuteDeg = (minute/60)*360;
    Hourhand.style.transform = `rotate(${hourDeg}deg)`
    Minutehand.style.transform = `rotate(${secondDeg}deg)`
    Secondhand.style.transform = `rotate(${minuteDeg}deg)`
}

//updateClock();

setInterval(updateClock,1000);



