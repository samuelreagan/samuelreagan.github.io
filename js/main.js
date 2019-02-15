var aboutCard = document.getElementById("about");
var projectCard = document.getElementById("projects");
var aboutBtn = document.getElementById("abtBtn");
var projectBtn = document.getElementById("projectBtn");

var body = document.getElementsByTagName("body")[0];

function displayCard(card, callback) {
  card.style.display = "block";
  setTimeout(function() {
    callback();
    setTimeout(function() {
      body.style.overflow = "scroll";
    }, 300);
  },100);
}

function hideCard(card, callback) {
  body.style.overflow = "hidden";
  callback();
  setTimeout(function() {
    card.style.display = "none";
  },500);
}

aboutBtn.onclick = function() {
  displayCard(aboutCard, showAbtCard);
}

aboutCard.onclick = function() {
  hideCard(aboutCard, hideAbtCard);
}

function showAbtCard() {
  aboutCard.style.right = "0";
}

function hideAbtCard() {
  aboutCard.style.right = "100vw";
}


projectBtn.onclick = function() {
  displayCard(projectCard, showProjectCard);
}

projectCard.onclick = function() {
  hideCard(projectCard, hideProjectCard);
}

function showProjectCard() {
  projectCard.style.left = "0";
}

function hideProjectCard() {
  projectCard.style.left = "100vw";
}