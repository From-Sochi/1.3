// let tabs = document.querySelectorAll('.tabs-nav__btn');
// let activeTabClass = '.tabs-nav__btn--active';

// function onTabClick(event) {
//   tabs.forEach(tabs-nav__btn => tabs-nav__btn.classList.remove(activeTabClass));

//   event.currentTarget.classList.add(activeTabClass);
// }

// tabs.forEach(tabs-nav__btn => tabs-nav__btn.addEventListener('click', onTabClick));

let menu = document.querySelectorAll('.tabs-nav__btn');
let activeTabClass = '.tabs-nav__btn--active';

menu.addEventListener('click', function () {
  menu.classList.toggle('activeTabClass');
})

