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


    