const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

const nav = document.querySelectorAll('nav a');
nav[0].textContent = 'Services';
nav[1].textContent = 'Product';
nav[2].textContent = 'Vision';
nav[3].textContent = 'Features';
nav[4].textContent = 'About';
nav[5].textContent = 'Contact';

const navBar = document.querySelector("header nav");

const nApp = document.createElement("a");
nApp.href = "#";
nApp.textContent = 'Append'
nApp.style.color = "green"
navBar.appendChild(nApp)

const nPre = document.createElement("a");
nPre.href = "#";
nPre.textContent = 'Prepend'
nPre.style.color = "green"
navBar.prepend(nPre)





for (let i = 0; i < nav.length; i++){
  nav[i].style.color = "green";
}





const h1 = document.querySelector(".cta-text h1");
h1.innerHTML = "DOM<br>is<br>awesome";

const mainImage = document.getElementById('cta-img');
mainImage.src = siteContent['cta']['img-src'];

const button = document.querySelector('.cta-text button');
button.innerHTML = "Get Started";

const midImg = document.getElementById('middle-img');
midImg.src = "img/mid-page-accent.jpg";

const topContent = document.querySelectorAll(".main-content .top-content .text-content")

topContent[0].innerHTML = '<h4>features</h4><p>' + siteContent["main-content"]["features-content"] + '</p>';

topContent[1].innerHTML = '<h4>about</h4><p>' + siteContent["main-content"]["about-content"] + '</p>';

const bottomContent = document.querySelectorAll(".main-content .bottom-content .text-content");

bottomContent[0].innerHTML = '<h4>services</h4><p>' + siteContent["main-content"]["services-content"] + '</p>';
bottomContent[1].innerHTML = '<h4>product</h4><p>' + siteContent["main-content"]["product-content"] + '</p>';
bottomContent[2].innerHTML = '<h4>vision</h4><p>' + siteContent["main-content"]["vision-content"] + '</p>';

const btmHead = document.querySelector('.contact h4');
btmHead.textContent = "contact";

const contactInfo = document.querySelectorAll('.contact p');

contactInfo[0].textContent = siteContent["contact"]["address"];
contactInfo[1].textContent = siteContent["contact"]["phone"];
contactInfo[2].textContent = siteContent["contact"]["email"];

const footer = document.querySelector("footer p");
footer.textContent = siteContent["footer"]["copyright"];


