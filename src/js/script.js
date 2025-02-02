// Fixed navigation
const header = document.getElementById("header");

function fixedNavbar()
{
  if (window.scrollY > 50)
  {
    header.classList.remove("absolute");
    header.classList.add('header-fixed');
  } else
  {
    header.classList.add("absolute");
    header.classList.remove('header-fixed');
  }
}

window.addEventListener("scroll", fixedNavbar);

// Navbar active
const navbarLinks = document.querySelectorAll(".navbar a");

function activeNavbar(event) {
  navbarLinks.forEach(link => link.classList.remove("text-coral-red-500"));

  event.target.classList.add("text-coral-red-500");
}

navbarLinks.forEach(link => {
  link.addEventListener("click", activeNavbar);
});

// Navbar mobile
const mobileButton = document.getElementById("mobile-menu");
const closeButton = document.getElementById("close-button");
const mobileNavbar = document.querySelector(".navbar-mobile");

function openMenu() {
  mobileNavbar.classList.toggle("navbar-mobile--show");
};

mobileButton.addEventListener("click", openMenu);
closeButton.addEventListener("click", openMenu);
document.body.addEventListener("click", function(event) {
  if (!mobileButton.contains(event.target) && !mobileNavbar.contains(event.target)) {
  mobileNavbar.classList.remove("navbar-mobile--show");
  }
});

// Scroll to top
const scrollButton = document.getElementById("scroll-to-top");

window.addEventListener("scroll", function ()
{
  if (window.scrollY > 60)
  {
    scrollButton.classList.remove("hidden");
    scrollButton.classList.add("flex");
  } else
  {
    scrollButton.classList.add("hidden");
  }
});

scrollButton.addEventListener("click", function ()
{
  window.scrollTo(0, 0);
});

// Tab
const tabPanels = document.querySelectorAll(".tab-panel");
const prevButton = document.getElementById("prev-button");
const nextButton = document.getElementById("next-button");
let currentTab = 1;

function showTab(tabIndex)
{
  tabPanels.forEach(panel => panel.classList.remove("active"));
  document.getElementById(`tab-${tabIndex}`).classList.add("active");

  // Update tombol disabled berdasarkan tab yang tersedia
  prevButton.disabled = currentTab === 1;
  nextButton.disabled = currentTab === tabPanels.length;
}

nextButton.addEventListener("click", () =>
{
  if (currentTab < tabPanels.length)
  {
    currentTab++;
    showTab(currentTab);
  }
});

prevButton.addEventListener("click", () =>
{
  if (currentTab > 1)
  {
    currentTab--;
    showTab(currentTab);
  }
});

// Initial state check
showTab(currentTab);
