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

//Si solo se quiere sumar a uno solo el iva:
productos[0].sumaIva();

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


 //Simulando un ejercicio de promesas con .then y async/await
//Promesas: Ejemplo simulador con varias respuestas
function requestHandler(req, res){
    //Llamar a la base de datos:
    User.findById(req,userId)
    //El dato que esperamos
    .then(function(user){
        return Task.findById(user.taskId)
    })
    //Otra funcion que tome las tareas del paso anterior:
    .then(function(task){
        task.completed = true;
        task.save() //Guardarlas lleva tiempo asi que se continuara con otra promesa
    })
    .then(function(){
        res.send("task completed");//Con res send nos referimos a enviar respuesta, puede ser a la consola.
    })
    //Cuando ocurre un error
    .catch(function(errors){
        console.log(errors)
    })
}

//Simulando el mismo codigo con Async/Await: Pidiendole info a una base de datos
async function requestHandler(req, res){
try{
    //Llamar a la base de datos:
    const user =  await User.findById(req,userId);
    const tasks = await Tasks.findById(user.tasksId);
    tasks.completed = true;
 //En este caso no es necesaria la respuesta ya que no se necesita guardar nada:
    await task.save();
    res.send("Task completed") }

catch(error){
    res.send(error);//Simulamos un console.log
}

}

//Otro ejemplo con Fetch API 
//Fetch retorna una promesa, cuando se resuelve la parseamos en json lo que retorna otra promesa y cuando se resuelve imprimimos el contenido.
function getNombre2(username) {
let url = `https://api.github.com/users/${username}`
fetch(url)
         .then(res => res.json())
         .then(json => {
             console.log(json.name)
         })
}
getNombre2("AllenMaxi");

//Con Async/Await Leyendo info de la API de github
 const getNombreAsyncro = async (username)=>{
  
 try{
     let url = `https://api.github.com/users/${username}`
     const res = await fetch(url);
     const data = await res.json();
     console.log(data.name)}
    catch (error){
        console.log(error)
      }
  }

 getNombreAsyncro("AllenMaxi");

 //Tambien se puede retornar e imprimir ese nombre con .then
const getNombreAsyncro1 = async (username)=>{
    try{
        let url1 = `https://api.github.com/users/${username}`
        const res = await fetch(url1);
        const data = await res.json();
        return data.name
          }
    catch (error) { 
        console.log(error) 
      }
        
    }
  
    getNombreAsyncro1("AllenMaxi")
          .then ((nombre) => console.log(nombre))
          .catch (error => console.log(error));
          