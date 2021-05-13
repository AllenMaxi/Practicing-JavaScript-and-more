//Arrow function
//Importante
//Si no se utiliza las llaves las arrow function van a interpretar que vas a retornar algo
//si pones las llaves puede retornar con un return o no
const sumarV2 = (n1, n2) => n1 + n2;

const sumarV3 = (n1, n2) => {
    return n1 + n2;
}

// //Ejemplo de funcion
// var colectivos = []
// CargarColectivos(colectivos)
// RevisarColectivos(colectivos)

// function CargarColectivos(colectivos) {
//     //Cargamos la cantidad de colectivos a revisar
//     do{
//         var cantidad = parseFloat(prompt('Ingrese la cantidad a revisar: '))

//         if(cantidad > 0) {
//             for(var i=0; i<cantidad; i++){
//                 colectivos.push(i+1)
//             }
//             console.log('al cargar colectivos nos quedaron:',colectivos)
//             break;
//         }
//     } while(true)
// }

// function RevisarColectivos(colectivos){
//     //Eliminamos de la lista los colectivos ya revisados
//     var limite =colectivos.length
//     while(limite > 0){
//         var respuesta = prompt('Revisaste el colectivo numero:' + limite)

//         if(respuesta === 'si'){
//             colectivos.pop()
//             limite--;
//         }

//         console.log('Al revisar colectivos nos quedaron:',colectivos)
//     }
// }

//El DOM
//Buscar elementos en HTML
const h3 = document.querySelector("H3");
console.log(h3);

//Si quisieramos acceder al siguiente h3
//Se le crea una clase en HTML llamada h3-danger

const h3Dos = document.querySelector(".h3-danger");
console.log(h3Dos);

//Si le ponemos un id al parrafo
const paragraph = document.querySelector("#paragraph");//Tambien se puede usar getElementbyId
console.log(paragraph);

//Para seleccionar varias clases iguales o etiquetas se usa QueryselectorAll
const allH3 = document.querySelectorAll("H3");
console.log(allH3);
console.log(allH3[0])

//Modificar su atributo, sus clases y agregar un elemento hijo
paragraph.textContent = "texto desde JS"; //Modificar su contenido

paragraph.innerHTML = "Texto con InnerHTML";//Resultado similar a TextContent
paragraph.innerHTML = "<b>Texto con innerHTML</b>";//Tambien se puede agregar una etiqueta

paragraph.classList.add("h3-danger", "margin");//Agregarle dos clases al parrafo


             //CreateElement
        //Crear li desde el ul con el id "lista"
const lista = document.getElementById("lista");

const li = document.createElement("li");

      //Agregarle el contenido
li.textContent = "Primer elemento";
      //Decirle que tiene que ir dentro del ul
lista.appendChild(li);//Lista incorpora en su nodo hijo ese li que nosotros tenemos creado

           //PINTAR LOS ELEMENTOS DE UN ARRAY EN EL UL
const arrayElement = ["Primer elemento", "segundo", "tercero"];//Creamos el array

// arrayElement.forEach(item =>{//Lo recorremos
//     // console.log(item);
// const li2 = document.createElement("li");//creamos un li que en cada vuelta tomara el nombre de los distintos valores
// li2.textContent = item;

// lista.appendChild(li2);

// })


           //OTRA OPCION:(A LA LARGA NO ES UNA BUENA OPCION POR EL REFLOW)
// arrayElement.forEach(item => {
//     lista.innerHTML += `<li> ${item} </li>`//concatenamos el li
// });//En cada vuelta se creara un li y se tomara cada valor del array


        //Ninguna de las dos opciones(CreateElement, InnerHTML) nos saca el problema del reflow


        //LA OPCION QUE SI  SOLUCIONA EL REFLOW FRAGMENT + CREATEELEMENT
//Primero hay que crear el fragment:
const fragment = document.createDocumentFragment();

          //Otra opcion
// const fragment = new DocumentFragment();

