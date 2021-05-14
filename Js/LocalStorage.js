//LocalStorage: Guarda cadenad de texto a traves de una clave y un valor

//Set: Guardar
//Get: Obtener

const nombre = "ignacio";
//Para guardarlo en el Local Storage
localStorage.setItem("nombreUsuario", nombre);

//Obtener la  info
const nombreLocalStorage = localStorage.getItem("nombreUsuario");
console.log(nombreLocalStorage);

//Para eliminarlo:
localStorage.removeItem("nombreUsuario");