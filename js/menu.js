import {
  thisYear,
  hideLoading,
  toggleDescription,
  scrollToSection,
  openTranslate,
  closeTranslate,
} from './dom-helper.js';

// after the page is loaded
document.addEventListener('DOMContentLoaded', () => {
  // get user location and adjust prices
  checkLocation();
});

//// COOKIES ////
// function to get the user location
async function checkLocation() {
  // fetch the user location
  await fetch('https://ipapi.co/json/')
    .then((response) => response.json())
    .then((data) => {
      // Extract the country from the response
      const country = data.country;

      // Check language
      if (country === 'PT') {
        translateToPortugueseMenu();
      }
      if (country === 'ES') {
        translateToSpanishMenu();
      }
      if (country !== 'PT' && country !== 'ES') {
        // default language
        translateToEnglishMenu();
      }
    })
    .catch((error) => {
      console.error('Error fetching currency:', error);
    });
  hideLoading();
}

//// PAGE REDIRESCT ////
// redirect to the MENU HOME page: onclick of the try button redirect to menu/home.html
const tryBtns = document.getElementsByClassName('try-btn');
console.log(tryBtns);
for (let i = 0; i < tryBtns.length; i++) {
  tryBtns[i].addEventListener('click', () => {
    window.location.href = '#';
  });
}

//// TEXT TRANSLATION ////
// buttons to change the language
const portugueseBtn = document.getElementById('menu-portuguese');
const spanishBtn = document.getElementById('menu-spanish');
const englishBtn = document.getElementById('menu-english');

// add event listeners to the buttons
portugueseBtn.addEventListener('click', translateToPortugueseMenu);
spanishBtn.addEventListener('click', translateToSpanishMenu);
englishBtn.addEventListener('click', translateToEnglishMenu);

