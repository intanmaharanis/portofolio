window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        document.getElementById("navbar").style.background = "white";
        document.getElementById("navbar").style.opacity = "1";
        document.getElementById("navbar").style.padding = "1rem";
       
    } else {
        document.getElementById("navbar").style.background = "#F5FEFF";
        document.getElementById("navbar").style.paddingTop = "1.5rem";
    }
}

var header = document.getElementById("navbar-nav");
var btns = header.getElementsByClassName("nav-link");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
  var current = document.getElementsByClassName("active");
  current[0].className = current[0].className.replace(" active", "");
  this.className += " active";
  });
}
