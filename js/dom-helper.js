//// PRICES ////
// EUR - prices
let prices = [];
const pricesEUR = [50, 50, 100, 300, 1000];
const pricesUSD = [70, 70, 150, 400, 1300];
let currency = '';
const currencyEUR = '€';
const currencyUSD = '$';

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

  // detail the cookies we use in the website
  console.log('%cCookies we use:', 'font-weight: bold; font-size: 1rem;');
  console.log('');
  console.log('%cGoogle Analytics', 'font-weight: bold; font-size: 0.8rem;');
  console.log('https://policies.google.com/privacy');
  console.log('We use Google Analytics to track the number of visitors of our website.');
  console.log('');
  console.log('%cIpapi.co', 'font-weight: bold; font-size: 0.8rem;');
  console.log('https://ipapi.co/api/');
  console.log(
    'We use Ipapi.co to get the user location and translate the website to the user language. We also adjust the prices to the US users because we are based in Portugal and services there are more expensive for us.'
  );
  console.log('');
  console.log('%cLocal Storage', 'font-weight: bold; font-size: 0.8rem;');
  console.log('We use local storage to store if the user has accepted the cookies, that way we do not show the cookies bar every time the user visits the website.');
  console.log('');
  console.log('We do not store any user data. Thank you for visiting our website!');
};

//// COOKIES ////
// function to get the user location
async function checkLocation() {
  // fetch the user location
  await fetch('https://ipapi.co/json/')
    .then((response) => response.json())
    .then((data) => {
      // Extract the country from the response
      const coin = data.currency;

      // Check currency
      if (coin === 'USD') {
        // USD customers
        prices = pricesUSD;
        currency = currencyUSD;
      } else {
        // EUR customers
        prices = pricesEUR;
        currency = currencyEUR;
      }

      // Extract the country from the response
      const country = data.country;

      // Check language
      if (country === 'PT') {
        translateToPortuguese();
      }
      if (country === 'ES') {
        translateToSpanish();
      }
      if (country !== 'PT' && country !== 'ES') {
        // default language
        translateToEnglish();
      }
    })
    .catch((error) => {
      console.error('Error fetching currency:', error);
      // in case of error, get all the prices and currency elements
      let pricesElements = document.querySelectorAll('.prices');
      let currencyElements = document.querySelectorAll('.currency');
      // change the prices and currency
      pricesElements.forEach((price, i) => (price.innerText = pricesEUR[i]));
      currencyElements.forEach((coin) => (coin.innerText = currencyEUR));
    });

  // hide the loading div
  const loading = document.getElementById('loading');
  loading.style.top = '-100vh';
  setTimeout(() => {
    loading.style.display = 'none';
  }, 1000);

  // show cookies div
  const cookies = document.getElementById('cookies');
  setTimeout(() => {
    cookies.style.bottom = '2rem';
  }, 1000);
}
// accept cookies
function acceptCookies() {
  localStorage.setItem('cookies', true);
  const cookies = document.getElementById('cookies');
  cookies.style.bottom = '-5rem';
  setTimeout(() => {
    cookies.style.display = 'none';
  }, 500);
}

// check if cookies have been accepted
function checkCookies() {
  const cookies = localStorage.getItem('cookies');
  if (cookies) {
    return true;
  }
  return false;
}

//// TOOLS ////
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
// this year
const thisYear = new Date().getFullYear();

//// TEXT ////
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
  translateDiv.style.right = '-11.2rem';
  arrow.style.display = 'block';
  close.style.display = 'none';
}

