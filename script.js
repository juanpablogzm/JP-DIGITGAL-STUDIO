document.getElementById('year').textContent = new Date().getFullYear();
const nav = document.querySelector('.navbar');
addEventListener('scroll', () => nav.classList.toggle('scrolled', scrollY > 24), { passive: true });
document.querySelectorAll('.nav-link').forEach(link => link.addEventListener('click', () => document.querySelector('.navbar-collapse').classList.remove('show')));

const contactForm = document.querySelector('.contact-form');
const contactSuccess = new bootstrap.Modal(document.getElementById('contactSuccess'));

contactForm.addEventListener('submit', async event => {
  event.preventDefault();
  const button = contactForm.querySelector('[type="submit"]');
  const originalLabel = button.innerHTML;
  button.disabled = true;
  button.textContent = 'Enviando...';

  try {
    const response = await fetch(contactForm.action, {
      method: 'POST',
      body: new FormData(contactForm),
      headers: { Accept: 'application/json' },
    });

    if (!response.ok) throw new Error('No se pudo enviar el formulario');
    contactForm.reset();
    contactSuccess.show();
  } catch (error) {
    alert('No pudimos enviar tu solicitud. Intenta de nuevo en unos minutos.');
  } finally {
    button.disabled = false;
    button.innerHTML = originalLabel;
  }
});
