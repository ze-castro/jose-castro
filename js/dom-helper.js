// after the page is loaded
window.onload = function () {
  // get user location and adjust prices
  checkLocation();
  // check cookies
  if (checkCookies()) {
    // hide the cookies div
    document.getElementById('cookies').style.display = 'none';
    // if cookies accepted
    // ...
  }
  // check the language of the page and translate text
  checkLanguage();
};

// expand faq boxes
function toggleDescription(box) {
  box.classList.toggle('expanded');
}

// scroll to section
function scrollToSection(sectionName) {
  var section = document.getElementById(sectionName);
  var sectionOffset = section.offsetTop;
  var offset = 0;

  window.scrollTo({
    top: sectionOffset - offset,
    behavior: 'smooth',
  });
}

// click on "get started" button to write a description in textarea
const textDescriptions = [
  'I need a website to promote my work',
  'I need a way to sell my products online',
  'I need to manage my business internally',
  'I need an bespoke online store for my business',
];

function writeDescription(num) {
  document.getElementById('textarea').value = textDescriptions[num];
  scrollToSection('contact');
}

//// TEXT TRANSLATION ////
// open the language modal
function openTranslate() {
  const translateDiv = document.getElementById('translate');
  const arrow = document.getElementById('openTranslate');
  const close = document.getElementById('closeTranslate');
  translateDiv.style.right = '-0.5rem';
  arrow.style.display = 'none';
  close.style.display = 'block';
}

// close the language modal
function closeTranslate() {
  const translateDiv = document.getElementById('translate');
  const arrow = document.getElementById('openTranslate');
  const close = document.getElementById('closeTranslate');
  translateDiv.style.right = '-8rem';
  arrow.style.display = 'block';
  close.style.display = 'none';
}

// check the language of the page
function checkLanguage() {
  const language = localStorage.getItem('language');
  if (language === 'pt') {
    translateToPortuguese();
  } else if (language === 'es') {
    translateToSpanish();
  }
}

