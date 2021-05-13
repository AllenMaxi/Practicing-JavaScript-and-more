const cards = document.getElementById("cards");
const items = document.getElementById("items");
const footer = document.getElementById("footer");
const templateCard = document.getElementById("template-card").content;//Siempre hay que poner .content en lo que respecta a los template
const templateFooter = document.getElementById("template-footer").content
const templateCarrito = document.getElementById("template-carrito").content
const fragment = document.createDocumentFragment();
let carrito = {};
let contador = 0;
//Consumir la API
document.addEventListener("DOMContentLoaded", () => {
    fetchData()
//Para que cuando actualicemos el sitio web no desaparezcan los productos ya incluidos al carrito:

//Guardarlos en el local storage
if(localStorage.getItem("carrito")){
    carrito = JSON.parse(localStorage.getItem("carrito"))
    pintarCarrito();
}
})
//Que los items detecten el click: Event delegation
cards.addEventListener("click", e =>{
    addCarrito(e);
})

items.addEventListener("click", e =>{
 btnAccion(e)
})


const fetchData = async () =>{
    try {
    const res = await fetch("api.json");
    const data = await res.json();
    // console.log(data)
pintarCards(data);
    } catch (error) {
        console.log(error);
    }
}

//Pintar la informacion
const pintarCards = data =>{
//Recorrer la data
data.forEach(product =>{
    // console.log(product);
//Vamos a acceder al h5, precio e imagen para modificarlos 
   templateCard.querySelector("h5").textContent = product.title
   templateCard.querySelector("p").textContent = product.precio
   templateCard.querySelector("img").setAttribute("src", product.thumbnailUrl);
//Cada boton debe tener el id de nuestro producto
   templateCard.querySelector("button").dataset.id = product.id
   const clone = templateCard.cloneNode(true);
   fragment.appendChild(clone);
})
cards.appendChild(fragment);
}

//Capturar el elemento al que se le da el click
const addCarrito = e => {
// console.log(e.target)
//Si el elemento contiene la clase:
if(e.target.classList.contains("btn-dark")){
//Nos trae el div completo con sus respectivos elementos
   setCarrito(e.target.parentElement);
}
//Evitar que se hereden los eventos del elemento padre
e.stopPropagation();
}

//Manipular nuestro objeto del carro. Cada vez que apretamos el boton de los productos se empujaran a este setCarrito
const setCarrito = object => {
// console.log(object)
const producto = {
      id: object.querySelector("button").dataset.id,
      title: object.querySelector("h5").textContent,
      precio: object.querySelector("p").textContent,
      cantidad: 1
    } 
//Aumentar la cantidad del item sin pintarlo otra vez:
//Accedemos solo al producto que se esta repitiendo:
if(carrito.hasOwnProperty(producto.id)){//Carrito sera toda nuestra coleccion de objetos
//Accedemos solo a la cantidad:
producto.cantidad = carrito[producto.id].cantidad + 1;
}
//Empujarlo al carrito con spread operator creando una copia de ese producto
carrito[producto.id] = {...producto};
pintarCarrito();
}

//Pintamos el carrito en nuestro DOM
const pintarCarrito = () =>{
    // console.log(carrito);
items.innerHTML = ""//Va a empezar vacio para no sumar los productos juntos otra vez cada vez agregamos uno
Object.values(carrito).forEach(producto => {
    templateCarrito.querySelector("th").textContent = producto.id
    templateCarrito.querySelectorAll("td")[0].textContent = producto.title//Seleccionamos el td con indice 0(el primer td)
    templateCarrito.querySelectorAll("td")[1].textContent = producto.cantidad//Seleccionamos el segundo td
    templateCarrito.querySelector("span").textContent = producto.cantidad * producto.precio
//Botones
templateCarrito.querySelector(".btn-info").dataset.id = producto.id
templateCarrito.querySelector(".btn-danger").dataset.id = producto.id


    const clone = templateCarrito.cloneNode(true);
    fragment.appendChild(clone);
})
    items.appendChild(fragment);

    pintarFooter();
  
localStorage.setItem("carrito", JSON.stringify(carrito));
}

//Pintamos el footer en nuestro DOM
const pintarFooter = () => {
    footer.innerHTML = ""//Reiniciamos la info del footer dejando la info del HTML
//Pintar de nuevo la info cuando el carrito este vacio
if(Object.keys(carrito).length === 0){
    footer.innerHTML = `<th scope="row" colspan="5">Carrito vacío - comience a comprar!</th>`
    
    return
}
    const nCantidad = Object.values(carrito).reduce((acumulador, {cantidad}) => acumulador + cantidad, 0)//Para sumar las cantidades que se incluyan al carrito
 //Lo mismo con el precio
    const nPrecio = Object.values(carrito).reduce((acumulador, {cantidad, precio}) => acumulador + cantidad*precio, 0)

templateFooter.querySelectorAll("td")[0].textContent = nCantidad;
templateFooter.querySelector("span").textContent = nPrecio;

const clone = templateFooter.cloneNode(true);
fragment.appendChild(clone)
//Como no es un ciclo  lo podemos agregar directamente.
footer.appendChild(fragment);

const btnVaciar = document.getElementById("vaciar-carrito")
btnVaciar.addEventListener("click", () => {
    carrito = {}
//Se tiene que pintar el carrito para que sepa que no tenemos ningun elemento en cuestion
   pintarCarrito()
})
}

const btnAccion = e =>{
//Accion de aumentar:
    if(e.target.classList.contains("btn-info")){
    const producto = carrito[e.target.dataset.id]
    producto.cantidad ++//Preguntamos por la cantidad del objeto y le sumamos 1
    carrito[e.target.dataset.id] = {...producto};
    pintarCarrito();
        }
    if(e.target.classList.contains("btn-danger")){
        const producto = carrito[e.target.dataset.id]
        producto.cantidad --//Preguntamos por la cantidad del objeto y le restamos 1
        carrito[e.target.dataset.id] = {...producto}; 
    if(producto.cantidad === 0){
        delete  carrito[e.target.dataset.id]
    }
    pintarCarrito()
}
    e.stopPropagation();
 }
    
