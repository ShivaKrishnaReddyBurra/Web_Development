var c=0;
document.getElementById("ser").onclick = function(){
    var div =document.getElementById("dis1");
    if(c==0){
        var a=document.getElementById("ser");
        var n=document.createElement("div");
        var inp=document.createElement("input");
        inp.setAttribute("type","text");
        inp.setAttribute("placeholder","Search Microsoft.com");
        c=1;
        var button=document.createElement("input");
        button.setAttribute("type","button");
        button.setAttribute("value","Cancel");

        inp.style.width="1150px";
        inp.style.height="40px";
        inp.style.border="2px solid #0067b8";
        button.style.width="80px";
        button.style.height="40px";
        button.style.border="1px solid black";
        button.style.backgroundColor="white";
        n.appendChild(inp);
        n.appendChild(button);
        n.style.display="flex";
        n.style.gap="2px";
        n.style.position="absolute";
        n.style.top="0px";
        n.style.marginLeft="12%";
        div.style.display=div.appendChild(n);
        button.onclick=function(){
            div.removeChild(div.lastChild);
            c=0;
            
        }
    }
   
}