// nav bar

let tabNav = [
    { href: "#acceuil", contenu: "Acceuil", actif: true },
    { href: "#a-propos", contenu: "A-propos", actif: false },
    { href: "#produit", contenu: "Produit", actif: false },
    { href: "#contact", contenu: "Contact", actif: false },
    { href: "#inscription", contenu: "Inscription", actif: false },
    { href: "#deconnexion", contenu: "Déconnexion", actif: false }
]
const ulNav = document.querySelector('.ul-nav');
const menu = tabNav.map((el) => {

    const liAcceuil = document.createElement('li');
    const aAcceuil = document.createElement('a');
    aAcceuil.href = el.href;
    aAcceuil.innerHTML = el.contenu;
    aAcceuil.classList.add('actif');

    // verification actif
    if (el.actif === true) {
        aAcceuil.setAttribute('class', 'actif');
    } else {
        aAcceuil.classList.remove('actif');
    }
    // gestion d'actif
    aAcceuil.addEventListener('click', () => {
        const lien = ulNav.querySelectorAll('a');
        // desactivation actif
        for (let aLien of lien) {
            aLien.classList.remove('actif');
        }
        // activation actif
        aAcceuil.setAttribute('class', 'actif');
    })
    ulNav.append(liAcceuil);
    liAcceuil.append(aAcceuil);
})
const slides = document.querySelector('.slide');
const lihumberger = document.createElement("li");
const ahumberger = document.createElement("a");
ahumberger.setAttribute("id", "burger");
ahumberger.innerHTML = "<i class='fas fa-bars'></i>";
ulNav.append(lihumberger);
lihumberger.append(ahumberger);


const closed = document.createElement("button");
closed.setAttribute("id", "ferme");
closed.innerHTML = "<i class='fas fa-times'></i>";
slides.append(closed);

closed.addEventListener('click', () => {
    setTimeout(() => {
        slides.style.display = "none";
    }, 900);
    slides.style.animation = "close 1s";
});

ahumberger.addEventListener('click', () => {
    slides.style.display = "block";
    slides.style.animation = "slide 2s";
})


const listeNav = document.querySelector('.listeNav');

const slide = tabNav.map((el) => {
    const liAcceuil = document.createElement('li');
    const aAcceuil = document.createElement('a');
    aAcceuil.href = el.href;
    aAcceuil.innerHTML = el.contenu;
    aAcceuil.classList.add('actif');

    // verification actif
    if (el.actif === true) {
        aAcceuil.setAttribute('class', 'actif');
    } else {
        aAcceuil.classList.remove('actif');
    }
    // gestion d'actif
    aAcceuil.addEventListener('click', () => {
        const lien = listeNav.querySelectorAll('a');
        // desactivation actif
        for (let aLien of lien) {
            aLien.classList.remove('actif');
        }
        // activation actif
        aAcceuil.setAttribute('class', 'actif');
    })
    listeNav.append(liAcceuil);
    liAcceuil.append(aAcceuil);
})

//§ ===========================§
//            API
//§ ===========================§
let url = "https://dummyjson.com/products?limit=300";
let prod = [];
async function produits() {
    const requete = await fetch(url, {
        method: 'GET'
    });
    if (!requete.ok) {
        alert('Problème de connexion');
    } else {
        let donner = await requete.json();
        let produit = donner.products; // maka an'ilay tableau produit rehetre
        let connecter = localStorage.getItem("connecter");

        produit.forEach((els) => {
            prod.push({
                nom: els.title,
                image: els.images[0],
                prix: els.price,
                categorie: els.category
            })
        })
        // filtrage
        filtrage(prod)

        // Bouton acheter masquer
        const btnAcheter = document.querySelectorAll(".acheter");
        btnAcheter.forEach((el) => {
            el.style.display = "none";
        })
        if (connecter) {
            // bouton acheter afficher
            const btnAcheter = document.querySelectorAll(".acheter");
            btnAcheter.forEach((el) => {
                el.style.display = "block";
            })
            click("block", prod)
        } else {
            click('none', prod)
        }
    }
}


produits();