// translate text to english
function translateToEnglish() {
  // change the language of the page
  document.documentElement.lang = 'en';
  // Translate text in the title
  document.title = 'Custom Websites - Focus on Privacy & Performance';
  // Translate text in the cookies div
  document.getElementById('cookies').getElementsByTagName('p')[0].innerText =
    'This website uses cookies to ensure you get the best experience on our website.';
  document.getElementById('cookies').getElementsByTagName('button')[0].innerText = 'Got it!';

  // Translate text in the welcome section
  document.getElementById('welcome').getElementsByTagName('h1')[0].innerText =
    'Privacy first, high-performance custom websites';
  document.querySelector('#welcome p').innerText = 'Starting at ' + prices[0] + currency + ' per month';
  document.querySelector('#welcome .links button').innerText = 'Contact';
  document.querySelector('#welcome .links a').innerText = 'Learn more >';

  // Translate text in the pricing section
  document.getElementById('pricing').getElementsByTagName('h1')[0].innerText = 'Get Started';
  document.querySelector('#pricing p').innerText = 'Pricing for everyone';
  document.querySelectorAll('.card h2')[0].innerText = 'Professional Website';
  document.querySelectorAll('.card ul li')[0].innerText =
    'Straightforward website solution with essential features, including multiple pages, a custom domain, a professional email account, a contact form, an annual content update and ongoing email support.';
  document.querySelectorAll('.card h2')[1].innerText = 'Wix Online Store';
  document.querySelectorAll('.card ul li')[1].innerText =
    "Launch your online store with confidence of Wix and embrace the tools you need for seamless growth and success. Customize every aspect of your store's design, add products and start selling.";
  document.querySelectorAll('.card h2')[2].innerText = 'Business Management System';
  document.querySelectorAll('.card ul li')[2].innerText =
    'Upgrade your business with a user-friendly admin panel, commission monitoring, inventory management, project oversight, and automated reporting and analytics for enhanced efficiency.';
  document.querySelectorAll('.card h2')[3].innerText = 'Custom Online Store';
  document.querySelectorAll('.card ul li')[3].innerText =
    "Kickstart your online store journey and unlock robust features to seamlessly oversee every facet of your business, whether you're just beginning or experiencing rapid growth.";
  document.querySelectorAll('.card h3').forEach((h3, i) => (h3.innerText = prices[i + 1] + currency + ' / month'));
  document.querySelectorAll('.card button').forEach((button) => (button.innerText = 'Get started'));

  // Translate text in the clients section
  document.getElementById('clients').getElementsByTagName('h1')[0].innerText = 'Want to see our work?';
  document.querySelector('#clients p').innerText = 'Confident clients rely on our expertise and trust our work';

  // Translate text in the FAQ section
  document.getElementById('faq').getElementsByTagName('h1')[0].innerText = 'Frequently Asked Questions';
  document.querySelector('#faq p').innerText = 'Here are some of the most common questions we get asked';
  document.querySelectorAll('.box-title')[0].innerText = 'What is The Website Builder?';
  document.querySelectorAll('.box-description')[0].innerText =
    'The Website Builder is a company specialized in crafting personalized websites. With expertise in web development, our team creates stunning and tailored online platforms to meet your unique needs. From captivating designs to seamless functionality, we deliver top-notch websites that effectively represent your brand and engage your audience.';
  document.querySelectorAll('.box-title')[1].innerText = 'Do you offer website maintenance services?';
  document.querySelectorAll('.box-description')[1].innerText =
    'Yes, we offer website maintenance in every package to ensure your website remains up-to-date, secure, and functioning optimally. Our maintenance services include regular backups, software updates, and technical support.';
  document.querySelectorAll('.box-title')[2].innerText = 'Do you provide search engine optimization (SEO) services?';
  document.querySelectorAll('.box-description')[2].innerText =
    "Yes, we offer comprehensive SEO services to improve your website's visibility on search engines. Our strategies include keyword research, on-page optimization, backlink building, and content optimization to enhance your website's rankings.";
  document.querySelectorAll('.box-title')[3].innerText = 'Can you integrate e-commerce functionality into my website?';
  document.querySelectorAll('.box-description')[3].innerText =
    'Absolutely! In our best package, we create a store-like website and integrate shopping cart systems, secure payment gateways, and inventory management solutions to enable smooth online transactions. If you have a lower budget, we got you covered with our Wix Online Store package.';
  document.querySelectorAll('.box-title')[4].innerText = 'How long does it take to build a website?';
  document.querySelectorAll('.box-description')[4].innerText =
    'The timeframe for building a website depends on various factors such as project complexity and client requirements. Typically, our team works diligently to deliver a fully functional website within 2-8 weeks.';
  document.querySelectorAll('.box-title')[5].innerText = 'What if I need assistance after my website is launched?';
  document.querySelectorAll('.box-description')[5].innerText =
    'We provide ongoing customer support even after your website is launched. Our dedicated support team is available to address any questions, concerns, or technical issues you may encounter, ensuring a seamless website experience.';
  // Translate text in the contact section
  document.getElementById('contact').getElementsByTagName('h1')[0].innerText = 'Any questions?';
  document.querySelector('#contact p').innerText = 'Send us a message, and we will get back to you as soon as possible';
  document.querySelector('#textarea').setAttribute('placeholder', 'Do you deliver hot dogs to Mars?');
  document.querySelector('#contact button').innerText = 'Send';

  // Translate text in the footer
  document.querySelector('footer p').innerText = '@' + thisYear + ' The Website Builder - Made by José Castro';

  // hide the language modal
  closeTranslate();
}

