// expand faq boxes
function toggleDescription(box) {
  box.classList.toggle('expanded');
}

//scroll to section
function scrollToSection(sectionName) {
  var section = document.getElementById(sectionName);
  var sectionOffset = section.offsetTop;
  var offset = 80;

  window.scrollTo({
    top: sectionOffset - offset,
    behavior: 'smooth',
  });
}