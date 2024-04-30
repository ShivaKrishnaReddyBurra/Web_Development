var gamePattern=[];
var userPattern=[];
var level=0;
var started=false;
$(document).keypress(
    function()
    {
        if(!started)
        {
            $("#level-title").text("Level "+level);
            sequence();
            started=true;
        }
    }
);

$(".btn").click(
    function ()
    {
        var key=$(this).attr("id");
        btnpress(key);
        btnsound(key);
        userPattern.push(key);
        check(userPattern.length-1);
    }
);
function btnpress(key)
{
    $("#"+key).addClass("pressed");
    setTimeout(
        function()
        {
            $("#"+key).removeClass("pressed"); 
        },100
    );
}
function btnsound(key)
{
    var audio=new Audio("sounds/"+key+".mp3");
    audio.play();

}
function sequence()
{
    level++;
    $("#level-title").text("Level "+level);
    userPattern=[];
    var arr=["red","blue","green","yellow"];
    var random=Math.floor(Math.random()*4);
    var key=arr[random];
    gamePattern.push(key);
    $("#"+key).fadeOut(100).fadeIn(100);
    btnsound(key);
}
function check(currentlevel)
{
    if(gamePattern[currentlevel]==userPattern[currentlevel])
    {
        if(gamePattern.length==userPattern.length)
        {
            setTimeout(
                function()
                {
                    sequence();
                },1000
            );
        }
    }
    else
    {
        btnsound("wrong");
        $("body").addClass("game-over");
        setTimeout(
            function()
            {
                $("body").removeClass("game-over");
            },200
        );
        $("#level-title").text("Game Over, Press Any Key to Restart");
        startover();
    }
}
function startover()
{
    level=0;
    gamePattern=[];
    started=false;
}