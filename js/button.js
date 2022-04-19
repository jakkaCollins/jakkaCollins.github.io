// This is my first time attempting to write something in JS

function menuButton() 
{
    var x = document.getElementById("menu");
    if (x.className === "navi") 
    {
      x.className += " responsive";
    } else 
    {
      x.className = "navi";
    }
}