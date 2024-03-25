//// TOOLS ////
// hide the loading div
function hideLoading() {
  const loading = document.getElementById('loading');
  loading.style.top = '-100vh';
  setTimeout(() => {
    loading.style.display = 'none';
  }, 1000);
}

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

//// TEXT TRANSLATION ////
// open and close the language modal
const openTranslateBtn = document.getElementById('openTranslate');
const closeTranslateBtn = document.getElementById('closeTranslate');

// add event listeners to the buttons
if (openTranslateBtn && closeTranslateBtn) {
  openTranslateBtn.addEventListener('click', openTranslate);
  closeTranslateBtn.addEventListener('click', closeTranslate);
}

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

export { thisYear, hideLoading, toggleDescription, scrollToSection, openTranslate, closeTranslate };
