//let nombre = prompt("Como es tu nombre?");
//console.log(nombre);

//let nombre = prompt("Como es tu nombre?");
//let edad = prompt("Ingresa tu edad");
//console.log("Tu nombre es" + '' ,nombre, "y tenes", "", edad, "anios");

/*let numeros=0;
let total=0;*/

/*function sumar(numero1, numero2){
    
    total=numero1+numero2;    
}*/

/*function pedirDatos(){    //funcion pedir numeros y operador
let numero1;
let numero2;
let operador;

    numero1= parseFloat(prompt("Ingrese primer numero"));
    numero2= parseFloat(prompt("Ingrese segundo numero"));
    operador= prompt("Ingrese operador +, -, *, o /");
        while(isNaN(numero1) || isNaN(numero2) || !(operador == '+' || operador == '-' || operador == '*' || operador == '/')){     //valida numeros y operador
        numero1= parseFloat(prompt("DEBE INGRESAR UN PRIMER NUMERO"));
        numero2= parseFloat(prompt("DEBE INGRESAR UN SEGUNDO NUMERO"));
        operador= prompt("DEBE INGRESAR UN OPERADOR +, -, *, o /");
    }   
    calcular(numero1 , numero2, operador);     //llama a la funcion calcular y le pasa 3 argumentos.
}*/

//Programa que calcula operaciones aritemicas basicas(+, -, * y /) y muestra el resultado por consola. 
//Consta de 3 funciones flecha asignadas a constantes que piden datos al usuario, los valida, calcula y muestra el resultado.
//No se usaron variables globales. 

const pedirDatos = () => {    //funcion pedir numeros y operador. Validacion con while
    let numero1;
    let numero2;
    let operador;
    
    alert("Ingresa dos numeros y una operacion (+, -, * o /). Recorda que no se puede dividir un numero por 0.");

    numero1= parseFloat(prompt("Ingresa el primer numero"));
    numero2= parseFloat(prompt("Ingresa el segundo numero"));
    operador= prompt("Ingresa el operador +, -, *, o /");
        
        while(isNaN(numero1) || isNaN(numero2) || !(operador=="+" || operador=="-" || operador=="*" || operador=="/")){     //valida numeros y operador
            numero1= parseFloat(prompt("DEBES INGRESAR EL PRIMER NUMERO"));
            numero2= parseFloat(prompt("DEBES INGRESAR EL SEGUNDO NUMERO"));
            operador= prompt("DEBES INGRESAR EL OPERADOR +, -, *, o /");
    }   
    calcular(numero1 , numero2, operador);    //llama a la funcion calcular y le pasa 3 argumentos.
}

const calcular = (numero1 , numero2, operador) => {     //funcion calcular. Valida division por cero.
    let resultado; 
    if (operador=="+"){
    resultado=numero1+numero2;
    }
    else if(operador=="-"){
    resultado=numero1-numero2;
    }
    else if(operador=="*"){
    resultado=numero1*numero2;
    }
    else if(operador=="/"){
        if(numero2 !==0){
    resultado=numero1/numero2;
        }
            else{
                alert("No se puede dividir un numero por 0.");
            }
    }
    mostrarResultado(resultado);
}

const mostrarResultado = resultado => console.log("El resultado de la operacion es "+ resultado);   //muestra resultado.

pedirDatos();   //llamo a la funcion pedirDatos.

//console.log(parseInt (numero1)+ parseInt (numero2));

//const nombre = nom => console.log("Cual es tu edad " + nom);
//nombre("34");

/*let total = 0
for (i = 1; i <= 10; i++) {
    total = total + i
    console.log(total)
}



function mayorQue(x) {
        return (num) => num > x;
        
    }
    const mayorQueDiez = mayorQue(10);
    const mayorQueVeinte = mayorQue(20);
    // const mayorQueDiez = num => num > 10;
    
    console.log(mayorQueDiez(11));*/

//Microdesafio Semana 2 control de ciclos

/*let cantidad = prompt('INGRESE CANTIDAD DE REPETICIONES');
let texto = prompt('INGRESE TEXTO A REPETIR');
for (index = 0; index < cantidad; index++) {
console.log(texto);
}*/