// translate text to portuguese
function translateToPortuguese() {
  // change the language of the page
  document.documentElement.lang = 'pt';
  localStorage.setItem('language', 'pt');
  closeTranslate();
  // Translate text in the cookies div
  document.getElementById('cookies').getElementsByTagName('p')[0].innerText =
    'Este site utiliza cookies para garantir que tenha a melhor experiência no nosso site.';
  document.getElementById('cookies').getElementsByTagName('button')[0].innerText = 'Entendi!';

  // Translate text in the welcome section
  document.getElementById('welcome').getElementsByTagName('h1')[0].innerText =
    'Explore um mundo de possibilidades infinitas.';
  document.querySelector('#welcome p').innerText = 'A partir de ' + pricesEUR[0] + '€ por mês';
  document.querySelector('#welcome .links button').innerText = 'Contato';
  document.querySelector('#welcome .links a').innerText = 'Saiba mais >';

  // Translate text in the pricing section
  document.getElementById('pricing').getElementsByTagName('h1')[0].innerText = 'Comece agora';
  document.querySelector('#pricing p').innerText = 'Preços para todos os projetos';
  document.querySelectorAll('.card h2')[0].innerText = 'Website Profissional';
  document.querySelectorAll('.card ul li')[0].innerText =
    'O essencial para divulgar o seu negócio na internet, incluindo várias páginas, um domínio personalizado, uma conta de email profissional, um formulário de contacto, uma atualização de conteúdo anual e suporte por email contínuo.';
  document.querySelectorAll('.card h2')[1].innerText = 'Loja Online Wix';
  document.querySelectorAll('.card ul li')[1].innerText =
    'Lance sua loja online com a confiança da Wix e acolha as ferramentas que precisa para o crescimento e sucesso do seu negócio. Personalize todos os aspectos da sua loja, adicione produtos e comece a vender.';
  document.querySelectorAll('.card h2')[2].innerText = 'Sistema de Gestão Empresarial';
  document.querySelectorAll('.card ul li')[2].innerText =
    'Um painel de administração com monitoração de comissões, gestão de stock, supervisão de projetos, relatórios automatizados e análises para uma eficiência aprimorada.';
  document.querySelectorAll('.card h2')[3].innerText = 'Loja Online Personalizada';
  document.querySelectorAll('.card ul li')[3].innerText =
    'A loja online que sempre sonhou. Contruída à medida do seu negócio, com todas as funcionalidades que precisa para vender online.';
  document.querySelectorAll('.card h3').forEach((h3, i) => (h3.innerText = pricesEUR[i + 1] + '€ / mês'));
  document.querySelectorAll('.card button').forEach((button) => (button.innerText = 'Começar'));

  // Translate text in the clients section
  document.getElementById('clients').getElementsByTagName('h1')[0].innerText = 'Quer ver nosso trabalho?';
  document.querySelector('#clients p').innerText = 'Clientes que confiam na nossa experiência e no nosso trabalho';

  // Translate text in the FAQ section
  document.getElementById('faq').getElementsByTagName('h1')[0].innerText = 'Perguntas Frequentes';
  document.querySelector('#faq p').innerText = 'Algumas das perguntas mais comuns que recebemos';
  document.querySelectorAll('.box-title')[0].innerText = 'O que é o The Website Builder?';
  document.querySelectorAll('.box-description')[0].innerText =
    'O The Website Builder é uma empresa de desenvolvimento web que oferece serviços de criação de sites, lojas online e sistemas de gestão empresarial. Com uma equipa de especialistas em design e desenvolvimento, estamos prontos para ajudar a levar o seu negócio para o próximo nível.';
  document.querySelectorAll('.box-title')[1].innerText = 'Oferecem serviços de manutenção de sites?';
  document.querySelectorAll('.box-description')[1].innerText =
    'Sim, oferecemos manutenção de websites em todos os pacotes para garantir que seu website permaneça atualizado, seguro e a funcionar de forma correta. Os nossos serviços de manutenção incluem backups regulares, atualizações de software e suporte técnico.';
  document.querySelectorAll('.box-title')[2].innerText =
    'Fornecem serviços de otimização para motores de pesquisa (SEO)?';
  document.querySelectorAll('.box-description')[2].innerText =
    'Sim, oferecemos serviços abrangentes de SEO para melhorar a visibilidade do seu site nos motores de pesquisa. As nossas estratégias incluem pesquisa por palavras-chave, otimização on-page, construção de backlinks e otimização de conteúdo para melhorar o ranking do seu site.';
  document.querySelectorAll('.box-title')[3].innerText = 'Podem integrar funcionalidades de e-commerce ao meu site?';
  document.querySelectorAll('.box-description')[3].innerText =
    'Com certeza! No nosso melhor pacote, criamos uma loja online e integramos sistemas de carrinho de compras, gateways de pagamento seguros e soluções de gestão de inventário para facilitar transações online sem problemas. Se tem um orçamento mais baixo, também oferecemos nosso pacote Loja Online Wix para atender às suas necessidades.';
  document.querySelectorAll('.box-title')[4].innerText = 'Quanto tempo leva para construir um site?';
  document.querySelectorAll('.box-description')[4].innerText =
    'O tempo de construção do site depende do tamanho e da complexidade do projeto. No entanto, a maioria dos sites podem ser concluídos entre 2-6 semanas. Para projetos mais complexos, o tempo de construção pode ser maior.';
  document.querySelectorAll('.box-title')[5].innerText =
    'E se eu precisar de assistência depois do meu site ser lançado?';
  document.querySelectorAll('.box-description')[5].innerText =
    'Nós oferecemos suporte contínuo mesmo depois do seu site ser lançado. A nossa equipa está disponível para responder a qualquer pergunta, preocupação ou problema técnico que possa encontrar, garantindo-lhe uma experiência de website correta e sem problemas.';

  // Translate text in the contact section
  document.getElementById('contact').getElementsByTagName('h1')[0].innerText = 'Tem dúvidas?';
  document.querySelector('#contact p').innerText =
    'Envie-nos uma mensagem e entraremos em contato o mais breve possível';
  document.querySelector('#textarea').setAttribute('placeholder', 'Entregam cachorros-quentes em Marte?');
  document.querySelector('#contact button').innerText = 'Enviar';

  // Translate text in the footer
  document.querySelector('footer p').innerText = '@2024 The Website Builder - Construído por ';
}

