// Navbar
const navCoding = document.getElementById('nav-coding');
const navDesign = document.getElementById('nav-design');
const navLanguages = document.getElementById('nav-languages');
const navOffice = document.getElementById('nav-office');
const navEducation = document.getElementById('nav-education');
const navActivities = document.getElementById('nav-activities');
const navWork = document.getElementById('nav-work');
const navPortfolio = document.getElementById('nav-portfolio');
const current = document.getElementsByClassName('active');

// Progress bars
// Coding skills
const myBarJs = document.getElementById("myBarJs");
const myBarCss = document.getElementById("myBarCss");
const myBarHtml = document.getElementById("myBarHtml");
const myBarBootstrap = document.getElementById("myBarBootstrap");
const myBarRuby = document.getElementById("myBarRuby");
const myBarRubyOnRails = document.getElementById("myBarRubyOnRails");
// Design tools
const myBarFigma = document.getElementById("myBarFigma");
const myBarPhotoshop = document.getElementById("myBarPhotoshop");
const myBarIllustrator = document.getElementById("myBarIllustrator");
const myBarInDesign = document.getElementById("myBarInDesign");
// Languages
const myBarEnglish = document.getElementById("myBarEnglish");
const myBarFrench = document.getElementById("myBarFrench");
const myBarDutch = document.getElementById("myBarDutch");
// Office tools
const myBarPowerPoint = document.getElementById("myBarPowerPoint");
const myBarExcell = document.getElementById("myBarExcell");
const myBarWord = document.getElementById("myBarWord");

// Sections
const banner = document.getElementsByClassName('hero-banner')[0];
const codingSkills = document.getElementById("coding-skills"); // const angleDesign = codingSkills.querySelector(".down");
const designTools = document.getElementById("design-tools"); // const angleLanguages = designTools.querySelector(".down");
const languages = document.getElementById("languages"); // const angleOffice = languages.querySelector(".down");
const officeTools = document.getElementById("office-tools");
const education = document.getElementById("education");
const activities = document.getElementById("activities");
const workExperience = document.getElementById("work-experience");
const portfolio = document.getElementById("portfolio");

var intersectionOptions = {
  root: null,  // use the viewport
  rootMargin: '0px',
  threshold: 0.55
}

function bannerCallback(entries, observer) {
  entries.forEach(entry => {
    if (entry.intersectionRatio >= 0.55) {
      console.log("Fully visible banner!");
      codingMove();
      if (current.length > 0) {
        current[0].className = current[0].className.replace(" active", "");
      }
    }
  });
}

function codingCallback(entries, observer) {
  entries.forEach(entry => {
    if (entry.intersectionRatio >= 0.55) {
      console.log("Fully visible coding!");
      codingMove();
      if (current.length > 0) {
        current[0].className = current[0].className.replace(" active", "");
      }
      navCoding.className += " active";
    }
  });
}

function designCallback(entries, observer) {
  entries.forEach(entry => {
    if (entry.intersectionRatio >= 0.55) {
      console.log("Fully visible design!");
      designMove();
      if (current.length > 0) {
        current[0].className = current[0].className.replace(" active", "");
      }
      navDesign.className += " active";
    }
  });
}

function languagesCallback(entries, observer) {
  entries.forEach(entry => {
    if (entry.intersectionRatio >= 0.55) {
      console.log("Fully visible languages!");
      languagesMove();
      if (current.length > 0) {
        current[0].className = current[0].className.replace(" active", "");
      }
      navLanguages.className += " active";
    }
  });
}

function officeCallback(entries, observer) {
  entries.forEach(entry => {
    if (entry.intersectionRatio >= 0.55) {
      console.log("Fully visible office!");
      officeMove();
      if (current.length > 0) {
        current[0].className = current[0].className.replace(" active", "");
      }
      navOffice.className += " active";
    }
  });
}

function educationCallback(entries, observer) {
  entries.forEach(entry => {
    if (entry.intersectionRatio >= 0.55) {
      console.log("Fully visible education!");
      if (current.length > 0) {
        current[0].className = current[0].className.replace(" active", "");
      }
      navEducation.className += " active";
    }
  });
}

function activitiesCallback(entries, observer) {
  entries.forEach(entry => {
    if (entry.intersectionRatio >= 0.55) {
      console.log("Fully visible activities!");
      if (current.length > 0) {
        current[0].className = current[0].className.replace(" active", "");
      }
      navActivities.className += " active";
    }
  });
}

