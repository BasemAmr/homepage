var x = document.querySelector(".nvbr");
function myFunction() {
  if (x.className === "nvbr") {
    x.className += " rspnsv_nv";
  } else {
    x.className = "nvbr";
  }
}

window.addEventListener('resize', function(){
  let iframe = document.querySelector("iframe");
  let map = document.querySelector("#map");
  if (window.innerWidth > 768) {
    x.className = "nvbr";
    iframe.width = 450
    map.style.padding = `2.5rem 0`
  } else {
    iframe.width = window.innerWidth - (window.innerWidth * .15)
    map.style.padding = `2.5rem 0.5rem`
  }
});
