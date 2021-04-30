const countDate = new Date("Jan 1,2022 00:00:00").getTime();

function newYear(){
    const now = new Date().getTime();
    let gap = countDate-now;

    let second =1000;
    let minute= second * 60;
    let hour = minute * 60;
    let day = hour * 24;
    let month = day *30;
    let f = Math.floor(gap / (month));
    let d = Math.floor((gap % (month)) / (day));
    let h = Math.floor((gap % (day)) / (hour));
    let m = Math.floor((gap % (hour)) / (minute));
    let s = Math.floor((gap % (minute)) / (second ));
    
    document.getElementById("month").innerText = f;
    document.getElementById("day"). innerText = d;  
    document.getElementById("hour"). innerText = h;
    document.getElementById("minute"). innerText =m;
    document.getElementById("second"). innerText = s;
    
}


setInterval(function(){
    newYear()
},1000)
