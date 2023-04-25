


var cart=document.getElementById("cart");

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
    var new_left=left - 10 ;
    console.log(left);
    if(left>=10 )
    {
        cart.src="/game/images/santa_cart_left.png";
        cart.style.left=new_left + "px";
    }
}

function moveRight()
{
    var left = cart.offsetLeft;
    var new_left=left + 10 ;
    console.log(left);
    if(left<=880 )
    {
        cart.src="/game/images/santa_cart_right.png";
        cart.style.left=new_left + "px";
        
    }
}