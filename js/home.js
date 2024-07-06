import {
  thisYear,
  toggleDescription,
  scrollToSection,
} from './dom-helper.js';

// after the page is loaded
document.addEventListener('DOMContentLoaded', () => {
  updateYear();
});

//// TEXT UPDATE ////
// update the year in the footer
function updateYear() {
  document.getElementById('year').textContent = thisYear;
}

//// EVENT LISTENERS ////
// onclick of the contact button
document.getElementById('contact-btn').addEventListener('click', () => scrollToSection('contact'));
// onclick of the learn more link
document
  .getElementById('learn-more-link')
  .addEventListener('click', () => scrollToSection('pricing'));
// onclick of the rest of the learn more buttons
document
  .getElementById('learn-more-btn-1')
  .addEventListener('click', () => scrollToSection('contact'));
document
  .getElementById('learn-more-btn-2')
  .addEventListener('click', () => scrollToSection('contact'));
document
  .getElementById('learn-more-btn-4')
  .addEventListener('click', () => scrollToSection('contact'));
// onclick of the faq boxes
document
  .querySelectorAll('.box')
  .forEach((box) => box.addEventListener('click', () => toggleDescription(box)));