// arrayElement.forEach(item =>{
//     const li2 = document.createElement("li");
//     li2.textContent = item;
//     fragment.appendChild(li2);//Empujamos todos los li dentro del fragmento
// })

// lista.appendChild(fragment);//Empujamos el fragment dentro de la lista

       //Para insertar del tercer elemento al primero:

// arrayElement.forEach(item=>{
//     const li3 = document.createElement("li");
//     li3.textContent = item;
//     const childNode = fragment.firstChild;//Nos trae el elemento anterior en cada vuelta
//     fragment.insertBefore(li3, childNode);//Se le pasa el muevo nodo creado y la referencia
// })
// lista.appendChild(fragment);



          //TEMPLATE HTML:

// arrayElement.forEach(item =>{
//     const li = document.createElement("li");
//     li.classList.add("list");
//     const b = document.createElement("b");
//     b.textContent = "nombre: ";
//     const span = document.createElement("span");
//     span.classList.add("text-danger");
//     span.textContent = item;
//     li.appendChild(b);
//     li.appendChild(span);
//     fragment.appendChild(li);
// })

// lista.appendChild(fragment);

          //Con TEMPLATE y FRAGMENT (Una buena opcion)
const template = document.querySelector("#template-li").content

arrayElement.forEach(item =>{
    template.querySelector(".list span").textContent = item;//Modificamos el elemento en cuestion (el span)
//template.querySelector("span").textContent = item;
//template.querySelector(".text-danger").textContent = item;
   const clone = template.cloneNode(true);//Para clonar las propiedades del template y empujarlas al fragment
   fragment.appendChild(clone);

})

lista.appendChild(fragment);

               //AddEventListeners
   //Evento de click
// const btnAumentar = document.querySelector(".btn-info")
const span = document.getElementById("span");
// const btnDisminuir = document.querySelector(".btn-danger")
let contador = 0;
       //Aumentar
// btnAumentar.addEventListener("click", () =>{
//     console.log("me diste click");//Saber que se esta detectando
//     contador++;//Aumentar el contador cada vez que se de click en el boton de aumentar.
//     span.textContent = contador;//Para que el contenido del span sea igual al contador.
// })
      //Disminuir
//   btnDisminuir.addEventListener("click", () =>{
//     console.log("me diste click");//Saber que se esta detectando
//     contador--;//Disminuir el contador cada vez que se de click en el boton de disminuir.
//     span.textContent = contador;//Para que el contenido del span sea igual al contador.
// })

      // Otra Opcion: EVENT DELEGATION

const container = document.querySelector(".container");

container.addEventListener("click", event =>{
    // console.log(event.target);//cada vez que presionemos nos traera a consola el elemento que estamos presionando.
    // console.log(event.target.classList.contains("btn-info"))//Nos tirara falso si no apretamos el boton Aumentar.
//Delegar eventos (detectar el boton de aumentar y disminuir)
if(event.target.classList.contains("btn-info")){//Si es true aumentara el contador
    contador++
span.textContent = contador;
}
if(event.target.classList.contains("btn-danger")){//Si es true disminuira el contador
    contador--
span.textContent = contador;
}
event.stopPropagation();
})


         //Stop PROPAGATION:
document.body.addEventListener("click", ()=>{
    console.log("diste click")//Cada vez que demos click en el body aparecera esto
//Para que dentro del container no suceda se le agrega event.stopPropagation al final

} )

     //Otro Ejercicio de Stop Propagation
const btn = document.querySelector(".btn-dark");
const bgSuccess = document.querySelector(".bg-success");

btn.addEventListener("click", (event)=>{
    console.log("diste click en btn");//Aparecera diste click btn pero tambien diste click bgSuccess
   event.stopPropagation(); //Hara que solo aparezca diste click en btn y el evento del elemento padre no se propage
})
bgSuccess.addEventListener("click", ()=>{
    console.log("diste click en bgSuccess");//Se propagara
})