const body = document.querySelector('body');
const sectionIphone = document.getElementById("sectionIphone");
const sectionPc = document.getElementById("sectionPc");
const sectionChargeurs = document.getElementById("sectionChargeurs");
const sectionMontres = document.getElementById("sectionMontres");
const sectionEcouteurs = document.getElementById("sectionEcouteurs");
const btnPanier = document.querySelector("#btnPanier");
const divPanier = document.querySelector("#divPanier");
const divTotale = document.getElementById("divTotale");
const divButon = document.getElementById("divButon");
const btnExplore = document.getElementById("btnExplore");
const shoppingCart = document.getElementById("shoppingCart");
const totalItem = document.getElementById("totalItem");
const btnStore = document.getElementById("btnStore");
const inputGroup = document.getElementById("inputGroup");
const input = document.getElementById("input");
const main = document.getElementById("main");
const items = document.getElementById("item");
const star = document.getElementById("star");
const tbody = document.getElementById("tbody");
const soldesTotale = document.getElementById("soldesTotale");
const infoPanier = document.getElementById("infoPanier");
const inputGroupSelect01 = document.getElementById("inputGroupSelect01");



let total = 0
let totaleQuantite = 0
//======================================sectionIphone
function afficheSectionIphone() {
  sectionIphone.innerHTML = ""
  for (let index = 0; index < tabIphone.length; index++) {
    //  console.log(tabIphone[index]);
    sectionIphone.innerHTML +=
      `<div class="listProduit d-flex col-lg-2 col-md-2 col-sm-12 ">` +
      ` <div class="item" id="item">` +
      ` <div class="star" id="star">` +
      `   <i class="bi bi-star-fill"></i>` +
      ` <i class="bi bi-star-fill"></i>` +
      ` <i class="bi bi-star-fill"></i>` +
      ` <i class="bi bi-star-fill"></i>` +
      ` <i class="bi bi-star-fill"></i>` +
      `     </div>` +
      ` <img src="${tabIphone[index].productImg}" alt="">` +
      ` <div class="infProduit">` +
      ` <h2> ${tabIphone[index].productName}</h2>` +
      `  <button  onclick ="clicProduit(${index})" class="addProduit"><i class="bi bi-cart-fill"></i></button>` +
      `   </div>` +
      ` <div class="prix">${tabIphone[index].productPrix}FCFA</div>` +
      `  </div>` +
      ` </div>`


  }

}
afficheSectionIphone()

//======================================sectionPC

function afficheSectionPc() {
  sectionPc.innerHTML = ""
  for (let index = 0; index < tabPc.length; index++) {
    //  console.log(tabPc[index]);
    sectionPc.innerHTML +=
      `<div class="listProduit d-flex col-lg-2 col-md-2 col-sm-12">` +
      ` <div class="item" id="item">` +
      ` <div class="star" id="star">` +
      `   <i class="bi bi-star-fill"></i>` +
      ` <i class="bi bi-star-fill"></i>` +
      ` <i class="bi bi-star-fill"></i>` +
      ` <i class="bi bi-star-fill"></i>` +
      ` <i class="bi bi-star-fill"></i>` +
      `     </div>` +
      ` <img src="${tabPc[index].productImg}" alt="">` +
      ` <div class="infProduit">` +
      ` <h2> ${tabPc[index].productName}</h2>` +
      `  <button onclick ="clicProduitpc(${index})" class="addProduit"><i class="bi bi-cart-fill"></i></button>` +
      `   </div>` +
      ` <div class="prix">${tabPc[index].productPrix}FCFA</div>` +
      `  </div>` +
      ` </div>`


  }

}
afficheSectionPc()

//======================================sectionChargeurs
function afficheSectionChargeur() {
  sectionChargeurs.innerHTML = ""
  for (let index = 0; index < tabChargeurs.length; index++) {
    //  console.log(tabChargeurs[index]);
    sectionChargeurs.innerHTML +=
      `<div class="listProduit d-flex col-lg-2 col-md-2 col-sm-12">` +
      ` <div class="item" id="item">` +
      ` <div class="star" id="star">` +
      `   <i class="bi bi-star-fill"></i>` +
      ` <i class="bi bi-star-fill"></i>` +
      ` <i class="bi bi-star-fill"></i>` +
      ` <i class="bi bi-star-fill"></i>` +
      ` <i class="bi bi-star-fill"></i>` +
      `     </div>` +
      ` <img src="${tabChargeurs[index].productImg}" alt="">` +
      ` <div class="infProduit">` +
      ` <h2> ${tabChargeurs[index].productName}</h2>` +
      `  <button onclick ="clicProduitchargeur(${index})" class="addProduit"><i class="bi bi-cart-fill"></i></button>` +
      `   </div>` +
      ` <div class="prix">${tabChargeurs[index].productPrix}FCFA</div>` +
      `  </div>` +
      ` </div>`


  }

}
afficheSectionChargeur()
//======================================sectionMontres
function afficheSectionMontres() {
  sectionMontres.innerHTML = ""
  for (let index = 0; index < tabMontre.length; index++) {
    //  console.log( tabMontre[index]);
    sectionMontres.innerHTML +=
      `<div class="listProduit d-flex col-lg-2 col-md-2 col-sm-12">` +
      ` <div class="item" id="item">` +
      ` <div class="star" id="star">` +
      `   <i class="bi bi-star-fill"></i>` +
      ` <i class="bi bi-star-fill"></i>` +
      ` <i class="bi bi-star-fill"></i>` +
      ` <i class="bi bi-star-fill"></i>` +
      ` <i class="bi bi-star-fill"></i>` +
      `     </div>` +
      ` <img src="${tabMontre[index].productImg}" alt="">` +
      ` <div class="infProduit">` +
      ` <h2> ${tabMontre[index].productName}</h2>` +
      `  <button onclick ="clicProduitmontre(${index})" class="addProduit"><i class="bi bi-cart-fill"></i></button>` +
      `   </div>` +
      ` <div class="prix">${tabMontre[index].productPrix}FCFA</div>` +
      `  </div>` +
      ` </div>`


  }

}
afficheSectionMontres()

