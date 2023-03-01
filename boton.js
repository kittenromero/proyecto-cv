function saludar(nombreCompleto){
    var nombreCompleto,text;
    nombreCompleto= document.getElementById('casilla-de-nombre').value;

    text = "¡Hola "+nombreCompleto+"! Éste es mi número telefonico +54 9 3546215089";

    document.getElementById('saludo-telefono').innerHTML = text;
}