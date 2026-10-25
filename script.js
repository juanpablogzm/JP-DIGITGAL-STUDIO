document.getElementById('year').textContent = new Date().getFullYear();
const nav = document.querySelector('.navbar');
addEventListener('scroll', () => nav.classList.toggle('scrolled', scrollY > 24), { passive: true });
document.querySelectorAll('.nav-link').forEach(link => link.addEventListener('click', () => document.querySelector('.navbar-collapse').classList.remove('show')));