function workCallback(entries, observer) {
  entries.forEach(entry => {
    if (entry.intersectionRatio >= 0.55) {
      console.log("Fully visible work-experience!");
      if (current.length > 0) {
        current[0].className = current[0].className.replace(" active", "");
      }
      navWork.className += " active";
    }
  });
}

function portfolioCallback(entries, observer) {
  entries.forEach(entry => {
    if (entry.intersectionRatio >= 0.55) {
      console.log("Fully visible portfolio!");
      if (current.length > 0) {
        current[0].className = current[0].className.replace(" active", "");
      }
      navPortfolio.className += " active";
    }
  });
}

var bannerObserver = new IntersectionObserver(bannerCallback, intersectionOptions);
var codingObserver = new IntersectionObserver(codingCallback, intersectionOptions);
var designObserver = new IntersectionObserver(designCallback, intersectionOptions);
var languagesObserver = new IntersectionObserver(languagesCallback, intersectionOptions);
var officeObserver = new IntersectionObserver(officeCallback, intersectionOptions);
var educationObserver = new IntersectionObserver(educationCallback, intersectionOptions);
var activitiesObserver = new IntersectionObserver(activitiesCallback, intersectionOptions);
var workObserver = new IntersectionObserver(workCallback, intersectionOptions);
var portfolioObserver = new IntersectionObserver(portfolioCallback, intersectionOptions);

bannerObserver.observe(banner);
codingObserver.observe(codingSkills);
designObserver.observe(designTools);
languagesObserver.observe(languages);
officeObserver.observe(officeTools);
educationObserver.observe(education);
activitiesObserver.observe(activities);
workObserver.observe(workExperience);
portfolioObserver.observe(portfolio);

var i = 0;
function codingMove() {
  if (i == 0) {
    i = 1;
    var width = 0;
    var id = setInterval(frame, 10);
    function frame() {
      if (width >= 50) {
        clearInterval(id);
        i = 0;
      } else {
        width++;
        myBarJs.style.width = width + "%";
        myBarCss.style.width = width + 25 + "%";
        myBarHtml.style.width = width + 25 + "%";
        myBarBootstrap.style.width = width + 25 + "%";
        myBarRuby.style.width = width + "%";
        myBarRubyOnRails.style.width = width - 25 + "%";
      }
    }
  }
}
function designMove() {
  if (i == 0) {
    i = 1;
    var width = 0;
    var id = setInterval(frame, 10);
    function frame() {
      if (width >= 50) {
        clearInterval(id);
        i = 0;
      } else {
        width++;
        myBarFigma.style.width = width + 25 + "%";
        myBarPhotoshop.style.width = width + "%";
        myBarIllustrator.style.width = width - 25 + "%";
        myBarInDesign.style.width = width + 25 + "%";
      }
    }
  }
}
function languagesMove() {
  if (i == 0) {
    i = 1;
    var width = 0;
    var id = setInterval(frame, 10);
    function frame() {
      if (width >= 50) {
        clearInterval(id);
        i = 0;
      } else {
        width++;
        myBarEnglish.style.width = width + 25 + "%";
        myBarFrench.style.width = width * 2 + "%";
        myBarDutch.style.width = width - 25 + "%";
      }
    }
  }
}
function officeMove() {
  if (i == 0) {
    i = 1;
    var width = 0;
    var id = setInterval(frame, 10);
    function frame() {
      if (width >= 50) {
        clearInterval(id);
        i = 0;
      } else {
        width++;
        myBarPowerPoint.style.width = width + 40 + "%";
        myBarExcell.style.width = width + "%";
        myBarWord.style.width = width + 40 + "%";
      }
    }
  }
}

// Hero banner <i class="far fa-smile"></i> document.querySelector('.container h1')
var num = -1;
var txt = "Hi, my name is Nicola Tournay and I'm a front-end developer based in Brussels";
var speed = 50;

function typeWriter() {
  if (num < txt.length) {
    document.querySelector('.hero-banner').innerHTML += txt.charAt(num);
    num++;
    setTimeout(typeWriter, speed);
  }
}

typeWriter();

// // move(myBarJs);
// // move(myBarCss);
// // move(myBarHtml);
// // move(myBarBootstrap);
// // move(myBarRuby);
// // move(myBarRubyOnRails);

// // myBarJs.style.width = width + "%";
// // myBarCss.style.width = width + "%";
// // myBarHtml.style.width = width + "%";
// // myBarBootstrap.style.width = width + "%";
// // myBarRuby.style.width = width + "%";
// // myBarRubyOnRails.style.width = width + "%";
