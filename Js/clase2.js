//Segunda clase
//For
for (var i = 0; i < 10; i++) {
    var numeroX = i + 1;
    var numeroDiv = 2;
    var EsDiv = numeroX % numeroDiv === 0;
  
    if (EsDiv) {
      console.log("El numero :" + numeroX + " es divisible por " + numeroDiv);
    }else{ console.log("el numero: " + numeroX +" no es divisible por " + numeroDiv)}
  }

 //Break
 for (var i = 0; i < 1000; i++) {
    if (i == 78) {
      console.log("encontre el 78");
      break;
    }
  
    console.log(i);
  }

//Continue
  
var numeroDiv = 3;

for (var i = 0; i < 10; i++) {
  var numero = i + 1;
  var esDiv = numero % numeroDiv === 0;

  if (esDiv) {
    console.log("el numero " + numero + " es divisile entre " + numeroDiv);
    continue; //ignora el resto del codigo y empieza el for en el siguiente paso
  }

  console.log(numero);
}


  //While
var IsAlive = true
var acumulador = 0
​
while(IsAlive){
    var numero = prompt('Ingresa tu numero:')
​
    if(numero === 'ESC') IsAlive = false
​
    //acumulador = acumulador + parseFloat(numero)
    acumulador += parseFloat(numero)
​
    console.log(acumulador)
​
}



//Calculadora con switch y while
var Alive = true;

while (Alive) {
  var operacion = prompt("Que operacion deseas realizar?");
  var n1;
  var n2;
  var EsSuma = operacion === "suma";
  var EsResta = operacion === "resta";
  var EsMultiplicacion = operacion === "multiplicacion";
  var EsDivision = operacion === "division";

  if (EsSuma || EsResta || EsMultiplicacion || EsDivision) {
    n1 = parseFloat(prompt("Ingresa el numero A?"));
    n2 = parseFloat(prompt("Ingresa el numero B?"));
  }

  if (operacion == "ESC") Alive = false;

  switch (operacion) {
    case "suma":
      console.log(n1 + n2);
      break;
    case "resta":
      console.log(n1 - n2);
      break;
    case "multiplicacion":
      console.log(n1 * n2);
      break;
    case "division":
      console.log(n1 / n2);
      break;
    default:
      console.log("No se encuentra en el listado de operaciones");
      break;
  }}

  //Calculadora con else if y while


  //   if (EsSuma) {
  //     console.log(n1 + n2);
  //   } else if (EsResta) {
  //     console.log(n1 - n2);
  //   } else if (EsMultiplicacion) {
  //     console.log(n1 * n2);
  //   } else if (EsDivision) {
  //     console.log(n1 / n2);
  //   } else {
  //     //Algo en el caso que no sea una operacion en la lista
  //   }

//Calculadora con if y while 

  //   if (EsSuma) {
  //     console.log(n1 + n2);
  //   }
  //   if (EsResta) {
  //     console.log(n1 - n2);
  //   }
  //   if (EsMultiplicacion) {
  //     console.log(n1 * n2);
  //   }
  //   if (EsDivision) {
  //     console.log(n1 / n2);
  //   }


