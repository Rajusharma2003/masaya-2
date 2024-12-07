// When the user scrolls down 80px from the top of the document, resize the navbar's padding and the logo's font size
window.onscroll = function () {
    scrollFunction();
  };
  
  function scrollFunction() {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
      document.getElementById("navbar").style.padding = "0px 10px";
      document.getElementById("navbar").style.backgroundColor = "#000";
      document.getElementById("logo").style.width = "240px";
    } else {
      document.getElementById("navbar").style.backgroundColor = "transparent";
      document.getElementById("logo").style.width = "350px";
    }
  }
  