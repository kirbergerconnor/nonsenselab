// Language Toggle State
let currentLang = 'en';

function toggleLanguage() {
  currentLang = currentLang === 'en' ? 'zh' : 'en';
  
  // Update toggle button text
  const langLabel = document.getElementById('langLabel');
  langLabel.textContent = currentLang === 'en' ? '中文' : 'English';

  // Translate all elements with data-en and data-zh attributes
  const translatableElements = document.querySelectorAll('[data-en][data-zh]');
  
  translatableElements.forEach(el => {
    const newText = el.getAttribute(`data-${currentLang}`);
    if (newText) {
      el.innerHTML = newText;
    }
  });
}

// Mobile Menu Toggle
function toggleMenu() {
  const navLinks = document.getElementById('navLinks');
  navLinks.classList.toggle('active');
}

// Form Submission Feedback
function handleFormSubmit(e) {
  e.preventDefault();
  const alertMsg = currentLang === 'en' 
    ? 'Thank you! Your message has been sent to Nonsense Lab.' 
    : '感謝您的留言！Nonsense Lab 將盡快回覆您。';
  alert(alertMsg);
  e.target.reset();
}