// translate text to portuguese
function translateToPortuguese() {
  // change the language of the page
  document.documentElement.lang = 'pt';
  // Translate text in the title
  document.title = 'Sites Personalizados - Foco em Privacidade';
  // Translate text in the cookies div
  document.getElementById('cookies').getElementsByTagName('p')[0].innerText =
    'Este site utiliza cookies para garantir que tenha a melhor experiência nesta sessão.';
  document.getElementById('cookies').getElementsByTagName('button')[0].innerText = 'Entendi';

  // Translate text in the welcome section
  document.getElementById('welcome').getElementsByTagName('h1')[0].innerText =
    'Sites para a sua empresa com foco na privacidade';
  document.querySelector('#welcome p').innerText = 'A partir de ' + prices[0] + currency + ' por mês';
  document.querySelector('#welcome .links button').innerText = 'Contacto';
  document.querySelector('#welcome .links a').innerText = 'Saiba mais >';

  // Translate text in the pricing section
  document.getElementById('pricing').getElementsByTagName('h1')[0].innerText = 'Comece Agora';
  document.querySelector('#pricing p').innerText = 'Preços para todas as empresas';
  document.querySelectorAll('.card h2')[0].innerText = 'Site Profissional';
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
    'A loja online que sempre sonhou. Construída à medida do seu negócio, com todas as funcionalidades que precisa para vender online.';
  document.querySelectorAll('.card h3').forEach((h3, i) => (h3.innerText = prices[i + 1] + currency + ' / mês'));
  document.querySelectorAll('.card button').forEach((button) => (button.innerText = 'Começar'));

  // Translate text in the clients section
  document.getElementById('clients').getElementsByTagName('h1')[0].innerText = 'Quer ver o nosso trabalho?';
  document.querySelector('#clients p').innerText = 'Clientes que confiam na nossa experiência e no nosso trabalho';

  // Translate text in the FAQ section
  document.getElementById('faq').getElementsByTagName('h1')[0].innerText = 'Perguntas Frequentes';
  document.querySelector('#faq p').innerText = 'Algumas das perguntas mais comuns que recebemos';
  document.querySelectorAll('.box-title')[0].innerText = 'O que é o The Website Builder?';
  document.querySelectorAll('.box-description')[0].innerText =
    'O The Website Builder é uma empresa de desenvolvimento web que oferece serviços de criação de sites, lojas online e sistemas de gestão empresarial. Com o nosso foco em privacidade e performance, estamos prontos para ajudar a levar o seu negócio para o próximo nível.';
  document.querySelectorAll('.box-title')[1].innerText = 'Oferecem serviços de manutenção de sites?';
  document.querySelectorAll('.box-description')[1].innerText =
    'Sim, oferecemos manutenção de sites em todos os pacotes para garantir que seu site permaneça atualizado, seguro e a funcionar de forma correta. Os nossos serviços de manutenção incluem backups regulares, atualizações de software e suporte técnico.';
  document.querySelectorAll('.box-title')[2].innerText =
    'Fornecem serviços de otimização de pesquisa (SEO)?';
  document.querySelectorAll('.box-description')[2].innerText =
    'Sim, oferecemos serviços abrangentes de SEO para melhorar a visibilidade do seu site nos motores de pesquisa. As nossas estratégias incluem pesquisa por palavras-chave, otimização on-page, construção de backlinks e otimização de conteúdo para melhorar o ranking do seu site.';
  document.querySelectorAll('.box-title')[3].innerText = 'Podem integrar funcionalidades de e-commerce ao meu site?';
  document.querySelectorAll('.box-description')[3].innerText =
    'Com certeza! No nosso melhor pacote, criamos uma loja online e integramos sistemas de carrinho de compras, gateways de pagamento seguros e soluções de gestão de inventário para facilitar transações online sem problemas. Se tem um orçamento mais baixo, também oferecemos nosso pacote Loja Online Wix para atender às suas necessidades.';
  document.querySelectorAll('.box-title')[4].innerText = 'Quanto tempo leva para construir um site?';
  document.querySelectorAll('.box-description')[4].innerText =
    'O tempo de construção do site depende do tamanho e da complexidade do projeto. No entanto, a maioria dos sites podem ser concluídos entre 1-6 semanas. Para projetos mais complexos, o tempo de construção pode ser maior.';
  document.querySelectorAll('.box-title')[5].innerText =
    'E se eu precisar de assistência depois do meu site ser lançado?';
  document.querySelectorAll('.box-description')[5].innerText =
    'Nós oferecemos suporte contínuo mesmo depois do seu site ser lançado. A nossa equipa está disponível para responder a qualquer pergunta, preocupação ou problema técnico que possa encontrar, garantindo-lhe uma experiência de website correta e sem problemas.';

  // Translate text in the contact section
  document.getElementById('contact').getElementsByTagName('h1')[0].innerText = 'Tem dúvidas?';
  document.querySelector('#contact p').innerText =
    'Envia-nos uma mensagem e entraremos em contato o mais breve possível';
  document.querySelector('#textarea').setAttribute('placeholder', 'Entregam cachorros-quentes em Marte?');
  document.querySelector('#contact button').innerText = 'Enviar';

  // Translate text in the footer
  document.querySelector('footer p').innerText = '@' + thisYear + ' The Website Builder - Construído por José Castro';

  // hide the language modal
  closeTranslate();
}