// translate menu to portuguese
function translateToPortugueseMenu() {
  // change the language of the page
  document.documentElement.lang = 'pt';
  // Translate text in the title
  document.title = 'Menu Digital - Para cafés ou restaurantes';
  // Translate text in the cookies div
  document.getElementById('cookies').getElementsByTagName('p')[0].innerText =
    'Este site utiliza cookies para garantir que tenha a melhor experiência nesta sessão.';
  document.getElementById('cookies').getElementsByTagName('button')[0].innerText = 'Entendi!';
  // Translate text in the navbar
  document.getElementById('menu-navbar').getElementsByTagName('h3')[0].textContent = 'Menu Digital';
  document.getElementById('menu-navbar').getElementsByTagName('button')[0].textContent = 'Experimente gratuitamente*';
  // Translate text in the home section
  document
    .getElementById('menu-home')
    .getElementsByClassName('menu-description')[0]
    .getElementsByTagName('p')[0].textContent =
    'Use gratuitamente durante 30 dias. Cancelamento automático em caso de não renovação*';
  // Translate text in the product section
  document.getElementById('menu-product').getElementsByTagName('h1')[0].textContent = 'Simples e prático.';
  document.getElementById('menu-product').getElementsByTagName('button')[0].textContent = 'Experimente por 30 dias*';
  // Translate text in the details section
  document.getElementById('menu-details').getElementsByTagName('h1')[0].textContent =
    'A solução perfeita para cafés, restaurantes e bares.';
  document.querySelector('.frame-horizontal .frame-left h4').textContent = 'Compatível com tudo.';
  document.querySelector('.frame-horizontal .frame-left p').textContent =
    'O nosso Menu Digital é compatível com 99% dos dipositivos Android e iOS. Independentemente do modelo ou da versão do sistema operacional, pode ter a certeza de que o nosso Menu Digital oferecerá uma experiência consistente e intuitiva para os seus clientes, permitindo-lhes desfrutar de todas as funcionalidades sem complicações.';
  document.querySelectorAll('.menu-frame.frame-vertical h4')[0].textContent = 'Atualizações instantâneas.';
  document.querySelectorAll('.menu-frame.frame-vertical p')[0].textContent =
    'Com o nosso Menu Digital, pode atualizar o seu menu em tempo real. Adicione, remova ou edite itens do menu com facilidade, sem a necessidade de reimprimir o menu.';
  document.querySelectorAll('.menu-frame.frame-vertical h4')[1].textContent = 'Amigos do ambiente.';
  document.querySelectorAll('.menu-frame.frame-vertical p')[1].textContent =
    'O papel é uma das principais fontes de poluição no mundo. Ao optar pelo nosso Menu Digital, está a contribuir para a redução do consumo de papel e, consequentemente, para a preservação do meio ambiente.';
  document.getElementById('menu-faq').getElementsByTagName('h1')[0].textContent = 'Perguntas Frequentes';
  document
    .getElementById('menu-faq')
    .getElementsByClassName('menu-faq-item')[0]
    .getElementsByTagName('h4')[0].textContent = 'Como posso experimentar o Menu Digital?';
  document
    .getElementById('menu-faq')
    .getElementsByClassName('menu-faq-item')[0]
    .getElementsByTagName('p')[0].textContent =
    'Pode experimentar o nosso Menu Digital gratuitamente durante 30 dias. Após o período experimental, o menu é cancelado automaticamente na ausência de renovação por parte do cliente.';
  document
    .getElementById('menu-faq')
    .getElementsByClassName('menu-faq-item')[1]
    .getElementsByTagName('h4')[0].textContent = 'Como posso adicionar o Menu Digital ao meu café, restaurante ou bar?';
  document
    .getElementById('menu-faq')
    .getElementsByClassName('menu-faq-item')[1]
    .getElementsByTagName('p')[0].textContent =
    'Para adicionar o Menu Digital ao seu café, restaurante ou bar, basta preencher o formulário de contacto disponível no nosso site. Após submissão do formulário, entraremos em contacto consigo para agendar uma reunião.';
  document
    .getElementById('menu-faq')
    .getElementsByClassName('menu-faq-item')[2]
    .getElementsByTagName('h4')[0].textContent = 'Como posso atualizar o meu menu?';
  document
    .getElementById('menu-faq')
    .getElementsByClassName('menu-faq-item')[2]
    .getElementsByTagName('p')[0].textContent =
    'Pode atualizar o seu menu em tempo real através do nosso painel de controlo. O painel de controlo é acessível a partir de qualquer dispositivo com ligação à internet.';
  document.getElementById('menu-disclaimer').getElementsByTagName('p')[0].innerHTML =
    '* A oferta está disponível por tempo limitado para novos clientes. <br>** Oferta válida durante 30 dias após a criação do menu. <br>*** O menu é cancelado automaticamente após o período de experiência na ausência de renovação por parte do cliente.';

  // Translate text in the footer
  document.querySelector('footer p').innerText = '@' + thisYear + ' The Website Builder - Construído por José Castro';

  // hide the language modal
  closeTranslate();
}

