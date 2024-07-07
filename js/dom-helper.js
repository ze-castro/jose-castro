//// TOOLS ////
// expand faq boxes
function toggleDescription(box) {
  // get all the boxes
  var boxes = document.querySelectorAll('.box');

  // add border-top to all boxes
  boxes.forEach((b) => {
    b.style.borderTop = '1px solid var(--light-gray)';
  });

  // check if the box is expanded
  if (box.classList.contains('expanded')) {
    box.classList.remove('expanded');
    return;
  }

  // the border-top of the next sibling must be removed
  var nextSibling = box.nextElementSibling;
  if (nextSibling) {
    nextSibling.style.borderTop = 'none';
  }

  // toggle the expanded class
  box.classList.toggle('expanded');

  // if any other box is expanded, close it
  boxes.forEach((b) => {
    if (b !== box) {
      b.classList.remove('expanded');
    }
  });
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

export { thisYear, toggleDescription, scrollToSection };