/*let lados = prompt('INGRESE CANTIDAD DE LADOS - minimo 3 y maximo 6');

    if (lados == 3) {
        alert("trinagulo");
    }
    else if (lados==4) {
        alert("cuadrado");
    }
    else {
        alert("Ingresa numero entre 3 y 6");
    } */    

    /*let lados = prompt('INGRESE CANTIDAD DE LADOS');
    if (lados >= 3) {
        alert("Es una figura geometrica de " + lados + " lados.");
    }*/
    
    //Desafios complementarios
    //1
    /*let numero = prompt("Ingresa un numero");
    if(numero % 2 == 0){
        console.log("Es par!");
    }
    else{
        console.log("Es impar!");
    }*/

    //2
    /*let numero = prompt("Ingresa un numero");
    while(numer != "salir")
    if(numero % 2 == 0){
        console.log("Es par!");
    }
    else{
        console.log("Es impar!");
    }*/

    /*let resultado=0;
    let num1=0;
    let num2=0;
    let oper;*/

    /*function pedirDatos(num1, num2, oper){
        
        num1= prompt("Ingrese primer numero");
        num2= prompt("Ingrese segundo numero");
        oper= prompt("Ingrese operador");
        if(oper=="+"){
           parseInt (resultado =num1+num2);
        }
        console.log(resultado);
       
   }
   pedirDatos();*/
   
   //console.log(pedirDatos(num1, num2, oper));

    /*function calculadora(num1, num2, oper){
        
        if (oper=="+"){
            resultado=num1+num2;
        }
        else if(oper=="-"){
            resultado=num1-num2;
        }
        else if(oper=="*"){
            resultado=num1*num2;
        }
        else if(oper=="/"){
            resultado=num1/num2;
        }
        else{
        return 0;
    }
    console.log(resultado);
    }
    calculadora (pedirDatos(num, num2, oper));*/
    

//Semana 3 funciones, find the bug
//Actividad 1: Se ingresa un numero y se le aplica el IVA de 1.21
/*const IVA = 1.21;
let importe = prompt("Ingresa el importe sobre el cual quieres calcular el IVA:");

const precioConIVA = (imp, iva) => imp * iva;
let total= precioConIVA(importe, IVA)
console.log(total);*/

// Actividad 2
/*const valorM2 = 31.83; //valor fijo del seguro por Metro 2
const comision = 1.025; //comisión del 2.5%
const M2 = prompt("Ingresa los Metros cuadrados de la propiedad a cotizar un seguro:");
const calcularPoliza = m2 =>  M2 * valorM2 * comision;

console.log("El costo de la póliza es: $" , calcularPoliza(M2));*/
    

/*function ingresarDatos() {
	let numero1, numero2, operacion;

	alert(
		'Ingresará dos números y una operación (+, -, *, /) para realizar un calculo obteniendo el resultado. Acontinuación le mostraremos ejemplos, recuerde que no se puede realizar una división por 0 para evitar errores, gracias. \n\n5 + 5 = 10 \n5 - 5 = 0 \n5 * 5 = 25 \n5 / 5 = 1'
	);

	numero1 = Number(prompt('Ingrese el primer número:'));
	numero2 = Number(prompt('Ingrese el segundo número:'));
	operacion = prompt('Ingrese una operación de las siguientes(+, -, *, /):');

	calcular(numero1, numero2, operacion);
}

// creamos la función calcular la cual recibe tres parámetros (valor1, valor2, operacion) retornando el resultado del calculo
function calcular(valor1, valor2, operacion) {
	let resultado;

	switch (operacion) {
		case '+':
			resultado = valor1 + valor2;
			mostrarResultado('Operación sumar', valor1, valor2, operacion, resultado);
			break;
		case '-':
			resultado = valor1 - valor2;
			mostrarResultado('Operación restar', valor1, valor2, operacion, resultado);
			break;
		case '*':
			resultado = valor1 * valor2;
			mostrarResultado('Operación multiplicar', valor1, valor2, operacion, resultado);
			break;
		case '/':
			if (valor2 !== 0) {
				resultado = valor1 / valor2;
				mostrarResultado('Operación dividir', valor1, valor2, operacion, resultado);
			} else {
				// Error al dividir por 0
				mensajeError(valor2, operacion);
			}
			break;
		default:
			mensajeError(valor2, operacion);
			break;
	}

	return resultado;
}

function mensajeError(valor2, operacion) {
	if (valor2 === 0 && operacion === '/') {
		alert(':( Error el divisor no puede ser ' + valor2 + ' . Por favor introduzca un valor válido para esta operación.');
		console.error(':( Error el divisor no puede ser ' + valor2 + ' . Por favor introduzca un valor válido para esta operación.');
	} else {
		alert(':( Error, se ha seleccionado una operación (' + operacion + ') no válida.');
		console.error(':( Error, se ha seleccionado una operación (' + operacion + ') no válida.');
	}
}

function mostrarResultado(texto, valor1, valor2, operacion, resultado) {
	alert(texto + ': \n\n' + valor1 + ' ' + operacion + ' ' + valor2 + ' = ' + resultado);
	console.log(valor1 + ' ' + operacion + ' ' + valor2 + ' = ' + resultado);
}

ingresarDatos();*/
    