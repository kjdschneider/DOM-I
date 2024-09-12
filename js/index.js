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

// Nav DOM Manipulation
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

const navLinks = Array.from(document.getElementsByTagName('a'));
for (i=0; i<navLinks.length; i++){
  navLinks[i].textContent = siteContent["nav"][`nav-item-${i+1}`];
  //Task 3
  navLinks[i].style.color = 'green';
}

const preA = document.createElement('a');
preA.textContent = 'DOM Stuff';
const appA = document.createElement('a');
appA.textContent = 'Other DOM Stuff';
appA.style.color = 'green';
preA.style.color = 'green';

document.querySelector('nav').prepend(preA);
document.querySelector('nav').appendChild(appA);



// CTA DOM Manipulation
document.querySelector('h1').textContent = siteContent["cta"]["h1"];
document.querySelector('button').textContent = siteContent['cta']['button'];
document.getElementById('cta-img').setAttribute('src', siteContent['cta']['img-src']);


// STRETCH --------------------------
document.querySelector('button').onclick = function (){
  document.querySelector('.container').style.background = 'lightgray';
}
//-----------------------------------



// Main Content DOM Manipulation
const h4Titles = document.querySelectorAll('h4');
h4Titles[0].textContent = siteContent["main-content"]["features-h4"];
h4Titles[1].textContent = siteContent['main-content']['about-h4'];
h4Titles[2].textContent = siteContent['main-content']['services-h4'];
h4Titles[3].textContent = siteContent['main-content']['product-h4'];
h4Titles[4].textContent = siteContent['main-content']['vision-h4'];

const pTags = document.querySelectorAll('p');
pTags[0].textContent = siteContent['main-content']['features-content'];
pTags[1].textContent = siteContent['main-content']['about-content'];
pTags[2].textContent = siteContent['main-content']['services-content'];
pTags[3].textContent = siteContent['main-content']['product-content'];
pTags[4].textContent = siteContent['main-content']['vision-content'];

document.getElementById('middle-img').setAttribute('src', siteContent['main-content']['middle-img-src']);




// Contact DOM Manipulation
h4Titles[5].textContent = siteContent['contact']['contact-h4'];
pTags[5].textContent = siteContent['contact']['address'];
pTags[6].textContent = siteContent['contact']['phone'];
pTags[7].textContent = siteContent['contact']['email'];




// Footer DOM Manipulation
pTags[8].textContent = siteContent['footer']['copyright'];