//======================================sectionEcouteurs
function afficheSectionEcouteurs() {
  sectionEcouteurs.innerHTML = ""
  for (let index = 0; index < tabEcouteurs.length; index++) {
    //  console.log(tabEcouteurs[index]);
    sectionEcouteurs.innerHTML +=
      `<div class="listProduit d-flex col-lg-2 col-md-2 col-sm-12 ">` +
      ` <div class="item" id="item">` +
      ` <div class="star" id="star">` +
      `   <i class="bi bi-star-fill"></i>` +
      ` <i class="bi bi-star-fill"></i>` +
      ` <i class="bi bi-star-fill"></i>` +
      ` <i class="bi bi-star-fill"></i>` +
      ` <i class="bi bi-star-fill"></i>` +
      `     </div>` +
      ` <img src="${tabEcouteurs[index].productImg}" alt="">` +
      ` <div class="infProduit">` +
      ` <h2> ${tabEcouteurs[index].productName}</h2>` +
      `  <button onclick ="clicProduitecouteur(${index})" class="addProduit"><i class="bi bi-cart-fill"></i></button>` +
      `   </div>` +
      ` <div class="prix">${tabEcouteurs[index].productPrix}FCFA</div>` +
      `  </div>` +
      ` </div>`
  }

}
afficheSectionEcouteurs()
//=======================================affichage de panier

btnPanier.addEventListener("click", function () {
  divPanier.classList.toggle('d-none');
});





//======================================
// Fonction pour ajouter un produit au panier

let tabProduits = JSON.parse(localStorage.getItem('tab')) || [];
localStorage.setItem('tab', JSON.stringify(tabProduits));

//================Fonction pour les iphones
function clicProduit(i) {
  let achat = tabIphone[i];
  achat.quantite = 1;
  let idAchat = achat.id;
  console.log('id Achat =>', idAchat);
  let existAchat = tabProduits.find(achat => achat.id == idAchat);
  console.log('achat existe  =>', existAchat);
  if (existAchat) {
    existAchat.quantite++
    localStorage.setItem('tab', JSON.stringify(tabProduits));
  } else {
    console.log("Achat =>", achat);
    tabProduits.push(achat)
    console.log("tabProduits =>", tabProduits)
    localStorage.setItem('tab', JSON.stringify(tabProduits));
  }

}
//================= Fonction pour les pc
function clicProduitpc(i) {
  let achat = tabPc[i];
  achat.quantite = 1;
  let idAchat = achat.id;
  console.log('id Achat =>', idAchat);
  let existAchat = tabProduits.find(achat => achat.id == idAchat);
  console.log('achat existe  =>', existAchat);
  if (existAchat) {
    existAchat.quantite++
    localStorage.setItem('tab', JSON.stringify(tabProduits));
  } else {
    console.log("Achat =>", achat);
    tabProduits.push(achat)
    console.log("tabProduits =>", tabProduits)
    localStorage.setItem('tab', JSON.stringify(tabProduits));
  }

}
//=================Fonction pour les chargeurs
function clicProduitchargeur(i) {
  let achat = tabChargeurs[i];
  achat.quantite = 1;
  let idAchat = achat.id;
  console.log('id Achat =>', idAchat);
  let existAchat = tabProduits.find(achat => achat.id == idAchat);
  console.log('achat existe  =>', existAchat);
  if (existAchat) {
    existAchat.quantite++
    localStorage.setItem('tab', JSON.stringify(tabProduits));
  } else {
    console.log("Achat =>", achat);
    tabProduits.push(achat)
    console.log("tabProduits =>", tabProduits)
    localStorage.setItem('tab', JSON.stringify(tabProduits));
  }

}
//=================Fonction pour les montres
function clicProduitmontre(i) {
  let achat = tabMontre[i];
  achat.quantite = 1;
  let idAchat = achat.id;
  console.log('id Achat =>', idAchat);
  let existAchat = tabProduits.find(achat => achat.id == idAchat);
  console.log('achat existe  =>', existAchat);
  if (existAchat) {
    existAchat.quantite++
    localStorage.setItem('tab', JSON.stringify(tabProduits));
  } else {
    console.log("Achat =>", achat);
    tabProduits.push(achat)
    console.log("tabProduits =>", tabProduits)
    localStorage.setItem('tab', JSON.stringify(tabProduits));
  }

}
//=================Fonction pour les ecouteurs
function clicProduitecouteur(i) {
  let achat = tabEcouteurs[i];
  achat.quantite = 1;
  let idAchat = achat.id;
  console.log('id Achat =>', idAchat);
  let existAchat = tabProduits.find(achat => achat.id == idAchat);
  console.log('achat existe  =>', existAchat);
  if (existAchat) {
    existAchat.quantite++
    localStorage.setItem('tab', JSON.stringify(tabProduits));
  } else {
    console.log("Achat =>", achat);
    tabProduits.push(achat)
    console.log("tabProduits =>", tabProduits)
    localStorage.setItem('tab', JSON.stringify(tabProduits));
  }

}


