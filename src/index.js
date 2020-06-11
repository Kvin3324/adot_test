// // DOM variables
const infosSection = document.querySelector('.infos--section');
const videoSection = document.querySelector('.video--section');

// Function for responsive
function responsive(parentDivName, newDivName, screenWidth, screenHeight) {
  const iOS = navigator.userAgent.includes('iPhone');

  // Get the device pixel ratio
  const ratio = window.devicePixelRatio || 1;

  // Define the users device screen dimensions
  const screen = {
    width : window.screen.width * ratio,
    height : window.screen.height * ratio
  };

  // iPhone X Detection
  if (iOS && screen.width == screenWidth && screen.height === screenHeight) {
    infosSection.style.height = '66%';
    videoSection && (videoSection.style.height = '34%');
    document.querySelector(".map--section--img") && (document.querySelector(".map--section--img").style.height = '100%');
    document.querySelector(`${parentDivName}`).classList.add(`${newDivName}`);
  }
}

// Function to create elements
function createPubText(parentDomElement, ParentClassnameElement, childDomElement, childClassnameElement, arrItems = []) {
  const positionItem = ["first", "second", "third", "fourth"];

  let htmlDiv = document.createElement(`${parentDomElement}`);
  htmlDiv.setAttribute("class", `${ParentClassnameElement}`);

  for (let i = 0; i < arrItems.length; i++) {
    let htmlContent = document.createElement(`${childDomElement}`);
    htmlContent.setAttribute("class", `infos--section--${childClassnameElement}--about--${positionItem[i]} infos--section--about--${positionItem[i]}`);
    htmlContent.innerHTML = `${arrItems[i]}`;
    htmlDiv.append(htmlContent);
  }

  infosSection.appendChild(htmlDiv);
}

// Function to display slogan text after 2s
function pubSlogan() {
  const arrItems = ["Avec", "le pack Konnecté", "A partir de", "99€*"];

  setTimeout(() => {
    document.querySelector(".infos--section--title").remove();
    document.querySelector(".infos--section--logo").classList.remove("infos--section--logo");
    document.querySelector("img").classList.add("infos--section--offer--logo");

    createPubText("div", "infos--section--title--offer", "p", "offer", arrItems);

    let htmlDivMentions = document.createElement("div");
    htmlDivMentions.setAttribute("class", "infos--section--mentions");

    let htmlDivMentionsContent = document.createElement("p");
    htmlDivMentionsContent.innerHTML = `
    * Prix de vente TTC conseillé en magasin. ** Du 24/08/2017 au 31/10/2017
    `;
    let htmlDivMentionsConditionsContent = document.createElement("p");
    htmlDivMentionsConditionsContent.innerHTML = `
    Voir conditions complètes sur krys.com/offre-rentree-2017
    `;
    let htmlDivMentionsMedicalContent = document.createElement("p");
    htmlDivMentionsMedicalContent.innerHTML = `
    Dispositif médical. Consultez un professionnel de santé.
    `;

    htmlDivMentions.append(htmlDivMentionsContent, htmlDivMentionsConditionsContent, htmlDivMentionsMedicalContent);

    infosSection.appendChild(htmlDivMentions);

    responsive('.infos--section--title--offer', 'infos--section--title--offer--responsive', 1125, 2436);
    responsive('.infos--section--title--offer', 'infos--section--title--offer--responsive--iSE', 640, 1136);
    responsive('.infos--section--mentions', 'infos--section--mentions--responsive', 1125, 2436);

    textOffer(htmlDivMentions);
  }, 2000);
}

// Function to display offer text
function textOffer(element) {
  const arrItems = ["2 PAIRES A LA VUE", "1 OPTIQUE", "ANTI-LUMIERE BLEUE", "+ 1 SOLAIRE**"];

  setTimeout(() => {
    document.querySelector(".infos--section--title--offer").remove();

    createPubText("div", "infos--section--title--commercial--offer", "p", "commercial--offer", arrItems);

    infosSection.insertBefore(document.querySelector(".infos--section--title--commercial--offer"),element);

    responsive('.infos--section--title--commercial--offer', 'infos--section--title--commercial--offer--responsive', 1125, 2436);
    responsive('.infos--section--title--commercial--offer', 'infos--section--title--commercial--offer--responsive--iSE', 640, 1136);

    location();
  }, 2000);
}

// Function to display location shop
function location() {
  const arrItems = ["KRYS PALAISEAU - PARIS", "55 RUE DE PARIS","91120 PALAISEAU"];

  setTimeout(() => {
    document.querySelector(".infos--section--title--commercial--offer").remove();
    document.querySelector(".infos--section--mentions").remove();
    videoSection.classList.replace("video--section", "map--section");
    document.querySelector(".video--section--clip").classList.replace("video--section--clip", "map--section--img");
    document.querySelector(".map--section--img").removeChild(document.querySelector("video"));

    createPubText("div", "infos--section--title--location", "p", "title--location", arrItems);

    let htmlButton = document.createElement("button");
    htmlButton.setAttribute("class", "location--button");

    htmlButton.innerHTML = `ME RENDRE EN MAGASIN`;

    let iconButton = document.createElement("i");
    iconButton.setAttribute("class", "fas fa-map-marker-alt");

    let imgMap = document.createElement("img");
    imgMap.setAttribute("src", "./utils/img/Background.png");
    imgMap.setAttribute("class", "img--map");

    document.querySelector(".map--section--img").appendChild(imgMap);

    htmlButton.appendChild(iconButton);
    infosSection.appendChild(document.querySelector(".infos--section--title--location"));
    document.querySelector(".infos--section--title--location").appendChild(htmlButton);

    responsive('.infos--section--title--location', 'infos--section--title--location--responsive', 1125, 2436);
    responsive('.map--section--img', 'map--section--img--responsive--iSE', 640, 1136);
  }, 2000);
}

pubSlogan();
responsive('.infos--section--title', 'infos--section--title--responsive', 1125, 2436);
