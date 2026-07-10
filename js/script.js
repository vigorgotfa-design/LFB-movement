// Highlight active nav link
const currentPage = window.location.pathname.split("/").pop();
document.querySelectorAll('nav a').forEach(link => {
  if(link.getAttribute('href') === currentPage) {
    link.classList.add('active');
  }
});
console.log("LFB Website Loaded - Lift Forward Better");
