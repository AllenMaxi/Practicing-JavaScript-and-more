//Array, Objetos y Funciones
const array = ["lu"," ma", "mi","ju"]
for (var i = 0 ; i<array.length; i++){
console.log(array[i])}

const array1= ["lunes", "martes",["miercoles", "jueves", "viernes"]]
console.log(array1[2][2]);

//Pila
// const pila = []

// pila.push(1, true, "hola", 10)

// console.log(pila)

// pila.pop()//sacar el ultimo dato

// console.log(pila)


//FUNCIONES

// var n1 = parseFloat(prompt('Ingrese numero 1:'))
// var n2 = parseFloat(prompt('Ingrese numero 2:'))
// var operacion = prompt('que operacion quieres hacer: ')
// function sumaryrestar(){
//     switch(operacion){
//         case 'suma':
//         console.log(n1+n2)
//         break;
//         case 'resta':
//         console.log(n1-n2)
//          break;
//         default: console.log("no se pudo realizar");
//         break;
//     }
// };
// sumaryrestar();

function multiplicar(n1, n2){
 
console.log(n1 * n2)
};
multiplicar(10, 6);

//Funcion que retorna un valor
function multiplicar1(n1, n2){
 
    return n1 * n2
    };
let multiplicacion = multiplicar1(10, 6);
console.log(multiplicacion);

//Un ejemplo mas avanzado
  
// var data = ['Nombre','Edad','Fecha de Nacimiento']  
// var pila = [];  
    
// function getInfo(info){
//     return prompt(info);
// }

// function addToArray(item){
//     return pila.push(item);
// }

// data.forEach(ele => addToArray(getInfo(ele)));

// console.log(pila);

//Importante
//Si no se utiliza las llaves las arrow function van a interpretar que vas a retornar algo
//si pones las llaves puede retornar con un return o no
const sumarV1 = (n1, n2) => n1 + n2;

const sumarV4 = (n1, n2) => {
    return n1 + n2;
}

function mostrarMensaje1 (mostrarMensaje){
    console.log(mostrarMensaje)

}
mostrarMensaje1("hola");

const mostrarMensaje = (mens) => {
    console.log(mens)
}
mostrarMensaje("hola");

//con return

const mostrarMensaje2 = (mens) => mens;

const mensaje = mostrarMensaje2("hola");
console.log(mensaje);

//Doble llamado
function nivel1 (){
    console.log("soy el nivel 1");
    return function(){
        console.log("soy el nivel 2")
    }
}
nivel1()();//llamara a las dos funciones

 
 const persona = {
     nombre : "Maxi",
     edad : 24,
     calle : "Av siempre viva",
     decirAlgo : function (){
         console.log(`Hola mi nombre es ${this.nombre} y mi edad ${this.edad}`)},
     calcularAlgo : function(algo){
         return algo * this.edad
        
     }
}
const per = persona.calcularAlgo(10);
console.log(per)


var futbolista = {
    equipo: 'real madri',
    altura: 3.6,
    peso: 89,
    velocidad: 36,
    decirAlgo: function(){console.log('hola soy un futbolista')},
    decirTuEquipo: function(){console.log('hola soy del: '+ this.equipo)},
    calcularVelocidad: function(disctancia) { return disctancia* this.velocidad },

    hacerAlgoMaravilloso: function() { 
                                    console.log('scope 1')
                                    console.log('equipo:', this.equipo)
                                    //return function(){
                                    return () => {
                                        console.log('scope 2')
                                        console.log('equipo:', this.equipo)
                                        
                                    }
                                }
}
 
futbolista.hacerAlgoMaravilloso()()
