import { thisYear, toggleDescription, scrollToSection } from './dom-helper.js';

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
// onclick in the cv link
document.getElementById('cv-link').addEventListener('click', () => {
  const link = document.createElement('a');
  link.href = '/assets/cv.pdf';
  link.download = 'cv.pdf';
  link.click();
});

//onlick in the contact button
document.getElementById('contact-btn').addEventListener('click', () => sendEmailBudget());

// onclick of the learn more link
document
  .getElementById('learn-more-link')
  .addEventListener('click', () => scrollToSection('pricing'));

// onclick in each service
document.getElementById('learn-more-btn-1').addEventListener('click', sendEmail1);
function sendEmail1() {
  var email = 'ze.castro@icloud.com';
  var subject = '📂 Site | The Website Builder';
  var body = `
📂 Criação de Site
━━━━━━━━━━━━━━━━━━

➤ Nome: 
➤ Contacto: 

Mensagem:
━━━━━━━━━
Olá, ...


━━━━━━━━━━━━━━━━━━
📧 Enviado via website.
  `
    .trim()
    .replace(/\n/g, '%0D%0A');
  window.location.assign(`mailto:${email}?subject=${subject}&body=${body}`);
}

document.getElementById('learn-more-btn-3').addEventListener('click', sendEmailBudget);
function sendEmailBudget() {
  var email = 'ze.castro@icloud.com';
  var subject = '💼 Pedido de Orçamento | The Website Builder';
  var body = `
💼 Pedido de Orçamento
━━━━━━━━━━━━━━━━━━

➤ Nome: 
➤ Contacto: 

Mensagem:
━━━━━━━━━
Olá, ...


━━━━━━━━━━━━━━━━━━
📧 Enviado via website.
    `
    .trim()
    .replace(/\n/g, '%0D%0A');
  window.location.assign(`mailto:${email}?subject=${subject}&body=${body}`);
}

// onclick of the scheduling email
document.getElementById('scheduling-email').addEventListener('click', () => sendEmailInfo());

// onclick of the contact email
document.getElementById('contact-email').addEventListener('click', () => sendEmailInfo());
function sendEmailInfo() {
  var email = 'ze.castro@icloud.com';
  var subject = 'ℹ️ Pedido de Informação | The Website Builder';
  var body = `
  ℹ️ Pedido de Informação
  ━━━━━━━━━━━━━━━━━━
  
  ➤ Nome: 
  ➤ Contacto: 
  
  Mensagem:
  ━━━━━━━━━
  Olá, ...
  
  
  ━━━━━━━━━━━━━━━━━━
  📧 Enviado via website.
      `
    .trim()
    .replace(/\n/g, '%0D%0A');
  window.location.assign(`mailto:${email}?subject=${subject}&body=${body}`);
}

// onclick of the faq boxes
document
  .querySelectorAll('.box')
  .forEach((box) => box.addEventListener('click', () => toggleDescription(box)));
