// Simple lightbox for gallery
document.querySelectorAll('.gallery-item img').forEach(img => {
  img.addEventListener('click', () => {
    window.open(img.src, '_blank');
  });
});
