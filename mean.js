const ring = document.querySelector('label');
const room = document.querySelector('.container .room');
function clicked()
{
    if (ring.className == "fas fa-bell")
    {
        ring.className = "fas fa-times";
    }
    else
    {
        ring.className = "fas fa-bell";
    }
}