// translate menu to spanish
function translateToSpanishMenu() {
  // change the language of the page
  document.documentElement.lang = 'es';
  // Translate text in the title
  document.title = 'Menú Digital - Para cafeterías o restaurantes';
  // Translate text in the cookies div
  document.getElementById('cookies').getElementsByTagName('p')[0].innerText =
    'Este sitio web utiliza cookies para garantizar que obtenga la mejor experiencia en nuestro sitio web.';
  document.getElementById('cookies').getElementsByTagName('button')[0].innerText = '¡Entendido!';
  // Translate text in the navbar
  document.getElementById('menu-navbar').getElementsByTagName('h3')[0].textContent = 'Menú Digital';
  document.getElementById('menu-navbar').getElementsByTagName('button')[0].textContent = 'Prueba gratis*';
  // Translate text in the home section
  document
    .getElementById('menu-home')
    .getElementsByClassName('menu-description')[0]
    .getElementsByTagName('p')[0].textContent = 'Usa gratis durante 30 días. Cancelación automática si no se renueva*';
  // Translate text in the product section
  document.getElementById('menu-product').getElementsByTagName('h1')[0].textContent = 'Simple y práctico.';
  document.getElementById('menu-product').getElementsByTagName('button')[0].textContent = 'Prueba gratis por 30 días*';
  // Translate text in the details section
  document.getElementById('menu-details').getElementsByTagName('h1')[0].textContent =
    'La solución perfecta para cafeterías, restaurantes y bares.';
  document.querySelector('.frame-horizontal .frame-left h4').textContent = 'Compatible con todo.';
  document.querySelector('.frame-horizontal .frame-left p').textContent =
    'Nuestro Menú Digital es compatible con el 99% de los dispositivos Android e iOS. Independientemente del modelo o la versión del sistema operativo, puede estar seguro de que nuestro Menú Digital ofrecerá una experiencia consistente e intuitiva para sus clientes, permitiéndoles disfrutar de todas las funciones sin complicaciones.';
  document.querySelectorAll('.menu-frame.frame-vertical h4')[0].textContent = 'Actualizaciones instantáneas.';
  document.querySelectorAll('.menu-frame.frame-vertical p')[0].textContent =
    'Con nuestro Menú Digital, puede actualizar su menú en tiempo real. Agregue, elimine o edite elementos del menú con facilidad, sin necesidad de reimprimir el menú.';
  document.querySelectorAll('.menu-frame.frame-vertical h4')[1].textContent = 'Amigo del medio ambiente.';
  document.querySelectorAll('.menu-frame.frame-vertical p')[1].textContent =
    'El papel es una de las principales fuentes de contaminación en el mundo. Al optar por nuestro Menú Digital, está contribuyendo a la reducción del consumo de papel y, en consecuencia, a la preservación del medio ambiente.';
  document.getElementById('menu-faq').getElementsByTagName('h1')[0].textContent = 'Preguntas Frecuentes';
  document
    .getElementById('menu-faq')
    .getElementsByClassName('menu-faq-item')[0]
    .getElementsByTagName('h4')[0].textContent = '¿Cómo puedo probar el Menú Digital?';
  document
    .getElementById('menu-faq')
    .getElementsByClassName('menu-faq-item')[0]
    .getElementsByTagName('p')[0].textContent =
    'Puede probar nuestro Menú Digital gratis durante 30 días. Después del período de prueba, el menú se cancela automáticamente en caso de no renovación por parte del cliente.';
  document
    .getElementById('menu-faq')
    .getElementsByClassName('menu-faq-item')[1]
    .getElementsByTagName('h4')[0].textContent =
    '¿Cómo puedo agregar el Menú Digital a mi cafetería, restaurante o bar?';
  document
    .getElementById('menu-faq')
    .getElementsByClassName('menu-faq-item')[1]
    .getElementsByTagName('p')[0].textContent =
    'Para agregar el Menú Digital a su cafetería, restaurante o bar, simplemente complete el formulario de contacto disponible en nuestro sitio web. Después de enviar el formulario, nos pondremos en contacto con usted para programar una reunión.';
  document
    .getElementById('menu-faq')
    .getElementsByClassName('menu-faq-item')[2]
    .getElementsByTagName('h4')[0].textContent = '¿Cómo puedo actualizar mi menú?';
  document
    .getElementById('menu-faq')
    .getElementsByClassName('menu-faq-item')[2]
    .getElementsByTagName('p')[0].textContent =
    'Puede actualizar su menú en tiempo real a través de nuestro panel de control. El panel de control es accesible desde cualquier dispositivo con conexión a Internet.';
  document.getElementById('menu-disclaimer').getElementsByTagName('p')[0].innerHTML =
    '* La oferta está disponible por tiempo limitado para nuevos clientes. <br>** Oferta válida durante 30 días después de la creación del menú. <br>*** El menú se cancela automáticamente después del período de prueba en ausencia de renovación por parte del cliente.';

  // Translate text in the footer
  document.querySelector('footer p').innerText = '@' + thisYear + ' The Website Builder - Construido por José Castro';

  // hide the language modal
  closeTranslate();
}

