//// TOOLS ////
// image loading animation
document.querySelectorAll('img').forEach(img => {
  const temp = new Image();
  temp.onload = () => img.classList.add('loaded');
  temp.src = img.src;
  if (temp.complete) img.classList.add('loaded');
});

// observer
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  },
  { threshold: 0.2 }
);

const elementsToObserve = [
  '.welcome-image',
  '.card',
  '.scheduling-container',
  '.me-container',
  '.swiper',
  '.box',
  '.contact-box',
]
  .flatMap((selector) =>
    selector.includes('.')
      ? Array.from(document.querySelectorAll(selector))
      : [document.querySelector(selector)]
  )
  .filter(Boolean);

elementsToObserve.forEach((el) => observer.observe(el));

// expand faq boxes
function toggleDescription(box) {
  // get all the boxes
  var boxes = document.querySelectorAll('.box');

  // add border-top to all boxes
  boxes.forEach((b) => {
    b.style.borderTop = '1px solid var(--gray-2)';
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
