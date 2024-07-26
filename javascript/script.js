let navicon=document.querySelector(".navicon");
let cross=document.querySelector(".cross");
let navitem=document.querySelector(".navitem");
let navLinks = navitem.querySelectorAll("a");

navicon.addEventListener("click",function(){
navitem.classList.toggle("active")
cross.style.display="block";
navicon.style.display="none";

})
cross.addEventListener("click",function(){
navitem.classList.toggle("active")
cross.style.display="none";
navicon.style.display="block";

})


navLinks.forEach(link => {
    link.addEventListener("click", function() {
      navitem.classList.remove("active");
      cross.style.display = "none";
      navicon.style.display = "block";
    });
  });
