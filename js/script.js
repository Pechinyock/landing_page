document.getElementById("Simple").style.display = "block";

function open_tab(evt, cityName) 
{
    var i, tabcontent, tablinks, tab__nombers;    
    
    tabcontent = document.getElementsByClassName("tabcontent");
    tablinks = document.getElementsByClassName("tablinks");    

    for (i = 0; i < tabcontent.length; i++) 
    {
        tabcontent[i].style.display = "none";
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    var name = document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";

}