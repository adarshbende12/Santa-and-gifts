


var cart=document.getElementById("cart");
var start= document.getElementById("start");
var timer = document.getElementById("timer"); 
var showscore=document.getElementById("score");

 var score=0
start.onclick= startgame;

document.onkeydown=checkKey;

function checkKey(e)
{
    e=e || window.Event;

    if(e.keyCode==37)
    {
        moveLeft();
    }

    else if(e.keyCode==39)
    {
        moveRight();
    }
    else if(e.keycode==40)
    {   
        dropGift();
    }
}

function moveLeft()
{
    var left = cart.offsetLeft;
    var new_left=left - 15 ;
    console.log(left);
    if(left>=1 )
    {
        cart.src="/images/santa_cart_left.png";
        cart.style.left=new_left + "px";
    }
    else{
        
        cart.style.left=880+ "px";
    }
}

function moveRight()
{
    var left = cart.offsetLeft;
    var new_left=left + 15 ;
    console.log(left);
    if(left<=890 )
    {
        cart.src="/images/santa_cart_right.png";
        cart.style.left=new_left + "px";
        
    }
    else{
        
        cart.style.left=0+ "px";
    }
}


var first=true;
var timerstarted ;
function startgame()
{
    if(first)
    {
        first=false;
        cart.style.visibility="visible" ;
        start.innerHTML="Restart";
        score=0;
        setTimer();

    }
    else{
        start.innerHTML="Restart";
        score=0;
        cart.src="/images/santa_cart_right.png";
        cart.style.left=0+ "px";
        clearInterval(timerstarted);
        timer.innerHTML="02:00";
        setTimer();
        
    }

}


// Timer 
function setTimer()
{
    var minute = 0;
    var second = 10;

    timerstarted=setInterval(() => {

            if(minute==0 && second==1)
            {
                timer.innerHTML="Time Up!!";
                showscore.innerHtml="Total Score: "+ score;
                start.innerHTML="Play Again";
                clearInterval(timerstarted);
            }
            else 
            {
                second--;

                if(second==0)
                {
                    minute--;
                    second=60;
                }

                if(minute==0)
                {
                    minute=minute;
                }

                timer.innerHTML=minute+ ':' +second;
            }
        
    }, 1000);
}