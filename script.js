var x = document.querySelector(".nvbr");
function myFunction() {
  if (x.className === "nvbr") {
    x.className += " rspnsv_nv";
  } else {
    x.className = "nvbr";
  }
}

window.addEventListener('resize', function(){
  if (window.innerWidth > 768) {
    console.log(window.innerWidth);
    x.className = "nvbr";
  }
});