// tableau produit
const box = document.querySelector('.box-produit')
// let tabProduit = [
//     { nom: "", image: "./images/produit (0).jpg", prix: Math.floor(Math.random() * 20) + 10, categorie: "akanjo" },
//     { nom: "", image: "./images/produit (2).jpg", prix: Math.floor(Math.random() * 20) + 10, categorie: "akanjo" },
//     { nom: "", image: "./images/produit (3).jpg", prix: Math.floor(Math.random() * 20) + 10, categorie: "akanjo" },
//     { nom: "", image: "./images/produit (4).jpg", prix: Math.floor(Math.random() * 20) + 10, categorie: "kiraro" },
//     { nom: "", image: "./images/produit (5).jpg", prix: Math.floor(Math.random() * 20) + 10, categorie: "kiraro" },
//     { nom: "", image: "./images/produit (6).jpg", prix: Math.floor(Math.random() * 20) + 10, categorie: "kiraro" },
//     { nom: "", image: "./images/produit (7).jpg", prix: Math.floor(Math.random() * 20) + 10, categorie: "kiraro" },
//     { nom: "", image: "./images/produit (8).jpg", prix: Math.floor(Math.random() * 20) + 10, categorie: "kiraro" },
//     { nom: "", image: "./images/produit (9).jpg", prix: Math.floor(Math.random() * 20) + 10, categorie: "kiraro" },
//     { nom: "", image: "./images/produit (10).jpg", prix: Math.floor(Math.random() * 20) + 10, categorie: "talon" },
//     { nom: "", image: "./images/produit (11).jpg", prix: Math.floor(Math.random() * 20) + 10, categorie: "talon" },
//     { nom: "", image: "./images/produit (12).jpg", prix: Math.floor(Math.random() * 20) + 10, categorie: "akanjo" },
//     { nom: "", image: "./images/produit (13).jpg", prix: Math.floor(Math.random() * 20) + 10, categorie: "akanjo" },
//     { nom: "", image: "./images/produit (14).jpg", prix: Math.floor(Math.random() * 20) + 10, categorie: "akanjo" },
//     { nom: "", image: "./images/produit (15).jpg", prix: Math.floor(Math.random() * 20) + 10, categorie: "kiraro" },
//     { nom: "", image: "./images/produit (16).jpg", prix: Math.floor(Math.random() * 20) + 10, categorie: "kiraro" },
//     { nom: "", image: "./images/produit (17).jpg", prix: Math.floor(Math.random() * 20) + 10, categorie: "kiraro" },
//     { nom: "", image: "./images/produit (18).jpg", prix: Math.floor(Math.random() * 20) + 10, categorie: "kiraro" },
//     { nom: "", image: "./images/produit (19).jpg", prix: Math.floor(Math.random() * 20) + 10, categorie: "talon" },
//     { nom: "", image: "./images/produit (20).jpg", prix: Math.floor(Math.random() * 20) + 10, categorie: "kiraro" },
//     { nom: "", image: "./images/produit (21).jpg", prix: Math.floor(Math.random() * 20) + 10, categorie: "kiraro" },
//     { nom: "", image: "./images/produit (22).jpg", prix: Math.floor(Math.random() * 20) + 10, categorie: "akanjo" },
//     { nom: "", image: "./images/produit (23).jpg", prix: Math.floor(Math.random() * 20) + 10, categorie: "akanjo" }
// ]
// clique
const images = document.querySelector('.parent-image');
function click(display, tab) {
    const tous = document.querySelector(".tous");
    const laptops = document.querySelector(".laptops");
    const watches = document.querySelector(".watches");
    const phones = document.querySelector(".phone");
    const tShirts = document.querySelector(".t-shirt");
    // filtrage
    let laptop = tab.filter((el) => {
        return el.categorie === "laptops";
    });
    let watche = tab.filter((el) => {
        return el.categorie === "mens-watches";
    });
    let phone = tab.filter((el) => {
        return el.categorie === "smartphones";
    });
    let tShirt = tab.filter((el) => {
        return el.categorie === "mens-shirts";
    });
    // clique filtre
    laptops.addEventListener('click', () => {
        const boxProduit = document.querySelectorAll('.box-produit');
        boxProduit.forEach((el) => {
            el.remove();
        })
        filtrage(laptop);
        window.location.href = "#btn";
        const btnAcheters = document.querySelectorAll('.acheter');
        btnAcheters.forEach((el) => {
            el.style.display = display;
        })
    });
    watches.addEventListener('click', () => {
        const boxProduit = document.querySelectorAll('.box-produit');
        boxProduit.forEach((el) => {
            el.remove();
        })
        filtrage(watche);
        window.location.href = "#btn";
        const btnAcheters = document.querySelectorAll('.acheter');
        btnAcheters.forEach((el) => {
            el.style.display = display;
        })
    });

    phones.addEventListener('click', () => {
        const boxProduit = document.querySelectorAll('.box-produit');
        boxProduit.forEach((el) => {
            el.remove();
        })
        filtrage(phone);
        window.location.href = "#btn";
        const btnAcheters = document.querySelectorAll('.acheter');
        btnAcheters.forEach((el) => {
            el.style.display = display;
        })
    });

    tShirts.addEventListener('click', () => {
        const boxProduit = document.querySelectorAll('.box-produit');
        boxProduit.forEach((el) => {
            el.remove();
        })
        filtrage(tShirt);
        window.location.href = "#btn";
        const btnAcheters = document.querySelectorAll('.acheter');
        btnAcheters.forEach((el) => {
            el.style.display = display;
        })
    });
    tous.addEventListener('click', () => {
        const boxProduit = document.querySelectorAll('.box-produit');
        boxProduit.forEach((el) => {
            el.remove()
        })
        filtrage(tab);
        window.location.href = "#btn";
        const btnAcheters = document.querySelectorAll('.acheter');
        btnAcheters.forEach((el) => {
            el.style.display = display;
        })
    });
}
function filtrage(tableau) {
    for (let tab of tableau) {
        const boxProduit = document.createElement('div');
        boxProduit.classList.add('box-produit');
        const image = document.createElement('img');
        image.setAttribute("src", tab.image);
        image.classList.add('kiraro');

        const espaces = document.createElement('div');
        espaces.classList.add('espace');
        const prix = document.createElement('div');
        prix.classList.add("prix-un");
        const h2 = document.createElement("h2");
        const etoile = document.createElement("div");
        etoile.classList.add("star");
        const etoileUn = document.createElement("i");
        etoileUn.setAttribute("class", "fas fa-star");
        const etoileDeux = document.createElement("i");
        etoileDeux.setAttribute("class", "fas fa-star-half-alt");
        const etoileTrois = document.createElement("i");
        etoileTrois.setAttribute("class", "fas fa-star");

        const bouton = document.createElement("div");
        bouton.classList.add("boutons");
        const boutons = document.createElement("button"); // bouton acheter
        boutons.classList.add("acheter");
        h2.classList.add("prix");
        h2.innerHTML = `${tab.prix} €`;
        boutons.innerHTML = "Acheter";


        images.append(boxProduit);
        boxProduit.append(image);
        boxProduit.append(espaces);
        espaces.append(prix);
        prix.append(h2);
        espaces.append(etoile);
        etoile.append(etoileUn);
        etoile.append(etoileDeux);
        etoile.append(etoileTrois);
        boxProduit.append(bouton);
        bouton.append(boutons);

    }
}

