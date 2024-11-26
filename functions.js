function toggleStyleSheet(){
    var styleelement = document.getElementById("stylesheet");
    var currstyle = styleelement.getAttribute("href");
    var newstyle;
    if(currstyle == "style1.css"){
        newstyle = "style2.css";
    } else{
        newstyle = "style1.css";
    }
    styleelement.setAttribute("href", newstyle);
    localStorage.setItem("stylesheet", newstyle);
    var path = window.location.pathname;
    var body = document.querySelector('body');
    if(savedStyle == "style2.css"){
        
    }
}

window.onload = function(){
    var savedStyle = localStorage.getItem("stylesheet");
    if(savedStyle){
        var styleelement = document.getElementById("stylesheet");
        styleelement.setAttribute("href", savedStyle);
    }
    var path = window.location.pathname;
    var body = document.querySelector('body');
    if(savedStyle == "style2.css"){
        if (path.includes('index.html')) {
            body.style.backgroundImage = "linear-gradient(#F2E8C640, #F2E8C640), url('images/st2/screen-lighthouse.jpg')";
        } else if (path.includes('tech.html')) {
            body.style.backgroundImage = "linear-gradient(#F2E8C640, #F2E8C640), url('images/st2/screen-parade.jpg')";
        } else if (path.includes('qual.html')) {
            body.style.backgroundImage = "linear-gradient(#F2E8C640, #F2E8C640), url('images/st2/screen-senate.jpg')";
        } else if (path.includes('service.html')) {
            body.style.backgroundImage = "linear-gradient(#F2E8C640, #F2E8C640), url('images/st2/screen-syracusae.jpg')";
        }
    } else{
        let num = Math.ceil(Math.random() * 21);
        let st = num.toString();
        if (path.includes('tech.html')) {
            document.imgID.src = 'images/st1/' + st + '.JPG';
        } else if (path.includes('qual.html')) {
            document.imgID.src = 'images/st1/' + st + '.JPG';
        } else if (path.includes('service.html')) {
            document.imgID.src = 'images/st1/' + st + '.JPG';
        }
    }
}