// translate text to spanish
function translateToSpanish() {
  // change the language of the page
  document.documentElement.lang = 'es';

  // Translate text in the title
  document.title = 'Sitios web personalizados - Enfoque en Privacidad';

  // Translate text in the cookies div
  document.getElementById('cookies').getElementsByTagName('p')[0].innerText =
    'Este sitio web utiliza cookies para garantizar que obtenga la mejor experiencia en nuestro sitio web.';
  document.getElementById('cookies').getElementsByTagName('button')[0].innerText = 'Entendido';

  // Translate text in the welcome section
  document.getElementById('welcome').getElementsByTagName('h1')[0].innerText =
    'Websites para tu empresa con enfoque en privacidad';
  document.querySelector('#welcome p').innerText = 'A partir de ' + prices[0] + currency + ' por mes';
  document.querySelector('#welcome .links button').innerText = 'Contacto';
  document.querySelector('#welcome .links a').innerText = 'Más información >';

  // Translate text in the pricing section
  document.getElementById('pricing').getElementsByTagName('h1')[0].innerText = 'Comienza Ahora';
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
  document.querySelectorAll('.card h3').forEach((h3, i) => (h3.innerText = prices[i + 1] + currency + ' / mes'));
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
  document.querySelector('footer p').innerText = '@' + thisYear + ' The Website Builder - Construido por José Castro';

  // hide the language modal
  closeTranslate();
}
