function time()
{
    const d= new Date();
    document.getElementById("h").innerHTML = d.getHours();
    console.log(d.getHours());
    document.getElementById("m").innerHTML = d.getMinutes();
    document.getElementById("s").innerHTML = d.getSeconds();
}
setInterval(time,1000);