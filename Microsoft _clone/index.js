var c=0;
document.getElementById("ser").onclick = function(){
    var div =document.getElementById("dis1");
    if(c==0){
        var a=document.getElementById("ser");
        var inp=document.createElement("input");
        inp.setAttribute("type","text");
        inp.setAttribute("placeholder","Search");
        c=1;
        inp.style.width="1030px";
        inp.style.height="30px";
        inp.style.borderRadius="5px";
        inp.style.border="1px solid black";
        inp.style.position="absolute";
        inp.style.marginLeft="12%";

        a.value="cancle"
        div.style.display=div.appendChild(inp);
        a.style.top="0px";
        a.style.right="0px";
        a.style.height="30px";
        a.style.width="100px";
        a.style.borderRadius="5px";
        a.style.border="1px solid black";
    
    }
    else{
        var a=document.getElementById("ser");
        div.removeChild(div.lastChild);
        c=0;
        a.value="Search";
        a.border="none";
    }
}