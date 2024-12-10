// Define text content for each language
const content = {
  en: {
    navbar: {
      home: "Home",
      aboutUs: "About us",
      ourTeam: "Our Team",
      partners: "Partners",
      brands: "Brands",
      contactUs: "Contact Us",
      searchPlaceholder: "Search...",
    },
    contact: `
      <div class="phoneNumbersConatiner">
        <i class="fas fa-phone"></i>
        <div class="phoneNumbers" style="direction: ltr !important;">
          <a href="tel:+96264886564" class="phone" style="direction: ltr !important;"> +962 6 4886564 </a>
          <a href="tel:+96264886560" class="phone" style="direction: ltr !important;"> +962 6 4886560 </a>
        </div>
      </div>
      <a href="mailto:info@atiehfood.com" class="email">
        <i class="fas fa-envelope"></i> <span>info@atiehfood.com</span>
      </a>
    `,
    followText: "Follow us:",
    languageLabel: "Language:",
    ServicesTitle: "Our Services",
    ServicesDescription:
      "We are the largest wholesale food trading and delivery network in Jordan",
    servicesCards: {
      brands: {
        title: "Brands",
        description:
          "We are the largest wholesale food trading and delivery network in Jordan",
        link: "Read More",
      },
      distribution: {
        title: "Distribution",
        description:
          "We are the largest wholesale food trading and delivery network in Jordan",
        link: "Read More",
      },
      market: {
        title: "Market Coverage",
        description:
          "As known, the volume of sales in the Jordanian market is distributed as follows:",
        link: "Read More",
      },
    },
  },
  ar: {
    navbar: {
      home: "الرئيسية",
      aboutUs: "من نحن",
      ourTeam: "فريقنا",
      partners: "شركاؤنا",
      brands: "العلامات التجارية",
      contactUs: "اتصل بنا",
      searchPlaceholder: "بحث...",
    },
    contact: `
      <div class="phoneNumbersConatiner">
        <i class="fas fa-phone"></i>
        <div class="phoneNumbers" style="direction: ltr !important;">
          <a href="tel:+96264886564" class="phone" style="direction: ltr !important;"> +962 6 4886564 </a>
          <a href="tel:+96264886560" class="phone" style="direction: ltr !important;"> +962 6 4886560 </a>
        </div>
      </div>
      <a href="mailto:info@atiehfood.com" class="email">
        <i class="fas fa-envelope"></i> <span>info@atiehfood.com</span>
      </a>
    `,
    followText: "تابعنا على: ",
    languageLabel: "اللغة:",
    ServicesTitle: "خدماتنا",
    ServicesDescription:
      "نحن أكبر شبكة تجارة وتوزيع للمواد الغذائية بالجملة في الأردن",
    servicesCards: {
      brands: {
        title: "العلامات التجارية",
        description:
          "نحن أكبر شبكة تجارة وتوزيع للمواد الغذائية بالجملة في الأردن",
        link: "اقرأ المزيد",
      },
      distribution: {
        title: "التوزيع",
        description:
          "نحن أكبر شبكة تجارة وتوزيع للمواد الغذائية بالجملة في الأردن",
        link: "اقرأ المزيد",
      },
      market: {
        title: "تغطية السوق",
        description:
          "كما هو معلوم، يتم توزيع حجم المبيعات في السوق الأردني كالتالي",
        link: "اقرأ المزيد",
      },
    },
  },
};

// Header And Navbar elements
const contactElement = document.getElementById("contact");
const followTextElement = document.getElementById("follow-text");
const languageLabelElement = document.getElementById("language-label");
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.querySelector(".nav-links ul");
const closeMenu = document.getElementById("close-menu");
const contactBtn = document.getElementById("ContactBtnRight");
const searchInput = document.getElementById("search-input");
// Services Elements
const languageSwitcher = document.getElementById("language");
const titleElement = document.getElementById("services-title");
const descriptionElement = document.getElementById("services-description");
const brandsTitle = document.getElementById("brands-title");
const brandsDescription = document.getElementById("brands-description");
const brandsLink = document.getElementById("brand-link");
const distributionTitle = document.getElementById("distribution-title");
const distributionDescription = document.getElementById(
  "distribution-description"
);
const distributionLink = document.getElementById("distribution-link");
const marketTitle = document.getElementById("market-title");
const marketDescription = document.getElementById("market-description");
const marketLink = document.getElementById("market-link");

