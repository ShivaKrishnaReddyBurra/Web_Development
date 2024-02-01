function time()
{
    const d= new Date();
    a=d.getHours();
    b=d.getMinutes();
    c=d.getSeconds();
    e=d.getDate();
    f=d.getMonth()+1;
    g=d.getFullYear();
    h="AM"
    if(a>12)
    {
        a=a-12;
        h="PM"
    }
    if(a<10)
    {
        a="0"+a;
    }
    if(b<10)
    {
        b="0"+b;
    }
    if(c<10)
    {
        c="0"+c;
    }
    document.getElementById("h").innerHTML = a;
    document.getElementById("m").innerHTML = b;
    document.getElementById("s").innerHTML = c;
    document.getElementById("d").innerHTML = e;
    document.getElementById("mo").innerHTML = f;
    document.getElementById("y").innerHTML = g;
    document.getElementById("ampm").innerHTML = h;
}
setInterval(time,1000);