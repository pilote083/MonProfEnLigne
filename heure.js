function updateClock(){
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    const hourDeg = ((hours % 12) + minutes / 60) * 30;
    const minuteDeg = (minutes + seconds / 60) * 6;
    const secondDeg = seconds * 6;

    document.getElementById("hour").style.transform = `rotate(${hourDeg}deg)`;
    document.getElementById("minute").style.transform = `rotate(${minuteDeg}deg)`;
    document.getElementById("second").style.transform = `rotate(${secondDeg}deg)`;

    const hoursText = ["twelve", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven"];
    const minutesText = ["o'clock", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "quarter", "sixteen", "seventeen", "eighteen", "nineteen", "twenty", "twenty-one", "twenty-two", "twenty-three", "twenty-four", "twenty-five", "twenty-six", "twenty-seven", "twenty-eight", "twenty-nine", "half past"];

    let hourWord = hoursText[hours % 12];
    let minuteWord;

    if(minutes === 0){
        minuteWord = "o'clock";
    }else if(minutes <= 30){
        minuteWord = minutesText[minutes];
    }else{
        minuteWord = minutesText[60 - minutes];
        hourWord = hoursText[(hours + 1) % 12];
    }

    let timeText;
    if(minutes === 0){
        timeText = `${hourWord} ${minuteWord}`;
    }else if(minutes <= 30){
        timeText = `${minuteWord} past ${hourWord}`;
    }else{
        timeText = `${minuteWord} to ${hourWord}`;
    }

    document.getElementById("written-time").textContent = timeText;
}

setInterval(updateClock, 1000);
updateClock();

    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();