// bouton acheter masqué
const btnAcheter = document.querySelectorAll('.acheter');
btnAcheter.forEach((el) => {
    el.style.display = "none";
})
// chiffre de progression
const premiers = document.querySelector(".h1Un");
const deuxiemes = document.querySelector(".h1Deux");
const troisiemes = document.querySelector(".h1Trois");

deuxiemes.innerHTML = 0;
premiers.innerHTML = 0;
troisiemes.innerHTML = 0;

let projet = setInterval(() => {
    premiers.innerHTML = ++premiers.innerHTML;
    if (premiers.textContent === "30") {
        clearInterval(projet);
    }
}, 100)

let client = setInterval(() => {
    deuxiemes.innerHTML = ++deuxiemes.innerHTML;
    if (deuxiemes.textContent === "71") {
        clearInterval(client);
    }
}, organiserIncr(30, 100, 71));
let membres = setInterval(() => {
    troisiemes.innerHTML = ++troisiemes.innerHTML;
    if (troisiemes.textContent === "47") {
        clearInterval(membres);
    }
}, organiserIncr(30, 100, 47));
function organiserIncr(chiffrePrincipal, tempEnMs, chiffreSeconde) {
    // total du temps jusqu'à la fin du chiffre
    let totalTemps = tempEnMs * chiffrePrincipal;
    // Calcul temps final
    let tempsFinal = totalTemps / chiffreSeconde;
    return tempsFinal;
}
const noms = document.querySelector(".nom");
const prenoms = document.querySelector(".prenom");
const emails = document.querySelector(".email");
const mdps = document.querySelector(".mdp");
const confirms = document.querySelector(".confirm");
const buttons = document.querySelector("#btns");
let user = JSON.parse(localStorage.getItem("user")) || []; // misintona donné avy ao @ localStorage
const errNom = document.querySelector('.errorNom');
const errPrenom = document.querySelector('.errorPrenom');
const errEmail = document.querySelector('.errorEmail');
const errMdp = document.querySelector('.errorMdp');


