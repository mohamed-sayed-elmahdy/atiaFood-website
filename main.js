// Define text content for each language
// Header, Navbar and carousel
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
    carousel: [
      {
        title:
          "Leadership in Food-Stuff & Consumer-Goods Distribution in Jordan",
        description:
          "Mohammad Hussein Atieh & partners Co. – General Trading; Hashemite Kingdom of Jordan, was founded by Mr. Mohammed Hussein Atieh in 1954 in the oldest, most famous wholesale foodstuff center of Amman downtown of Jordan.",
        button: "Discover More",
      },
      {
        title:
          "Leadership in Food-Stuff & Consumer-Goods Distribution in Jordan",
        description:
          "Mohammad Hussein Atieh & partners Co. – General Trading; Hashemite Kingdom of Jordan, was founded by Mr. Mohammed Hussein Atieh in 1954 in the oldest, most famous wholesale foodstuff center of Amman downtown of Jordan.",
        button: "Discover More",
      },
      {
        title:
          "Leadership in Food-Stuff & Consumer-Goods Distribution in Jordan",
        description:
          "Mohammad Hussein Atieh & partners Co. – General Trading; Hashemite Kingdom of Jordan, was founded by Mr. Mohammed Hussein Atieh in 1954 in the oldest, most famous wholesale foodstuff center of Amman downtown of Jordan.",
        button: "Discover More",
      },
    ],
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
    carousel: [
      {
        title: "الريادة في توزيع المواد الغذائية والسلع الاستهلاكية في الأردن",
        description:
          "شركة محمد حسين عطية وشركاه - التجارة العامة؛ المملكة الأردنية الهاشمية، أسسها السيد محمد حسين عطية عام 1954 في أقدم وأشهر مركز جملة للمواد الغذائية في وسط عمان.",
        button: "اكتشف المزيد",
      },
      {
        title: "الريادة في توزيع المواد الغذائية والسلع الاستهلاكية في الأردن",
        description:
          "شركة محمد حسين عطية وشركاه - التجارة العامة؛ المملكة الأردنية الهاشمية، أسسها السيد محمد حسين عطية عام 1954 في أقدم وأشهر مركز جملة للمواد الغذائية في وسط عمان.",
        button: "اكتشف المزيد",
      },
      {
        title: "الريادة في توزيع المواد الغذائية والسلع الاستهلاكية في الأردن",
        description:
          "شركة محمد حسين عطية وشركاه - التجارة العامة؛ المملكة الأردنية الهاشمية، أسسها السيد محمد حسين عطية عام 1954 في أقدم وأشهر مركز جملة للمواد الغذائية في وسط عمان.",
        button: "اكتشف المزيد",
      },
    ],
  },
};
// About Content
const aboutContent = {
  en: {
    title: "About Mohammad Hussein Atieh & partners Co.",
    description1:
      "The company became one of the leading companies of Jordan wholesale-market. Since 1954, the company achieved successive progress in the area of trading. The second generation of sons completed the march to develop the company and strengthen its role in the Jordanian market and the national economy. The management is now driving the operations to cope with recent scientific & technological developments.",
    description2:
      "For the time-being, it represents a large number of international and regional agencies and brands by distributing their products in the Jordanian market through modern distribution systems.",
    buttonLearnMore: "Quality Services",
    buttonContactUs: "Innovation Ideas",
    readMore: "Read More",
    yearsExperience: "Years Of Experience",
  },
  ar: {
    title: "عن شركة محمد حسين عطيه وشركاه",
    description1:
      "أصبحت الشركة واحدة من الشركات الرائدة في سوق الجملة في الأردن. منذ عام 1954، حققت الشركة تقدمًا متتاليًا في مجال التجارة. أكمل الجيل الثاني من الأبناء المسيرة لتطوير الشركة وتعزيز دورها في السوق الأردني والاقتصاد الوطني. الآن تدير الإدارة العمليات لمواكبة التطورات العلمية والتكنولوجية الحديثة.",
    description2:
      "في الوقت الحالي، تمثل عددًا كبيرًا من الوكالات والعلامات التجارية الدولية والإقليمية من خلال توزيع منتجاتها في السوق الأردني باستخدام أنظمة توزيع حديثة.",
    buttonLearnMore: "خدمات عالية الجودة",
    buttonContactUs: "أفكار مبتكرة",
    readMore: "اقرأ المزيد",
    yearsExperience: "سنوات من الخبرة",
  },
};
// news Content
const newsContent = {
  en: {
    title: "News and Events",
    description:
      "We are the largest wholesale food trading and delivery network in Jordan",
    readMoreButton: "Read More",
    cards: [
      {
        date: "January 02, 2022",
        badge: "Events",
        description:
          "We are the largest wholesale food trading and delivery network in Jordan",
        buttonText: "Read More",
      },
      {
        date: "January 02, 2022",
        badge: "Events",
        description:
          "We are the largest wholesale food trading and delivery network in Jordan",
        buttonText: "Read More",
      },
      {
        date: "January 02, 2022",
        badge: "Events",
        description:
          "We are the largest wholesale food trading and delivery network in Jordan",
        buttonText: "Read More",
      },
      {
        date: "January 02, 2022",
        badge: "Events",
        description:
          "We are the largest wholesale food trading and delivery network in Jordan",
        buttonText: "Read More",
      },
      {
        date: "January 02, 2022",
        badge: "Events",
        description:
          "We are the largest wholesale food trading and delivery network in Jordan",
        buttonText: "Read More",
      },
      {
        date: "January 02, 2022",
        badge: "Events",
        description:
          "We are the largest wholesale food trading and delivery network in Jordan",
        buttonText: "Read More",
      },
      // Add other cards here
    ],
  },
  ar: {
    title: "الأخبار والفعاليات",
    description: "نحن أكبر شبكة تجارة وتوصيل أغذية بالجملة في الأردن",
    readMoreButton: "اقرأ المزيد",
    cards: [
      {
        date: "02 يناير 2022",
        badge: "فعاليات",
        description: "نحن أكبر شبكة تجارة وتوصيل أغذية بالجملة في الأردن",
        buttonText: "اقرأ المزيد",
      },
      {
        date: "02 يناير 2022",
        badge: "فعاليات",
        description: "نحن أكبر شبكة تجارة وتوصيل أغذية بالجملة في الأردن",
        buttonText: "اقرأ المزيد",
      },
      {
        date: "02 يناير 2022",
        badge: "فعاليات",
        description: "نحن أكبر شبكة تجارة وتوصيل أغذية بالجملة في الأردن",
        buttonText: "اقرأ المزيد",
      },
      {
        date: "02 يناير 2022",
        badge: "فعاليات",
        description: "نحن أكبر شبكة تجارة وتوصيل أغذية بالجملة في الأردن",
        buttonText: "اقرأ المزيد",
      },
      {
        date: "02 يناير 2022",
        badge: "فعاليات",
        description: "نحن أكبر شبكة تجارة وتوصيل أغذية بالجملة في الأردن",
        buttonText: "اقرأ المزيد",
      },
      {
        date: "02 يناير 2022",
        badge: "فعاليات",
        description: "نحن أكبر شبكة تجارة وتوصيل أغذية بالجملة في الأردن",
        buttonText: "اقرأ المزيد",
      },
      // Add other cards here
    ],
  },
};

