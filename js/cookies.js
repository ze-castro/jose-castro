// on load of page
document.addEventListener('DOMContentLoaded', () => {
  // check cookies
  if (checkCookies()) {
    // hide the cookies div
    document.getElementById('cookies').style.display = 'none';
  } else {
    // show cookies div
    const cookies = document.getElementById('cookies');
    setTimeout(() => {
      cookies.style.bottom = '2rem';
    }, 1000);
  }

  // detail the cookies we use in the website
  console.log('%cCookies we use:', 'font-weight: bold; font-size: 1.2rem;');
  console.log('\n');
  console.log('%cGoogle Analytics', 'font-weight: bold; font-size: 1.2rem;');
  console.log('https://policies.google.com/privacy');
  console.log('We use Google Analytics to track the number of visitors of our website.');
  console.log('\n');
  console.log('%cLocal Storage', 'font-weight: bold; font-size: 1.2rem;');
  console.log(
    'We use local storage to store if the user has accepted the cookies previously, that way we do not show the cookies bar every time the user visits the website.'
  );
  console.log('\n');
  console.log('We do not store any user data. Thank you for visiting our website!');
});

// accept cookies
function acceptCookies() {
  loadGoogleAnalytics();
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
    loadGoogleAnalytics();
    return true;
  }
  return false;
}

// onclick of accept cookies button
const cookiesBtn = document.getElementById('cookies').getElementsByTagName('button')[0];
cookiesBtn.addEventListener('click', acceptCookies);

// load Google Analytics
function loadGoogleAnalytics() {
  const script = document.createElement('script');
  script.src = 'https://www.googletagmanager.com/gtag/js?id=G-ZQJTJZDSM8';
  script.async = true;
  document.head.appendChild(script);
  
  // initialize GA
  window.dataLayer = window.dataLayer || [];
  function gtag() {
    dataLayer.push(arguments);
  }
  gtag('js', new Date());
  gtag('config', 'G-ZQJTJZDSM8');
}

export { acceptCookies, checkCookies };