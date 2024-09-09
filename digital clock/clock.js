const h=document.getElementById("hour")
 const m=document.getElementById("minutes")
 const s=document.getElementById("seconds")
 const ampm=document.getElementById("ampm")

function show(){
    let time=new Date();
    let h=time.getHours();
    let m=time.getMinutes();
    let s=time.getSeconds();
    document.getElementById("hours").innerText=h
    document.getElementById("minutes").innerText=m
    document.getElementById("seconds").innerText=s
    setTimeout(()=>{
        show()
    },1000)
    ampm='Am';
    if (h>=12){
        if(h>12) h-=12;
        ampm='PM';
    }
    else if(h==0){
        h=12;
        ampm='AM';
    }

    h=h<10?"0"+h:h
    m=m<10?"0"+m:m
    s=s<10?"0"+s:s
    let currenttime=h+":"+m+":"+s
    document.getElementById("minutes").innerText=currenttime;
}
show();