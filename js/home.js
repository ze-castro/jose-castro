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
//onlick in the contact button
document.getElementById('contact-btn').addEventListener('click', () => sendEmailBudget());

// onclick of the learn more link
document
  .getElementById('learn-more-link')
  .addEventListener('click', () => scrollToSection('pricing'));

// onclick in each service
document.getElementById('learn-more-btn-1').addEventListener('click', sendEmail1);
function sendEmail1() {
  var email = 'support@thewebsitebuilder.net';
  var subject = '📂 Site | thewebsitebuilder.net';
  var body = `
📂 Criação de Site
━━━━━━━━━━━━━━━━━━

➤ Nome: 
➤ Contacto: 

Mensagem:
━━━━━━━━━
Olá, gostaria de saber mais sobre a criação de um website…


━━━━━━━━━━━━━━━━━━
📧 Enviado via thewebsitebuilder.net
  `
    .trim()
    .replace(/\n/g, '%0D%0A');
  window.location.assign(`mailto:${email}?subject=${subject}&body=${body}`);
}

document.getElementById('learn-more-btn-2').addEventListener('click', sendEmail2);
function sendEmail2() {
  var email = 'support@thewebsitebuilder.net';
  var subject = '📦 Loja Online | thewebsitebuilder.net';
  var body = `
📦 Criação de Loja Online
━━━━━━━━━━━━━━━━━━

➤ Nome: 
➤ Contacto: 

Mensagem:
━━━━━━━━━
Olá, gostaria de saber mais sobre a criação de uma loja online…


━━━━━━━━━━━━━━━━━━
📧 Enviado via thewebsitebuilder.net
  `
    .trim()
    .replace(/\n/g, '%0D%0A');
  window.location.assign(`mailto:${email}?subject=${subject}&body=${body}`);
}

document.getElementById('learn-more-btn-3').addEventListener('click', sendEmailBudget);
function sendEmailBudget() {
  var email = 'support@thewebsitebuilder.net';
  var subject = '💼 Pedido de Orçamento | thewebsitebuilder.net';
  var body = `
💼 Pedido de Orçamento
━━━━━━━━━━━━━━━━━━

➤ Nome: 
➤ Contacto: 

Mensagem:
━━━━━━━━━
Olá, ...


━━━━━━━━━━━━━━━━━━
📧 Enviado via thewebsitebuilder.net
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
  var email = 'support@thewebsitebuilder.net';
  var subject = 'ℹ️ Pedido de Informação | thewebsitebuilder.net';
  var body = `
  ℹ️ Pedido de Informação
  ━━━━━━━━━━━━━━━━━━
  
  ➤ Nome: 
  ➤ Contacto: 
  
  Mensagem:
  ━━━━━━━━━
  Olá, ...
  
  
  ━━━━━━━━━━━━━━━━━━
  📧 Enviado via thewebsitebuilder.net
      `
    .trim()
    .replace(/\n/g, '%0D%0A');
  window.location.assign(`mailto:${email}?subject=${subject}&body=${body}`);
}

// onclick of the faq boxes
document
  .querySelectorAll('.box')
  .forEach((box) => box.addEventListener('click', () => toggleDescription(box)));
