// <------- Loading Section ------------->
let body = document.querySelector("body");
let givDiv = document.querySelector(".loader_bg");

// Remove Loading After Loading Page
window.onload = function () {
  body.removeChild(givDiv);
};
let sectionSkills = document.querySelector(".skills");
let percents = document.querySelectorAll("#percents");
let nums = document.querySelectorAll(".increase");
let started = false;
window.onscroll = function () {
  /* Percents */
  if (
    window.scrollY >=
    sectionSkills.offsetTop - sectionSkills.offsetTop / 18
  ) {
    percents.forEach((percent) => {
      percent.style.width = percent.dataset.width;
    });
  } else {
    percents.forEach((percent) => {
      percent.style.width = 0;
    });
  }
  if (
    window.scrollY >=
    sectionSkills.offsetTop - sectionSkills.offsetTop / 18
  ) {
    if (!started) {
      nums.forEach((nums) => startCount(nums));
      started = true;
    }
  } else {
    started = false;
    nums.forEach((nums) => (nums.innerHTML = 0));
  }
  function startCount(el) {
    let goal = el.dataset.goal;
    let count = setInterval(() => {
      el.textContent++;
      if (el.textContent == goal) {
        clearInterval(count);
      }
    }, 10);
  }
  let btnScroll = document.querySelector(".btnScroll");
  /* Scroll Up Button */
  if (window.scrollY >= 500) {
    btnScroll.style.display = "block";
  } else if (window.scrollY <= 500) {
    btnScroll.style.display = "none";
  }
  btnScroll.onclick = function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
};
/* Scrolling To Sections */

function removeList() {
  let section = document.querySelector(".sections");
  let on = document.getElementById("on");
  let off = document.getElementById("off");
  on.style.display = "none";
  off.style.display = "block";
  section.style.display = "none";
}

let homeLi = document.getElementById("homeLi");
homeLi.onclick = function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
  if (window.innerWidth <= 900) {
    removeList();
  }
};

let aboutLi = document.getElementById("aboutLi");
aboutLi.onclick = function () {
  let sectionAbout = document.querySelector(".about");
  window.scrollTo({
    top: sectionAbout.offsetTop - sectionAbout.offsetTop / 6,
    behavior: "smooth",
  });
  if (window.innerWidth <= 900) {
    removeList();
  }
};

let skillsLi = document.getElementById("skillsLi");
skillsLi.onclick = function () {
  window.scrollTo({
    top: sectionSkills.offsetTop - sectionSkills.offsetTop / 18,
    behavior: "smooth",
  });
  if (window.innerWidth <= 900) {
    removeList();
  }
};
let contactLi = document.getElementById("contactLi");
contactLi.onclick = function () {
  let contactSection = document.querySelector(".contact");
  window.scrollTo({
    top: contactSection.offsetTop - contactSection.offsetTop / 27,
    behavior: "smooth",
  });
  if (window.innerWidth <= 900) {
    removeList();
  }
};
/* navBar */
let section = document.querySelector(".sections");
let off = document.getElementById("off");
let on = document.getElementById("on");

off.onclick = function () {
  off.style.display = "none";
  on.style.display = "block";
  section.style.display = "flex";
};
on.onclick = function () {
  on.style.display = "none";
  off.style.display = "block";
  section.style.display = "none";
};
/*  Typing  */
//----Typing---//
var typed = new Typed("#typed", {
  strings: ["Welcome in my Website"],
  typeSpeed: 70,
  backSpeed: 30,
  backDelay: 100000,
  loop: true,
});
setTimeout(function () {
  var search = new Typed("#search", {
    strings: ["Search in my Website"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 10000,
    attr: "placeholder",
    loop: true,
  });
}, 2300);
// -------------------------- Skills Cards-------------------------------
let cer1 = document.querySelector(".cir1");
let cer2 = document.querySelector(".cir2");
let cer3 = document.querySelector(".cir3");

let element1 = document.querySelector(".element1");
let element2 = document.querySelector(".element2");
let element3 = document.querySelector(".element3");

function displayEle() {
  cer1.onclick = function () {
    element1.style.display = "block";
    cer1.style.backgroundColor = "#bb3d03";
    element2.style.display = "none";
    cer2.style.backgroundColor = "rgba(255, 255, 255, 0)";
    element3.style.display = "none";
    cer3.style.backgroundColor = "rgba(255, 255, 255, 0)";
  };
  cer2.onclick = function () {
    element2.style.display = "block";
    cer2.style.backgroundColor = "#bb3d03";
    element1.style.display = "none";
    cer1.style.backgroundColor = "rgba(255, 255, 255, 0)";
    element3.style.display = "none";
    cer3.style.backgroundColor = "rgba(255, 255, 255, 0)";
  };
  cer3.onclick = function () {
    element3.style.display = "block";
    cer3.style.backgroundColor = "#bb3d03";
    element1.style.display = "none";
    cer1.style.backgroundColor = "rgba(255, 255, 255, 0)";
    element2.style.display = "none";
    cer2.style.backgroundColor = "rgba(255, 255, 255, 0)";
  };
}
displayEle();