buttons.addEventListener('click', (e) => {
    e.preventDefault();
    if (noms.value === "" || prenoms.value === "" || emails.value === "" || mdps.value === "" || confirms.value === "") {
        alert("Tous les champs est obligatoire !");
    } if (noms.value.length < 6) {
        errNom.style.display = "block";
        errNom.innerHTML = "Nom trop court !";
        errNom.style.color = "red";
    } else {
        errNom.style.display = "none";
    }
    if (prenoms.value.length < 6) {
        errPrenom.style.display = "block";
        errPrenom.innerHTML = "Prenom trop court !";
        errPrenom.style.color = "red";
    } else {
        errPrenom.style.display = "none";
    }
    if (!emails.value.includes("@gmail.com")) {
        errEmail.style.display = "block";
        errEmail.innerHTML = "@gmail.com est obigatoire dans l'Email";
        errEmail.style.color = "red";
    } else if (emails.value.includes("@gmail.com")) {
        errEmail.style.display = "none";
        if (mdps.value !== confirms.value) {
            errMdp.style.display = "block";
            errMdp.innerHTML = "confirmation incorrect !";
            errMdp.style.color = "red";
        } else if (mdps.value === confirms.value) {
            errMdp.style.display = "none";
        }
    } else {
        user.push({
            nom: noms.value, prenom: prenoms.value, email: emails.value, mdp: mdps.value, confirm: confirms.value
        })
        localStorage.setItem("user", JSON.stringify(user));
    }
    if (noms.value.length >= 6 && prenoms.value.length >= 6 && emails.value.includes("@gmail.com") && mdps.value === confirms.value) {
        user.push({
            nom: noms.value, prenom: prenoms.value, email: emails.value, mdp: mdps.value
        })
        localStorage.setItem("user", JSON.stringify(user));
        noms.value = "";
        prenoms.value = "";
        emails.value = "";
        mdps.value = "";
        confirms.value = "";
        const notification = document.querySelector('.notif-inscription');
        notification.style.display = "flex";
        setTimeout(() => {
            notification.style.display = "none";
        }, 5000);
        // redirection vers connexion
        setTimeout(() => {
            connexions.style.display = "inherit";
            connexions.style.paddingLeft = "70px";
            Inscriptions.style.display = "none";
            Inscriptions.style.animation = "sortirForm 0.5s";
            connexions.style.animation = "entrerForm 0.5s";
            notification.style.animation = "slide 1s";
        }, 500);
    }
})

const Inscriptions = document.querySelector("#boiteInscription");
const connexions = document.querySelector("#boiteConnexion");
const lienConnexion = document.querySelector(".lienConnexion");
const lienInscription = document.querySelector(".lienInscription");
lienConnexion.addEventListener('click', () => {
    connexions.style.display = "inherit";
    connexions.style.paddingLeft = "70px";
    Inscriptions.style.display = "none";
    Inscriptions.style.animation = "sortirForm 0.5s";
    connexions.style.animation = "entrerForm 0.5s";
});
lienInscription.addEventListener('click', () => {
    Inscriptions.style.display = "inherit";
    Inscriptions.style.paddingLeft = "40px";
    connexions.style.display = "none";
    connexions.style.animation = "sortirForm 0.5s";
    Inscriptions.style.animation = "entrerForm 0.5s";
})
const nomC = document.querySelector(".inputNom");
const mdpC = document.querySelector(".inputMotDePasse");
const errMotDePasse = document.querySelector(".errMotDePasse");
const btnConex = document.querySelector("#btns");
const test = document.querySelector('.btnConex');

test.addEventListener('click', (e) => {
    e.preventDefault();
    let filtreCon = user.find((el) => {
        return el.nom === nomC.value && el.mdp === mdpC.value;
    })
    if (filtreCon) {
        if (filtreCon.nom === nomC.value && filtreCon.mdp === mdpC.value) {
            let connect = {
                nom: filtreCon.nom,
                email: filtreCon.email,
                prenom: filtreCon.prenom
            }
            localStorage.setItem("connecter", JSON.stringify(connect));
            nomC.value = "";
            mdpC.value = "";
            errMotDePasse.innerHTML = "";
            setTimeout(() => {
                location.reload(); // actualiser le page
            }, 100)
        }
    } else {
        errMotDePasse.innerHTML = "Nom ou Mot de passse incorect !";
        errMotDePasse.style.color = "red";
    }
})
// misintona donné connecté
let connexion = JSON.parse(localStorage.getItem("connecter"));
// selection liens Inscription
const ulN = document.querySelector('.ul-nav');
const liN = ulN.querySelectorAll('li');
const aN = liN[4].querySelector('a');
aN.classList.add("ins");

