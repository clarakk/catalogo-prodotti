let prodotti = [
    { nome: "Penna", prezzo: 2, categoria: "cartoleria" },
    { nome: "Zaino", prezzo: 45, categoria: "scuola" },
    { nome: "Quaderno", prezzo: 8, categoria: "scuola" }
];


import { creaProdotto } from "./funzioni.js";

let risultato = "";

for (let prodotto of prodotti) {
    risultato += creaProdotto(prodotto);
}

document.querySelector("#prodotti").innerHTML = risultato;

document.querySelector("#prodotti").addEventListener("click", function (event) {
    if (event.target.tagName === "BUTTON") {

        if (event.target.textContent === "Mostra dettagli") {

            let prodottoTrovato = prodotti.find(function (prodotto) {
                return prodotto.nome === event.target.dataset.prodotto;
            });

            event.target.parentElement.querySelector(".dettagli").textContent =
                "Dettagli: " + prodottoTrovato.nome + " - " +
                prodottoTrovato.prezzo + " euro - " +
                prodottoTrovato.categoria;

            event.target.textContent = "Nascondi dettagli";

        } else {

            event.target.parentElement.querySelector(".dettagli").textContent = "";

            event.target.textContent = "Mostra dettagli";
        }
    }
});
let categoria = document.querySelector("#categoria");
let campoCerca = document.querySelector("#cerca");
let btnCerca = document.querySelector("#btnCerca");


categoria.addEventListener("change", function () {

    let prodottiFiltrati = prodotti.filter(function (prodotto) {
        return categoria.value === "tutte" ||
            prodotto.categoria === categoria.value;
    });

    aggiornaCatalogo(prodottiFiltrati);
});

// document.querySelector("#formCerca").addEventListener("submit", function(event) {
//     event.preventDefault();
//     let prodottoTrovato = prodotti.find(function(prodotto) {
//    return prodotto.nome.toLowerCase() === campoCerca.value.toLowerCase();
// });

// if (prodottoTrovato) {
//    document.querySelector("#risultatoRicerca").textContent
//         prodottoTrovato.nome + " - " +
//         prodottoTrovato.prezzo + " euro";

//         } else {
//    document.querySelector("#risultatoRicerca").textContent =
//         "Prodotto non trovato";
// }
// });
document.querySelector("#formCerca").addEventListener("submit", function (event) {
    event.preventDefault();


    if (campoCerca.value === "") {
        aggiornaCatalogo(prodottiTrovati);
    }

    campoCerca.addEventListener("input", function () {

        if (campoCerca.value === "") {

            let pulsanti = document.querySelectorAll("#prodotti button");

            for (let pulsante of pulsanti) {
                pulsante.parentElement.style.display = "block";
            }
        }
    });

    let prodottiTrovati = prodotti.filter(function (prodotto) {
        return prodotto.nome.toLowerCase() === campoCerca.value.toLowerCase();
    });


    let pulsanti = document.querySelectorAll("#prodotti button");


    for (let pulsante of pulsanti) {
        if (pulsante.dataset.prodotto.toLowerCase() === campoCerca.value.toLowerCase()) {
            pulsante.parentElement.style.display = "block";
        } else {
            pulsante.parentElement.style.display = "none";
        }
    }
});
function aggiornaCatalogo(prodottiDaMostrare) {

    for (let pulsante of document.querySelectorAll("#prodotti button")) {

        if (prodottiDaMostrare.some(function (prodotto) {
            return prodotto.nome === pulsante.dataset.prodotto;
        })) {
            pulsante.parentElement.style.display = "block";
        } else {
            pulsante.parentElement.style.display = "none";
        }
    }
}