// translate text to spanish
function translateToSpanish() {
  // change the language of the page
  document.documentElement.lang = 'es';
  localStorage.setItem('language', 'es');
  closeTranslate();
  // Translate text in the cookies div
  document.getElementById('cookies').getElementsByTagName('p')[0].innerText =
    'Este sitio web utiliza cookies para garantizar que obtenga la mejor experiencia en nuestro sitio web.';
  document.getElementById('cookies').getElementsByTagName('button')[0].innerText = '¡Entendido!';

  // Translate text in the welcome section
  document.getElementById('welcome').getElementsByTagName('h1')[0].innerText =
    'Explora un mundo de posibilidades infinitas.';
  document.querySelector('#welcome p').innerText = 'A partir de ' + pricesEUR[0] + '€ por mes';
  document.querySelector('#welcome .links button').innerText = 'Contacto';
  document.querySelector('#welcome .links a').innerText = 'Más información >';

  // Translate text in the pricing section
  document.getElementById('pricing').getElementsByTagName('h1')[0].innerText = 'Comienza ahora';
  document.querySelector('#pricing p').innerText = 'Precios para todos los proyectos';
  document.querySelectorAll('.card h2')[0].innerText = 'Sitio Web Profesional';
  document.querySelectorAll('.card ul li')[0].innerText =
    'Lo esencial para promocionar su negocio, incluyendo varias páginas, un dominio personalizado, una cuenta de correo electrónico profesional, un formulario de contacto, una actualización de contenido anual y soporte continuo por correo.';
  document.querySelectorAll('.card h2')[1].innerText = 'Tienda Online Wix';
  document.querySelectorAll('.card ul li')[1].innerText =
    'Lanza tu tienda online con la confianza de Wix y acoge las herramientas que necesitas para el crecimiento y éxito de tu negocio. Personaliza todos los aspectos de tu tienda, añade productos y comienza a vender.';
  document.querySelectorAll('.card h2')[2].innerText = 'Sistema de Gestión Empresarial';
  document.querySelectorAll('.card ul li')[2].innerText =
    'Un panel de administración con monitorización de comisiones, gestión de stock, supervisión de proyectos, informes automatizados y análisis para una eficiencia mejorada.';
  document.querySelectorAll('.card h2')[3].innerText = 'Tienda Online Personalizada';
  document.querySelectorAll('.card ul li')[3].innerText =
    'La tienda online que siempre soñaste. Construida a medida de tu negocio, con todas las funcionalidades que necesitas para vender online.';
  document.querySelectorAll('.card h3').forEach((h3, i) => (h3.innerText = pricesEUR[i + 1] + '€ / mes'));
  document.querySelectorAll('.card button').forEach((button) => (button.innerText = 'Comenzar'));

  // Translate text in the clients section
  document.getElementById('clients').getElementsByTagName('h1')[0].innerText = '¿Quieres ver nuestro trabajo?';
  document.querySelector('#clients p').innerText = 'Clientes que confían en nuestra experiencia y en nuestro trabajo';

  // Translate text in the FAQ section
  document.getElementById('faq').getElementsByTagName('h1')[0].innerText = 'Preguntas Frecuentes';
  document.querySelector('#faq p').innerText = 'Algunas de las preguntas más comunes que recibimos';
  document.querySelectorAll('.box-title')[0].innerText = '¿Qué es The Website Builder?';
  document.querySelectorAll('.box-description')[0].innerText =
    'The Website Builder es una empresa de desarrollo web que ofrece servicios de creación de sitios web, tiendas online y sistemas de gestión empresarial. Con un equipo de expertos en diseño y desarrollo, estamos listos para ayudar a llevar su negocio al siguiente nivel.';
  document.querySelectorAll('.box-title')[1].innerText = '¿Ofrecen servicios de mantenimiento de sitios web?';
  document.querySelectorAll('.box-description')[1].innerText =
    'Sí, ofrecemos mantenimiento de sitios web en todos los paquetes para garantizar que su sitio web permanezca actualizado, seguro y funcionando correctamente. Nuestros servicios de mantenimiento incluyen copias de seguridad regulares, actualizaciones de software y soporte técnico.';
  document.querySelectorAll('.box-title')[2].innerText =
    '¿Ofrecen servicios de optimización para motores de búsqueda (SEO)?';
  document.querySelectorAll('.box-description')[2].innerText =
    'Sí, ofrecemos servicios integrales de SEO para mejorar la visibilidad de su sitio web en los motores de búsqueda. Nuestras estrategias incluyen investigación de palabras clave, optimización en la página, construcción de enlaces y optimización de contenido para mejorar el ranking de su sitio web.';
  document.querySelectorAll('.box-title')[3].innerText =
    '¿Pueden integrar funcionalidades de comercio electrónico en mi sitio web?';
  document.querySelectorAll('.box-description')[3].innerText =
    '¡Por supuesto! En nuestro mejor paquete, creamos una tienda online e integramos sistemas de carrito de compras, pasarelas de pago seguras y soluciones de gestión de inventario para facilitar transacciones en línea sin problemas. Si tiene un presupuesto más bajo, también ofrecemos nuestro paquete Tienda Online Wix para satisfacer sus necesidades.';
  document.querySelectorAll('.box-title')[4].innerText = '¿Cuánto tiempo lleva construir un sitio web?';
  document.querySelectorAll('.box-description')[4].innerText =
    'El tiempo de construcción del sitio web depende del tamaño y la complejidad del proyecto. Sin embargo, la mayoría de los sitios web pueden completarse entre 2-6 semanas. Para proyectos más complejos, el tiempo de construcción puede ser mayor.';
  document.querySelectorAll('.box-title')[5].innerText =
    '¿Y si necesito asistencia después de que mi sitio web sea lanzado?';
  document.querySelectorAll('.box-description')[5].innerText =
    'Ofrecemos soporte continuo incluso después de que su sitio web sea lanzado. Nuestro equipo está disponible para responder cualquier pregunta, preocupación o problema técnico que pueda encontrar, asegurándole una experiencia de sitio web sin problemas y correcta.';

  // Translate text in the contact section
  document.getElementById('contact').getElementsByTagName('h1')[0].innerText = '¿Tienes preguntas?';
  document.querySelector('#contact p').innerText =
    'Envíenos un mensaje y nos pondremos en contacto con usted lo antes posible';
  document.querySelector('#textarea').setAttribute('placeholder', '¿Entregan perritos calientes en Marte?');
  document.querySelector('#contact button').innerText = 'Enviar';

  // Translate text in the footer
  document.querySelector('footer p').innerText = '@2024 The Website Builder - Construido por ';
}

