function generer(longeur){
    let caracteres = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqurstuvwxyz0123456789&<>^=+-*/.:,!²#";
    let resultat = "";
    for (let i = 0; i < longeur; i++){
        let caractere_generé = caracteres.charAt(Math.floor(Math.random() * caracteres.length));
        resultat += caractere_generé;
    }
    document.getElementById('result').innerHTML = resultat;
}

