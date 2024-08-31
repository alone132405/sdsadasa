
function subscribe(){
    document.getElementById("subscribe").style.display = "block";
    document.getElementById("myBtn").style.display = "none";
}

function openmenu(){
    document.getElementById("mininav").style.display = "block";
    document.getElementById("menubtn").style.display = "none";
    document.getElementById("closebtn").style.display = "block";
    document.getElementById("main").style.margin = "0px";
}

function closemenu(){
    document.getElementById("mininav").style.display = "none";
    document.getElementById("menubtn").style.display = "block";
    document.getElementById("closebtn").style.display = "none";
}
function opensearch(){
    document.getElementById("searchtext").style.display = "block";
    document.getElementById("menubtn").style.display = "none";
    document.getElementById("centernav").style.display = "none";
    document.getElementById("searchbtn").style.display = "none";
    document.getElementById("searchclosebtn").style.display = "block";
}
function closesearch(){
    document.getElementById("searchtext").style.display = "none";
    document.getElementById("menubtn").style.display = "block";
    document.getElementById("centernav").style.display = "block";
    document.getElementById("searchbtn").style.display = "block";
    document.getElementById("searchclosebtn").style.display = "none";
}
function openmenu2(){
    document.getElementById("openmenu2").style.display = "none";
    document.getElementById("minimenu2").style.display = "block";
    document.getElementById("menu2closebtn").style.display = "block";
}
function closemenu2(){
    document.getElementById("openmenu2").style.display = "block";
    document.getElementById("minimenu2").style.display = "none";
    document.getElementById("menu2closebtn").style.display = "none";
}