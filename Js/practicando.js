//For OF
// const productos = [{ id: 1, producto: "Arroz" },
//                   { id: 2,  producto: "Fideo" },
//                   { id: 3,  producto: "Pan" }];

// for (const producto of productos) {
//     console.log(producto.id);
//     console.log(producto.producto);
// }

//EJEMPLO APLICADO: OBJETOS, PRODUCTO Y ARRAY
class Producto {
    constructor(nombre, precio) {
        this.nombre  = nombre.toUpperCase();
        this.precio  = parseFloat(precio);
        this.vendido = false;
    }
    sumaIva() {
        this.precio = this.precio * 1.21;
    }
}
//Declaramos un array de productos para almacenar objetos
const productos = [];
productos.push(new Producto("arroz", "125"));
productos.push(new Producto("fideo", "70"));
productos.push(new Producto("pan", "50"));
//Iteramos el array con for...of para modificarlos a todos
for (const producto of productos){
    producto.sumaIva();}
    console.log(productos)

//Ejerciocios de practica
    const numero = (numero1, numero2)=> 
    (`el numero es: ${numero1 + numero2}`);

    const resultado = numero(10,20)
    console.log(resultado)


    const mascota = {nombre : "Narcizo",
                     edad : 10,
                      vivo : false,
                      razas : ["peludo", "negro"]
                     };

    console.log(mascota)
    console.log(mascota.nombre)
    console.log(mascota.razas[1])

   // Destructuring
 
   const personas = {nombre:"martin",
                     id: 1,
                     edad: 20,
                     estudio : true
                     }

//en ves de hacer esto:
const persona = personas.nombre
console.log(persona)

//hacemos esto creando las constantes directamente con las propiedades
const {nombre, edad} = personas;
console.log(nombre);
console.log(edad);

//Arrays de objetos
const web = {
    nombre: "bluuweb",
    links: {
        enlace: "bluuweb.cl"
    },
    redessociales:{
        youtube:{
            enlace: "youtube.com",
            nombre1: "youtube"
        }
    }
}
//Podria hacerce asi
const enlaceYoutube = web.redessociales.youtube.enlace;
console.log(enlaceYoutube)

//O con destructuring
const {enlace, nombre1} = web.redessociales.youtube;
console.log(enlace);
console.log(nombre1);

//API FETCH

fetch("https://pokeapi.co/api/v2/pokemon/")
.then(res =>  res.json()
)
.then(data => {console.log(data.results)
    //recorriendo el arreglo de objetos
 data.results.forEach(element => {console.log(element.name);
});

    })
.catch(error => console.log(error))

//Async / await

const obtenerPokemons = async() =>{
try {
   const res = await fetch("https://pokeapi.co/api/v2/pokemon/");
   const data = await res.json();
//    console.log(data.results);
   //Crear un nuevo Array de nombres con MAP
  const arrayNombres = data.results.map(poke => poke.name);
   console.log(arrayNombres);
} catch (error) {
    console.log(error);
}
}

obtenerPokemons()

//Usando FILTER y async/await
const obtenerPokemons2 = async() =>{
    try {
       const res = await fetch("https://pokeapi.co/api/v2/pokemon/");
       const data = await res.json();
    //    console.log(data.results);
       //Filtrar todos los objetos que no tengan el nombre bulbasaur:
      const arrayNombres = data.results.filter(poke => poke.name !== "bulbasaur");
       console.log(arrayNombres);
    } catch (error) {
        console.log(error);
    }
    }
    
    obtenerPokemons2()

//Seguimos con Async/Await

//Con .then
 const getNombre = (idPost) => {
     fetch(`https://jsonplaceholder.typicode.com/posts/${idPost}`)
     .then(res => res.json())
     .then(post => {
         console.log(post.userId);
 //Otra peticion
     fetch(`https://jsonplaceholder.typicode.com/users/${post.userId}`)
     .then(res => {
         return res.json()
     })
     .then(user =>{
         console.log(user.name);
     })

 })
 }

getNombre(6);

//Con async/await

const getNombreAsync = async (idPost) => {
try {
    const resPost = await fetch(`https://jsonplaceholder.typicode.com/posts/${idPost}`)
    const post = await resPost.json()

    const resUser = await fetch (`https://jsonplaceholder.typicode.com/users/${post.userId}`)
    const user = await resUser.json()
    console.log(user.name)
} catch (error) {
    console.log(error)
}
}

getNombreAsync(6)

//Con la libreria AXIOS que reemplaza a fetch

const getNombreAxios = async (idPost) => {
    try {
        const resPost = await axios(`https://jsonplaceholder.typicode.com/posts/${idPost}`)
        const resUser = await axios(`https://jsonplaceholder.typicode.com/users/${resPost.data.userId}`)
        console.log(resUser.data.name)
    } catch (error) {
        console.log(error)
    }
    }
    
    getNombreAxios(6)