// Handle language switch
document.getElementById("language").addEventListener("change", (event) => {
  const selectedLanguage = event.target.value;

  // Update navbar content
  document.querySelectorAll(".linksList li a").forEach((link, index) => {
    const keys = ["home", "aboutUs", "ourTeam", "partners", "brands"];
    link.textContent = content[selectedLanguage].navbar[keys[index]];
  });

  document.querySelector(".contactButtonAndSearch button").textContent =
    content[selectedLanguage].navbar.contactUs;

  document
    .querySelector(".fa-magnifying-glass")
    .setAttribute("title", content[selectedLanguage].navbar.searchPlaceholder);

  // Update other content
  contactElement.innerHTML = content[selectedLanguage].contact;
  followTextElement.textContent = content[selectedLanguage].followText;
  languageLabelElement.textContent = content[selectedLanguage].languageLabel;
  contactBtn.textContent = content[selectedLanguage].navbar.contactUs;
  searchInput.placeholder = content[selectedLanguage].navbar.searchPlaceholder;

  // Update Services Elements
  titleElement.textContent = content[selectedLanguage].ServicesTitle;
  descriptionElement.textContent =
    content[selectedLanguage].ServicesDescription;

  brandsTitle.textContent =
    content[selectedLanguage].servicesCards.brands.title;
  brandsDescription.textContent =
    content[selectedLanguage].servicesCards.brands.description;
  brandsLink.textContent = content[selectedLanguage].servicesCards.brands.link;

  distributionTitle.textContent =
    content[selectedLanguage].servicesCards.distribution.title;
  distributionDescription.textContent =
    content[selectedLanguage].servicesCards.distribution.description;
  distributionLink.textContent =
    content[selectedLanguage].servicesCards.distribution.link;

  marketTitle.textContent =
    content[selectedLanguage].servicesCards.market.title;
  marketDescription.textContent =
    content[selectedLanguage].servicesCards.market.description;
  marketLink.textContent = content[selectedLanguage].servicesCards.market.link;

  // Update text direction for Arabic
  document.body.style.direction = selectedLanguage === "ar" ? "rtl" : "ltr";
});

// Toggle NavLinks
menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});

// Close Mobile Menu
closeMenu.addEventListener("click", () => {
  navLinks.classList.remove("show");
});

new Swiper(".cardWrapper", {
  loop: true,
  spaceBetween: 30,

  // pagination bullets
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
    width: "10px",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});

// carousel //
// 1- get DOM
let nextDom = document.getElementById("next");
let prevDom = document.getElementById("prev");
let carouselDom = document.querySelector(".carousel");
let SliderDom = carouselDom.querySelector(".carousel .list");
let thumbnailBorderDom = document.querySelector(".carousel .thumbnail");
let thumbnailItemsDom = thumbnailBorderDom.querySelectorAll(".item");
let timeDom = document.querySelector(".carousel .time");

thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
let timeRunning = 3000;
let timeAutoNext = 7000;

nextDom.onclick = function () {
  showSlider("next");
};

prevDom.onclick = function () {
  showSlider("prev");
};
let runTimeOut;

function showSlider(type) {
  let SliderItemsDom = SliderDom.querySelectorAll(".carousel .list .item");
  let thumbnailItemsDom = document.querySelectorAll(
    ".carousel .thumbnail .item"
  );

  if (type === "next") {
    SliderDom.appendChild(SliderItemsDom[0]);
    thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
    carouselDom.classList.add("next");
  } else {
    SliderDom.prepend(SliderItemsDom[SliderItemsDom.length - 1]);
    thumbnailBorderDom.prepend(thumbnailItemsDom[thumbnailItemsDom.length - 1]);
    carouselDom.classList.add("prev");
  }

  // Handle video playback
  let currentItem = SliderDom.querySelector(".item");
  let video = currentItem.querySelector("video");
  if (video) {
    video.play(); // Autoplay video if present
  }

  // Pause any videos not currently displayed
  SliderItemsDom.forEach((item) => {
    let video = item.querySelector("video");
    if (video && item !== currentItem) {
      video.pause();
    }
  });

  // Reset animation classes
  clearTimeout(runTimeOut);
  runTimeOut = setTimeout(() => {
    carouselDom.classList.remove("next");
    carouselDom.classList.remove("prev");
  }, timeRunning);
}
// counter
const counterElement = document.getElementById("counter");
let count = 0;

function updateCounter() {
  counterElement.textContent = count;
  count++;
  if (count > 70) {
    count = 0;
  }
}

setInterval(updateCounter, 1200);

// Search Input
const searchIcon = document.getElementById("search-icon");

searchIcon.addEventListener("click", () => {
  searchInput.classList.toggle("open");
  if (searchInput.classList.contains("open")) {
    searchInput.focus();
  }
});

document.addEventListener("click", (e) => {
  if (!searchIcon.contains(e.target) && !searchInput.contains(e.target)) {
    searchInput.classList.remove("open");
  }
});

// Function count-up
function countUp(element, target) {
  let current = 0;
  const interval = 220; // Speed of count
  const step = target / 100; // Calculate increment step

  const timer = setInterval(() => {
    current += step;
    if (current >= target) {
      current = target;
      clearInterval(timer);

      // Reset the counter and start again
      setTimeout(() => {
        countUp(element, target);
      }, 2000); // Delay before restarting
    }
    element.textContent = Math.floor(current) + "+";
  }, interval);
}

// Initialize counters
document.addEventListener("DOMContentLoaded", () => {
  const counters = [
    { id: "count1", target: 20 },
    { id: "count2", target: 20 },
    { id: "count3", target: 20 },
    { id: "count4", target: 20 },
  ];

  counters.forEach((counter) => {
    const element = document.getElementById(counter.id);
    countUp(element, counter.target);
  });
});

// Add functionality to play or pause video on button click
document.getElementById("play-button").addEventListener("click", function () {
  const video = document.getElementById("background-video");
  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
});
