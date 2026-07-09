// For future stats counters
function animateCounter(id, target) {
  let count = 0;
  const el = document.getElementById(id);
  if(!el) return;
  const interval = setInterval(() => {
    count++;
    el.textContent = count;
    if(count >= target) clearInterval(interval);
  }, 20);
}
