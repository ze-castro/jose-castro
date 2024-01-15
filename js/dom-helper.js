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
const textDescriptions = ['I need a website to promote my work',
'I need a way to sell my products online', 
'I need to manage my business internally', 
'I need an bespoke online store for my business'];

function writeDescription(num) {
  document.getElementById('textarea').value = textDescriptions[num];
  scrollToSection('contact');
}