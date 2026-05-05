// intro logic
const intro = document.getElementById('intro');

if(localStorage.getItem('visited')){
  if(intro) intro.style.display = 'none';
}else{
  localStorage.setItem('visited', 'true');
  setTimeout(() => {
    if(intro){
      intro.style.opacity = '0';
      intro.style.transition = '0.5s';
      setTimeout(()=> intro.remove(), 500);
    }
  }, 1200);
}

// scroll animations
const elements = document.querySelectorAll('.fade-in');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add('show');
    }
  });
});

elements.forEach(el => observer.observe(el));
