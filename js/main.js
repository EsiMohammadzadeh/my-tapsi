const toggler = document.querySelector(".nav__toggler");
const navbar = document.querySelector(".nav");
toggler.addEventListener("click", (e) => {
  navbar.classList.toggle("nav__expanded");
});

const tabs = document.querySelectorAll(".tab");
const tabContents = document.querySelectorAll(".tab-content");
tabs.forEach((tab) => {
  tab.addEventListener("click", (e) => {
    const targetTabContent = document.querySelector(
      `#${tab.dataset.tabTarget}`
    );

    // reomve previous active classes
    tabs.forEach((tab) => tab.classList.remove("active"));
    tabContents.forEach((tabContents) =>
      tabContents.classList.remove("active")
    );

    // add new active classes
    tab.classList.add("active");
    targetTabContent.classList.add("active");
  });
});

const accordionHeaders = document.querySelectorAll('.accordion__header');
const accordion = document.querySelector('.accordion');
accordionHeaders.forEach((item) => {
    item.addEventListener('click', (e) => {
        console.log(e.target.parentElement);
        e.target.parentElement.classList.toggle('accordion__expanded');
    });
});