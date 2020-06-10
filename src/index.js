// DOM variables
const infosSection = document.querySelector(".infos--section");

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

    location();
  }, 2000);
}

// Function to display location shop
function location() {
  const arrItems = ["KRYS PALAISEAU - PARIS", "55 RUE DE PARIS","91120 PALAISEAU"];

  setTimeout(() => {
    document.querySelector(".infos--section--title--commercial--offer").remove();
    document.querySelector(".infos--section--mentions").remove();
    document.querySelector(".video--section").classList.replace("video--section", "map--section");
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
  }, 2000);
}

function app() {
  pubSlogan();
}

app();
