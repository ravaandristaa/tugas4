// TEST JS
console.log("JS aktif!");

// Navbar berubah saat discroll
window.addEventListener("scroll", function () {
  let navbar = document.querySelector(".navbar");
window.addEventListener("scroll", function () {
  let navbar = document.querySelector(".navbar");

  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});
  if (window.scrollY > 50) {
    navbar.style.boxShadow = "0 4px 10px rgba(0,0,0,0.1)";
    navbar.style.backgroundColor = "#ffffff";
  } else {
    navbar.style.boxShadow = "none";
  }
});

// Klik tombol Booking
document.querySelector(".btn-success")?.addEventListener("click", function () {
  alert("Menu booking diklik!");
});

// Animasi klik card
let cards = document.querySelectorAll(".card");

cards.forEach(card => {
  card.addEventListener("click", function () {
    card.style.transform = "scale(0.95)";
    setTimeout(() => {
      card.style.transform = "";
    }, 150);
  });
});