// classe déconnection
const deconnexion = liN[5].querySelector("a");
deconnexion.classList.add("deconnexion");
const Ins = document.querySelector('.ins');
Ins.addEventListener('click', () => {
    connexions.style.display = "none";
    Inscriptions.style.display = "inherit";
    Inscriptions.style.paddingLeft = "50px";
})
// connecter
let connecter = localStorage.getItem("connecter");
const selection = document.querySelector(".ins");
const span = document.querySelector(".rose");
const seConnecter = document.querySelector(".bouttons");
const deconnex = document.querySelector(".deconnexion");
const logo = document.querySelector(".com");
const profil = document.querySelector(".profil");

// profil
const indetiteProfil = document.querySelector(".identiter-profil");
const nomProfil = document.createElement("h4");
const emailProfil = document.createElement("p");
nomProfil.innerHTML = `${connexion.nom} ${connexion.prenom}`;
emailProfil.innerHTML = connexion.email;
indetiteProfil.append(nomProfil);
indetiteProfil.append(emailProfil);
// image profil
const imageProfil = document.querySelector(".img-profil");
imageProfil.innerHTML = connexion.nom[0].toUpperCase();

deconnex.addEventListener('click', (e) => {
    e.preventDefault();
    localStorage.removeItem("connecter");
    setTimeout(() => {
        location.reload(); // actualiser automatique
    }, 100);
})
// bouton connexion
const boutonAcceuil = document.querySelector(".bouttons");

boutonAcceuil.addEventListener('click', () => {
    connexions.style.display = "inherit";
    connexions.style.paddingLeft = "70px";
    Inscriptions.style.display = "none";
    window.location.href = "#boiteConnexion";
    alert("ok");
});

if (connecter) {
    // ato izy raha connecté
    const btnAcheter = document.querySelectorAll('.acheter');
    btnAcheter.forEach((el) => {
        el.style.display = "block";
    })
    window.location.href = "#header";
    Inscriptions.style.display = "none";
    selection.style.display = "none";
    deconnexion.style.display = "inherit";
    seConnecter.style.display = "none";
    span.innerHTML = `Bonjour <span>${connexion.nom} ! <span/>`
    logo.style.display = "none";
    profil.style.display = "flex";

    // slide deconnexion
    const liSlide = listeNav.querySelectorAll('li');
    liSlide[4].style.display = "none";
    liSlide[5].style.display = "block";
    liSlide[5].addEventListener('click', () => {
        localStorage.removeItem("connecter");
        setTimeout(() => {
            location.reload(); // refresh auto ny page
        }, 100);
    })
} else {
    // ato izy raha deconnecter
    // profil.style.display = "none";
}
// barre de progression avis
let cUn = document.querySelector('.c-un');
let cDeux = document.querySelector('.c-deux');
let cTrois = document.querySelector('.c-trois');
let cQuatre = document.querySelector('.c-quatre');
let cCinq = document.querySelector('.c-cinq');

// ligne actif
const actifUn = document.querySelector('.actif-un');
const actifDeux = document.querySelector('.actif-deux');
const actifTrois = document.querySelector('.actif-trois');
const actifQuatre = document.querySelector('.actif-quatre');
const actifCinq = document.querySelector('.actif-cinq');

// convertir en nombre
cUn = Number(cUn.innerHTML);
cDeux = Number(cDeux.innerHTML);
cTrois = Number(cTrois.innerHTML);
cQuatre = Number(cQuatre.innerHTML);
cCinq = Number(cCinq.innerHTML);

// Total personne
let total = cUn + cDeux + cTrois + cQuatre + cCinq
// pourcentage 

let un = actifUn.style.width = (100 * cUn) / total + "%";
let deux = actifDeux.style.width = (100 * cDeux) / total + "%";
let trois = actifTrois.style.width = (100 * cTrois) / total + "%";
let quatre = actifQuatre.style.width = (100 * cQuatre) / total + "%";
let cinq = actifCinq.style.width = (100 * cCinq) / total + "%";


actifUn.animate([
    { width: "0%" },
    { width: "un" },
],{
    duration:2000,
})
actifDeux.animate([
    { width: "0%" },
    { width: "deux" },
],{
    duration:2000,
})
actifTrois.animate([
    { width: "0%" },
    { width: "trois" },
],{
    duration:2000,
})
actifQuatre.animate([
    { width: "0%" },
    { width: "quatre" },
],{
    duration:2000,
})
actifCinq.animate([
    { width: "0%" },
    { width: "cinq" },
],{
    duration:2000,
})

// alert()
// barreProgression(7);