//// COOKIES ////
// function to get the user location
function checkLocation() {
  fetch('https://ipapi.co/json/')
    .then((response) => response.json())
    .then((data) => {
      // Extract the country from the response
      const currency = data.currency;

      // Check country
      if (currency === 'USD') {
        // USD customers
        adjustPricesForUSD();
      } else {
        // EUR customers
        adjustPricesForEUR();
      }
    })
    .catch((error) => {
      console.error('Error fetching currency:', error);
    });
}

// EUR - prices
const pricesEUR = [50, 50, 100, 300, 1000];
const currencyEUR = '€';

// USD - prices
const pricesUSD = [100, 100, 250, 500, 2000];
const currencyUSD = '$';

// adjust prices for USD customers
function adjustPricesForUSD() {
  // get all prices
  const prices = document.getElementsByClassName('prices');
  const currencies = document.getElementsByClassName('currency');
}

// adjust prices for EUR customers
function adjustPricesForEUR() {
  // get all prices
  const prices = document.getElementsByClassName('prices');
  const currencies = document.getElementsByClassName('currency');

  // loop through prices
  for (let i = 0; i < prices.length; i++) {
    // change the currency to EUR
    currencies[i].innerHTML = currencyEUR;

    // change the price value
    const price = prices[i];
    price.innerHTML = pricesEUR[i];
  }
}

// adjust prices for USD customers
function adjustPricesForUSD() {
  // get all prices
  const prices = document.getElementsByClassName('prices');
  const currencies = document.getElementsByClassName('currency');

  // loop through prices
  for (let i = 0; i < prices.length; i++) {
    // change the currency to USD
    currencies[i].innerHTML = currencyUSD;

    // change the price value
    const price = prices[i];
    price.innerHTML = pricesUSD[i];
  }
}

// accept cookies
function acceptCookies() {
  localStorage.setItem('cookies', true);
  document.getElementById('cookies').style.display = 'none';
}

// check if cookies have been accepted
function checkCookies() {
  const cookies = localStorage.getItem('cookies');
  if (cookies) {
    return true;
  }
  return false;
}
