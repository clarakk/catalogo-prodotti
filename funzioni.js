function creaProdotto(prodotto) {
return "<div>" + "<h3>" + prodotto.nome + "</h3>"
 + "<p>" + prodotto.categoria + "</p>" 
 + "<p>" + "Prezzo: " + prodotto.prezzo + " " 
 + "euro" + "</p>" 
 + "<button data-prodotto=\"" + prodotto.nome + "\">Mostra dettagli</button>"
 +"<p class=\"dettagli\"></p>"
 + "</div>";
}

export { creaProdotto };