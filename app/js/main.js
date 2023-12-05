//Active class for submenu
const listItems = document.querySelectorAll('ul li');
listItems.forEach(function (item) {
  item.addEventListener('click', function () {
    listItems.forEach(function (li) {
      li.classList.remove('js-active');
    });
    this.classList.add('js-active');
  });
});

//pagination
const links = document.querySelectorAll('.customers__bottom-link');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

let currentIndex = 0;

function updateActiveClass() {
  links.forEach((link) => link.classList.remove('js-active-btn'));
  links[currentIndex].classList.add('js-active-btn');
}

links.forEach((link, index) => {
  link.addEventListener('click', function (event) {
    event.preventDefault();
    currentIndex = index;
    updateActiveClass();
  });
});

prevBtn.addEventListener('click', function (event) {
  event.preventDefault();
  if (currentIndex > 0) {
    currentIndex--;
    updateActiveClass();
  }
});

nextBtn.addEventListener('click', function (event) {
  event.preventDefault();
  if (currentIndex < links.length - 1) {
    currentIndex++;
    updateActiveClass();
  }
});
