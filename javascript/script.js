// Selecting necessary elements
let navicon = document.querySelector(".navicon");
let cross = document.querySelector(".cross");
let navitem = document.querySelector(".navitem");
let navLinks = navitem.querySelectorAll("a");

// Event listener for navicon click (shows nav items)
navicon.addEventListener("click", function () {
  navitem.classList.toggle("active");
  cross.style.display = "block";
  navicon.style.display = "none";
});

// Event listener for cross click (hides nav items)
cross.addEventListener("click", function () {
  navitem.classList.toggle("active");
  cross.style.display = "none";
  navicon.style.display = "block";
});

// Event listeners for each nav link click (hides nav items after clicking a link)
for (let i = 0; i < navLinks.length; i++) {
  navLinks[i].addEventListener("click", function () {
    if (window.innerWidth <= 991) {
      // Check if screen width is less than or equal to 991px
      navitem.classList.remove("active");
      cross.style.display = "none";
      navicon.style.display = "block";
    }
  });
}

// Project overlay functionality
let proimg = document.getElementsByClassName("proimg");
let overscreen = document.getElementsByClassName("overscreen");

for (let i = 0; i < proimg.length; i++) {
  proimg[i].addEventListener("click", function () {
    if (overscreen[i]) {
      overscreen[i].classList.toggle("show");
    }
  });
  proimg[i].parentElement.addEventListener("mouseleave", function () {
    if (overscreen[i]) {
      overscreen[i].classList.remove("show");
    }
  });
}