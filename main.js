
let palabras = [];


function aniadirpalabras() {
    let palabra = document.getElementById("palabra").value;
    if (palabra != "") {
        palabras.push(palabra);
        alert("Has introducido una palabra");
    } else alert("Has de introducir una palabra");


}

function mostrarpalabraconmasa() {
    if (palabras.length==0) {
        alert("Has de introducir una palabra");
    } else {
        let palabramayor = palabras[0];
        palabras.forEach(palabra => {
            if (numeroletrasa(palabra) > numeroletrasa(palabramayor)) {
                palabramayor = palabra;
            }
        });
        alert("La palabra con más a es " + palabramayor);
    }
}

function numeroletrasa(palabra) {

    let contador = 0;
    for (const letra of palabra) {
        if (letra == "a") {
            contador++;
        }
    } return contador;

}