// translate menu to english
function translateToEnglishMenu() {
  // change the language of the page
  document.documentElement.lang = 'en';
  // Translate text in the title
  document.title = 'Digital Menu - For Cafés or Restaurants';
  // Translate text in the cookies div
  document.getElementById('cookies').getElementsByTagName('p')[0].innerText =
    'This website uses cookies to ensure you get the best experience on our website.';
  document.getElementById('cookies').getElementsByTagName('button')[0].innerText = 'Got it!';
  // Translate text in the navbar
  document.getElementById('menu-navbar').getElementsByTagName('h3')[0].textContent = 'Digital Menu';
  document.getElementById('menu-navbar').getElementsByTagName('button')[0].textContent = 'Try for free*';
  // Translate text in the home section
  document
    .getElementById('menu-home')
    .getElementsByClassName('menu-description')[0]
    .getElementsByTagName('p')[0].textContent = 'Use for free for 30 days. Automatically cancels if not renewed*';
  // Translate text in the product section
  document.getElementById('menu-product').getElementsByTagName('h1')[0].textContent = 'Simple and practical.';
  document.getElementById('menu-product').getElementsByTagName('button')[0].textContent = 'Free for 30 days*';
  // Translate text in the details section
  document.getElementById('menu-details').getElementsByTagName('h1')[0].textContent =
    'The perfect solution for cafes, restaurants, and bars.';
  document.querySelector('.frame-horizontal .frame-left h4').textContent = 'Compatible with everything.';
  document.querySelector('.frame-horizontal .frame-left p').textContent =
    'Our Digital Menu is compatible with 99% of Android and iOS devices. Regardless of the model or version of the operating system, you can be sure that our Digital Menu will offer a consistent and intuitive experience for your customers, allowing them to enjoy all the features without complications.';
  document.querySelectorAll('.menu-frame.frame-vertical h4')[0].textContent = 'Instant updates.';
  document.querySelectorAll('.menu-frame.frame-vertical p')[0].textContent =
    'With our Digital Menu, you can update your menu in real-time. Add, remove, or edit menu items easily, without the need to reprint the menu.';
  document.querySelectorAll('.menu-frame.frame-vertical h4')[1].textContent = 'Environmentally friendly.';
  document.querySelectorAll('.menu-frame.frame-vertical p')[1].textContent =
    'Paper is one of the major sources of pollution in the world. By opting for our Digital Menu, you are contributing to the reduction of paper consumption and, consequently, to the preservation of the environment.';
  document.getElementById('menu-faq').getElementsByTagName('h1')[0].textContent = 'Frequently Asked Questions';
  document
    .getElementById('menu-faq')
    .getElementsByClassName('menu-faq-item')[0]
    .getElementsByTagName('h4')[0].textContent = 'How can I try the Digital Menu?';
  document
    .getElementById('menu-faq')
    .getElementsByClassName('menu-faq-item')[0]
    .getElementsByTagName('p')[0].textContent =
    'You can try our Digital Menu for free for 30 days. After the trial period, the menu is automatically canceled in the absence of renewal by the customer.';
  document
    .getElementById('menu-faq')
    .getElementsByClassName('menu-faq-item')[1]
    .getElementsByTagName('h4')[0].textContent = 'How can I add the Digital Menu to my café, restaurant, or bar?';
  document
    .getElementById('menu-faq')
    .getElementsByClassName('menu-faq-item')[1]
    .getElementsByTagName('p')[0].textContent =
    'To add the Digital Menu to your café, restaurant, or bar, simply fill out the contact form available on our website. After submitting the form, we will contact you to schedule a meeting.';
  document
    .getElementById('menu-faq')
    .getElementsByClassName('menu-faq-item')[2]
    .getElementsByTagName('h4')[0].textContent = 'How can I update my menu?';
  document
    .getElementById('menu-faq')
    .getElementsByClassName('menu-faq-item')[2]
    .getElementsByTagName('p')[0].textContent =
    'You can update your menu in real time through our control panel. The control panel is accessible from any device with internet connection.';
  document.getElementById('menu-disclaimer').getElementsByTagName('p')[0].innerHTML =
    '* The offer is available for a limited time to new customers. <br>** Offer valid for 30 days after menu creation. <br>*** The menu is automatically canceled after the trial period in the absence of renewal by the customer.';

  // Translate text in the footer
  document.querySelector('footer p').innerText = '@' + thisYear + ' The Website Builder - Made by José Castro';

  // hide the language modal
  closeTranslate();
}