// Video Section Content
const videoSectionContent = {
  en: {
    title: "Explore MHA",
    description:
      "Selection of high-quality items and provision of the highest level of customer service through accessing all market outlets available.",
    playButton: "▶",
  },
  ar: {
    title: "استكشف MHA",
    description:
      "اختيار العناصر عالية الجودة وتوفير أعلى مستوى من خدمة العملاء من خلال الوصول إلى جميع المنافذ المتاحة.",
    playButton: "▶",
  },
};

// Experience Section Content
const experienceSectionContent = {
  en: {
    card1: "Years Of Experience",
    card2: "Years Of Experience",
    card3: "Years Of Experience",
    card4: "Years Of Experience",
  },
  ar: {
    card1: "سنوات من الخبرة",
    card2: "سنوات من الخبرة",
    card3: "سنوات من الخبرة",
    card4: "سنوات من الخبرة",
  },
};
// Footer Top Content
const footerTopContent = {
  en: {
    addressLabel: "Address",
    address: "Amman, Jordan",
    emailLabel: "Send Email",
    email: "info@defense-me.com",
    phoneLabel: "Call Emergency",
    phone: "+962 6 5526 227",
  },
  ar: {
    addressLabel: "العنوان",
    address: "عمان، الأردن",
    emailLabel: "إرسال بريد إلكتروني",
    email: "info@defense-me.com",
    phoneLabel: "اتصل بالطوارئ",
    phone: "+962 6 5526 227",
  },
};
// Footer Bottom Content
const footerBottomContent = {
  en: {
    descriptionFooter:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
      companyHeading: "Company",
      legalHeading: "Legal",
      companyLinks: ["About Us", "Services", "Our Blog", "Contact"],
    legalLinks: ["Terms", "Privacy", "Cookies", "License"],
  },
  ar: {
    descriptionFooter:
      "هذا نص افتراضي، يُستخدم لعرض النصوص في التصاميم للتوضيح فقط.",
      companyHeading: "الشركة",
      legalHeading: "القانوني",
    companyLinks: ["من نحن", "الخدمات", "مدونتنا", "تواصل معنا"],
    legalLinks: ["الشروط", "الخصوصية", "الكوكيز", "الرخصة"],
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

  // Update carousel content
  content[selectedLanguage].carousel.forEach((item, index) => {
    document.getElementById(`carousel-title-${index + 1}`).textContent =
      item.title;
    document.getElementById(`carousel-description-${index + 1}`).textContent =
      item.description;
    document.getElementById(`carousel-button-${index + 1}`).textContent =
      item.button;
  });
  // Update About Section Content
  document.getElementById("about-title").textContent =
    aboutContent[selectedLanguage].title;
  document.getElementById("about-description").textContent =
    aboutContent[selectedLanguage].description1;
  document.getElementById("about-description2").textContent =
    aboutContent[selectedLanguage].description2;
  document.getElementById("btn-learn-more").textContent =
    aboutContent[selectedLanguage].buttonLearnMore;
  document.getElementById("btn-contact-us").textContent =
    aboutContent[selectedLanguage].buttonContactUs;
  document.getElementById("counter").nextElementSibling.textContent =
    aboutContent[selectedLanguage].yearsExperience;
  document.querySelector(".aboutButton").textContent =
    aboutContent[selectedLanguage].readMore;

  // Update News Section Content
  document.getElementById("news-title").textContent =
    newsContent[selectedLanguage].title;
  document.getElementById("news-description").textContent =
    newsContent[selectedLanguage].description;
  document.querySelector(".newsButton").textContent =
    newsContent[selectedLanguage].readMoreButton;

  // Update Cards
  const cardItems = document.querySelectorAll(".card-item");
  newsContent[selectedLanguage].cards.forEach((card, index) => {
    if (cardItems[index]) {
      cardItems[index].querySelector(
        ".date"
      ).innerHTML = `<i class="fa-regular fa-calendar"></i> ${card.date}`;
      cardItems[index].querySelector(".badge").textContent = card.badge;
      cardItems[index].querySelector(".desc").textContent = card.description;
      cardItems[index].querySelector("button").textContent = card.buttonText;
    }
  });

  // Video Section
  document.getElementById("title").textContent =
    videoSectionContent[selectedLanguage].title;
  document.getElementById("description").textContent =
    videoSectionContent[selectedLanguage].description;
  document.querySelector("#play-button span").textContent =
    videoSectionContent[selectedLanguage].playButton;

  // Experience Section
  for (let i = 1; i <= 4; i++) {
    document.getElementById(`card${i}`).querySelector("p").textContent =
      experienceSectionContent[selectedLanguage][`card${i}`];
  }
  // Footer Top Section
  document.getElementById("address-label").textContent =
    footerTopContent[selectedLanguage].addressLabel;
  document.getElementById("address").textContent =
    footerTopContent[selectedLanguage].address;
  document.getElementById("email-label").textContent =
    footerTopContent[selectedLanguage].emailLabel;
  document.getElementById("email").textContent =
    footerTopContent[selectedLanguage].email;
  document.getElementById("phone-label").textContent =
    footerTopContent[selectedLanguage].phoneLabel;
  document.getElementById("phone").textContent =
    footerTopContent[selectedLanguage].phone;

  // Footer Bottom Section
  document.getElementById("descriptionfooter").textContent =
    footerBottomContent[selectedLanguage].descriptionFooter;
    
  // Update Company and Legal Headings
  document.querySelector(".company-links h4").textContent =
    footerBottomContent[selectedLanguage].companyHeading;
  document.querySelector(".legal-links h4").textContent =
    footerBottomContent[selectedLanguage].legalHeading;

  // Update  Footer Bottom Company Links
  const companyLinks = document.querySelectorAll(".company-links ul li a");
  footerBottomContent[selectedLanguage].companyLinks.forEach((text, index) => {
    companyLinks[index].textContent = text;
  });

  // Update  Footer Bottom Legal Links
  const legalLinks = document.querySelectorAll(".legal-links ul li a");
  footerBottomContent[selectedLanguage].legalLinks.forEach((text, index) => {
    legalLinks[index].textContent = text;
  });

  // Update text direction for Arabic
  document.body.style.direction = selectedLanguage === "ar" ? "rtl" : "ltr";
  const textContainerLi = document.querySelectorAll(
    ".newnews .card-list.swiper-wrapper .card-item  .text-Container"
  );
  const dateContainerLi = document.querySelectorAll(
    ".newnews .card-list.swiper-wrapper .card-item  .text-Container .date"
  );
  const badgeContainerLi = document.querySelectorAll(
    ".newnews .card-list.swiper-wrapper .card-item  .text-Container .badge"
  );
  const descContainerLi = document.querySelectorAll(
    ".newnews .card-list.swiper-wrapper .card-item  .text-Container .desc"
  );

  for (let i = 0; i < textContainerLi.length; i++) {
    dateContainerLi[i].style.direction =
      selectedLanguage === "ar" ? "rtl" : "ltr";
    badgeContainerLi[i].style.direction =
      selectedLanguage === "ar" ? "rtl" : "ltr";
    descContainerLi[i].style.direction =
      selectedLanguage === "ar" ? "rtl" : "ltr";
  }
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
