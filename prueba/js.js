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

let numero1;    //variables globales
let numero2;
let operador; 
let resultado;

function pedirNumeros(){    //funcion pedir numeros y operador
    numero1= parseFloat(prompt("Ingrese primer numero"));
    numero2= parseFloat(prompt("Ingrese segundo numero"));
    operador= prompt("Ingrese operador");
        while(isNaN(numero1) || isNaN(numero2) || !(operador == '+' || operador == '-' || operador == '*' || operador == '/')){     //valida numeros y operador
        numero1= parseFloat(prompt("DEBE INGRESAR UN PRIMER NUMERO"));
        numero2= parseFloat(prompt("DEBE INGRESAR UN SEGUNDO NUMERO"));
        operador= prompt("Ingrese operador");
    }    
    return numero1 , numero2, operador;     //retorna valores ingresados por prompt
}

function calcular(){   //funcion calcular
    
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
        resultado=numero1/numero2;
    }
    console.log(resultado);
}
calcular(pedirNumeros());   //llamo a la funcion calcular pasando como argumento la funcion pedirNumeros

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
    


    