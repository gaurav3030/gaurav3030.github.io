function scrolltohome(){
    document.querySelector('.intro').scrollIntoView({ 
        behavior: 'smooth' 
      });
}
function scrolltoproject(){
    document.querySelector('.projectspage').scrollIntoView({ 
        behavior: 'smooth' 
      });
}


function myFunction() {
    var elmnt = document.getElementById("myDIV");
    var x = elmnt.scrollLeft;
    var y = elmnt.scrollTop;

    if(y<200){


        document.getElementsByClassName("navlink")[0].classList.add("navactive");
        document.getElementsByClassName("navlink")[1].classList.remove("navactive");

    }
    if(y>(screen.height-200)){


        document.getElementsByClassName("navlink")[0].classList.remove("navactive");
        document.getElementsByClassName("navlink")[1].classList.add("navactive");

    }
  }