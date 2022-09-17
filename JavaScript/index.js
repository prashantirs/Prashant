$("#jquery-btn1").on("click",function(){
    // window.location = "https://prashantirs.github.io/Payment-Gateway-Integration_Project/" ;
    URL = "https://prashantirs.github.io/Payment-Gateway-Integration_Project/" ;
    window.open(URL, '_blank');
})

$("#jquery-btn2").on("click",function(){
    // window.location = "https://github.com/prashantirs/Know_Weather" ;
    URL = "https://know-weather-9821f.web.app/" ;
    window.open(URL, '_blank');
})

$("#jquery-btn3").on("click",function(){
    // window.location = "https://github.com/prashantirs/Daily_News" ;
    URL = "https://github.com/prashantirs/Daily_News" ;
    window.open(URL, '_blank');
})

$("#jquery-btn4").on("click",function(){
    // window.location = "http://social-connect-prashant.herokuapp.com/" ;
    URL = "https://calories-counter-69552.web.app/" ;
    window.open(URL, '_blank');
})
// $("#jquery-btn4").on("click",function(){
//     // window.location = "http://social-connect-prashant.herokuapp.com/" ;
//     URL = "http://social-connect-prashant.herokuapp.com/" ;
//     window.open(URL, '_blank');
// })

$("#jquery-btn5").on("click",function(){
    // window.location = "https://github.com/prashantirs/Daily_News" ;
    URL = "https://github.com/prashantirs/iNotebook" ;
    window.open(URL, '_blank');
})

//Get the button
let mybutton = document.getElementById("btn-back-to-top");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 20 ||
    document.documentElement.scrollTop > 20
  ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
mybutton.addEventListener("click", backToTop);

function backToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}


//Footer Year add

let year = new Date;
document.getElementById("year").textContent = year.getFullYear();