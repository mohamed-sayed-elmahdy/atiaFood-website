// Define text content for each language
const content = {
  en: {
    navbar: {
      home: "Home",
      aboutUs: "About us",
      ourTeam: "Our Team",
      partners: "Partners",
      brands: "Brands",
      contactUs: "Contact us",
      searchPlaceholder: "Search",
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
    ServicesDescription: "We are the largest wholesale food trading and delivery network in Jordan",
    servicesCards: {
      brands: {
        title: "Brands",
        description: "We are the largest wholesale food trading and delivery network in Jordan",
        link: "Read More",
      },
      distribution: {
        title: "Distribution",
        description: "We are the largest wholesale food trading and delivery network in Jordan",
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
      searchPlaceholder: "بحث",
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
    ServicesDescription: "نحن أكبر شبكة تجارة وتوزيع للمواد الغذائية بالجملة في الأردن",
    servicesCards: {
      brands: {
        title: "العلامات التجارية",
        description: "نحن أكبر شبكة تجارة وتوزيع للمواد الغذائية بالجملة في الأردن",
        link: "اقرأ المزيد",
      },
      distribution: {
        title: "التوزيع",
        description: "نحن أكبر شبكة تجارة وتوزيع للمواد الغذائية بالجملة في الأردن",
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
const contactBtn = document.getElementById("ContactBtnRight")
// Services Elements
const languageSwitcher = document.getElementById("language");
const titleElement = document.getElementById("services-title");
const descriptionElement = document.getElementById("services-description");
const brandsTitle = document.getElementById("brands-title");
const brandsDescription = document.getElementById("brands-description");
const brandsLink = document.getElementById("brand-link");
const distributionTitle = document.getElementById("distribution-title");
const distributionDescription = document.getElementById("distribution-description");
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

  document.querySelector(".fa-magnifying-glass").setAttribute(
    "title",
    content[selectedLanguage].navbar.searchPlaceholder
  );

  // Update other content
  contactElement.innerHTML = content[selectedLanguage].contact;
  followTextElement.textContent = content[selectedLanguage].followText;
  languageLabelElement.textContent = content[selectedLanguage].languageLabel;
  contactBtn.textContent = content[selectedLanguage].navbar.contactUs;

   // Update Services Elements 
   titleElement.textContent = content[selectedLanguage].ServicesTitle;
   descriptionElement.textContent = content[selectedLanguage].ServicesDescription;
 
   brandsTitle.textContent = content[selectedLanguage].servicesCards.brands.title;
   brandsDescription.textContent = content[selectedLanguage].servicesCards.brands.description;
   brandsLink.textContent = content[selectedLanguage].servicesCards.brands.link;
 
   distributionTitle.textContent = content[selectedLanguage].servicesCards.distribution.title;
   distributionDescription.textContent = content[selectedLanguage].servicesCards.distribution.description;
   distributionLink.textContent = content[selectedLanguage].servicesCards.distribution.link;
 
   marketTitle.textContent = content[selectedLanguage].servicesCards.market.title;
   marketDescription.textContent = content[selectedLanguage].servicesCards.market.description;
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


new Swiper('.cardWrapper', {
  loop: true,
  spaceBetween: 30,
  
  // pagination bullets
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true,
    width: "10px",
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    0: {
      slidesPerView: 1
    },
    768: {
      slidesPerView: 2
    },
    1024: {
      slidesPerView: 3
    }
  }
});
