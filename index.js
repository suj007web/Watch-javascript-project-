

let time = document.querySelector("h1");
setInterval(function(){
    let clock = new Date();
    let h = clock.getHours();
    let m = clock.getMinutes();
    let s = clock.getSeconds();
    if(h<10){
        h = "0"+h.toString()
    }
    if(m<10){
        m = "0"+m.toString()
    }
    if(s<10){
        s = "0"+s.toString()
    }
    time.textContent = `${h} : ${m} : ${s}`;
}, 1000)
