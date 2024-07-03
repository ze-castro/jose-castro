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

// get the current year
const thisYear = new Date().getFullYear();

export { thisYear, toggleDescription, scrollToSection};