//================= Fonction pour effacer les produits
function deleteProduit(i) {
  tabProduits.splice(i, 1);
  localStorage.setItem('tab', JSON.stringify(tabProduits));

}
//============Fonction pour calculer le solde
function soldes() {
  for (let index = 0; index < tabProduits.length; index++) {
    total += tabProduits[index].quantite * tabProduits[index].productPrix;
    totaleQuantite += tabProduits[index].quantite

  }
  soldesTotale.innerHTML = `${total} FCFA`
  infoPanier.innerHTML = `${totaleQuantite} Item - ${total} FCFA`

}
soldes()
console.log(total);

//=======================Fonction pour vider le loccal
function viderLocal() {
  localStorage.clear();
  location.reload()

}

//====================================Fonction pour mon tableau
function tableau() {
  tabProduits.forEach((elementProduit, i) => {
    tbody.innerHTML += `<tr>
    <td scope="row">  <img class = "tailleImage" src="${elementProduit.productImg}" alt="" srcset=""></td>
    <td>${elementProduit.productName}</td>
    <td>${elementProduit.quantite} X</td>
    <td>${elementProduit.productPrix}  F </td>
    <td> = ${elementProduit.quantite * elementProduit.productPrix} F</td>
    <td><i onclick= "deleteProduit(${i})" class="bi bi-trash3-fill text-dark"></i></td>
  </tr>`
  });
}
tableau()

function affichageAll() {
  afficheSectionIphone()
  afficheSectionPc()
  afficheSectionChargeur()
  afficheSectionMontres()
  afficheSectionEcouteurs()

}



function afficherIphone() {
  sectionPc.innerHTML = "";
  sectionChargeurs.innerHTML = "";
  sectionMontres.innerHTML = "";
  sectionEcouteurs.innerHTML = "";
  afficheSectionIphone()
}


function affichagePC() {
  sectionIphone.innerHTML = "";
  sectionChargeurs.innerHTML = "";
  sectionMontres.innerHTML = "";
  sectionEcouteurs.innerHTML = "";
  afficheSectionPc()
}

function affichageChargeurs() {
  sectionIphone.innerHTML = "";
  sectionPc.innerHTML = "";
  sectionMontres.innerHTML = "";
  sectionEcouteurs.innerHTML = "";
  afficheSectionChargeur()
}

function affichageMontres() {
  sectionPc.innerHTML = "";
  sectionIphone.innerHTML = "";
  sectionChargeurs.innerHTML = "";
  sectionEcouteurs.innerHTML = "";
  afficheSectionMontres()
}
function affichageEcouteurs() {
  sectionPc.innerHTML = "";
  sectionIphone.innerHTML = "";
  sectionChargeurs.innerHTML = "";
  sectionMontres.innerHTML = "";
  afficheSectionEcouteurs()
}


//==============================pour la recherche dans l'input
function btnRecherche() {
  // console.log(inputGroupSelect01.value);
  let inputValue = inputGroupSelect01.value;
  switch (inputValue) {
    case "ALL":
      affichageAll()
      break;
    case "iphones":
      afficherIphone()
      break;
    case "PC":
      affichagePC()
      break;
    case "Chageurs":
      affichageChargeurs()
      break;
    case "Montres":
      affichageMontres()
      break;
    case "Ecouteurs":
      affichageEcouteurs()
      break;

    default:
      alert("veuillez selectionner une categorie")

      break;
  }
}

//================================================pour les etoiles
const allStars = document.querySelectorAll(".bi-star-fill")
allStars.forEach((star, index) => {
  // Vérifiez s'il y a une couleur stockée en localStorage pour cette étoile
  const storedColor = localStorage.getItem(`starColor${index + 1}`);
  
  // Si une couleur est stockée, appliquez-la
  if (storedColor) {
    star.classList.toggle(storedColor);
  }

  star.addEventListener('click', (e) => {
    // Ajoutez la classe "text-white" à l'élément cliqué
    e.target.classList.toggle("text-white");

    // Stockez la couleur dans localStorage pour cette étoile
    localStorage.setItem(`starColor${index + 1}`, "text-white");
  });
});