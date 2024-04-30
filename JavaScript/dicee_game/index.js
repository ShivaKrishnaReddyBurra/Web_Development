function randomimg()
{
    var n1=Math.floor(Math.random()*6)+1;
    var n2=Math.floor(Math.random()*6)+1;
    var img1="./images/dice"+n1+".png";
    var img2="./images/dice"+n2+".png";
    document.querySelector(".img1").setAttribute("src",img1);
    document.querySelector(".img2").setAttribute("src",img2);
    if(n1>n2)
    {
        document.querySelector("h1").innerHTML="Player 1 Wins!";
    }
    else if(n1<n2)
    {
        document.querySelector("h1").innerHTML="Player 2 Wins!";
    }
    else
    {
        document.querySelector("h1").innerHTML="Draw!";
    }
}
randomimg();