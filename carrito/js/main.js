let productos = [];

fetch("./js/productos.json")
    .then(response => response.json())
    .then(data => {
        productos = data;
        cargarProductos(productos);
    })
//Me traigo algunos elementos.

const contenedorProductos = document.querySelector("#contenedor-productos");
const botonesCategorias = document.querySelectorAll(".boton-categoria");
const tituloPrincipal = document.querySelector("#titulo-principal");
let botonesAgregar = document.querySelectorAll(".producto-agregar");
const numerito = document.querySelector("#numerito");

async function realizarPeticion(datos) {
    try {
        const response = await fetch(datos);

        // Comprobar si la respuesta es exitosa (código de estado HTTP en el rango 200-299)
        if (!response.ok) {
            throw new Error(`Error en la petición: ${response.status} ${response.statusText}`);
        }

        // Si la respuesta es exitosa, obtener los datos en formato JSON
        const data = await response.json();

        // Devolver los datos obtenidos
        return data;
    } catch (error) {
        // Capturar cualquier error ocurrido durante la petición o el procesamiento de los datos
        console.error(error);
        // En caso de error, puedes devolver un valor por defecto o lanzar una excepción para manejarla en el código que llama a la función
        return null;
    } finally {
        // Realizar cualquier acción necesaria al finalizar la petición
        console.log('Petición finalizada');
    }
}

//Carga los productos desde el array.
function cargarProductos(productosElegidos) {
    //Vacia el html entre categorias.
    contenedorProductos.innerHTML = "";

    productosElegidos.forEach(producto => {

        const div = document.createElement("div");
        div.classList.add("producto");
        div.innerHTML = `
            <img class="producto-imagen" src="${producto.imagen}" alt="${producto.titulo}">
            <div class="producto-detalles">
                <h3 class="producto-titulo">${producto.titulo}</h3>
                <p class="producto-precio">$${producto.precio}</p>
                <button class="producto-agregar" id="${producto.id}">Agregar</button>
            </div>
        `;
        //Inserta en "contenedor-productos".
        contenedorProductos.append(div);
    })

    actualizarBotonesAgregar();    
}



//Hace foco en la categoria.
botonesCategorias.forEach(boton => {
    boton.addEventListener("click", (e) => {

        botonesCategorias.forEach(boton => boton.classList.remove("active"));
        e.currentTarget.classList.add("active");
        //Cambia el titulo de la categoria cuando se selecciona.
        if (e.currentTarget.id != "todos") {
            const productoCategoria = productos.find(producto => producto.categoria.id === e.currentTarget.id);
            tituloPrincipal.innerText = productoCategoria.categoria.nombre;
            const productosBoton = productos.filter(producto => producto.categoria.id === e.currentTarget.id);
            cargarProductos(productosBoton);
        } else {
            tituloPrincipal.innerText = "Todos los productos";
            cargarProductos(productos);
        }

    })
});

//Me traigo id del producto y envio a la funcion agregarAlCarrito.
function actualizarBotonesAgregar() {
    botonesAgregar = document.querySelectorAll(".producto-agregar");
    //Paso como argumento agregarAlCarrito.
    botonesAgregar.forEach(boton => {
        boton.addEventListener("click", agregarAlCarrito);        
    });
}


let productosEnCarrito;
let productosEnCarritoLS = localStorage.getItem("productos-en-carrito");
//Me traigo del LS, si tiene algo parseo y guardo en productosEnCarrito y actualizo numero del Carrito, sino cargo array vacio.
if (productosEnCarritoLS) {
    productosEnCarrito = JSON.parse(productosEnCarritoLS);
    actualizarNumerito();
} else {
    productosEnCarrito = [];
}

//Agrego al carrito.
function agregarAlCarrito(e) {
    //Busco en el parametro e el id que viene de la funcion actualizarBotonesAgregar (linea 182).
    const idBoton = e.currentTarget.id;
    const productoAgregado = productos.find(producto => producto.id === idBoton);    
    //Si lo encuentra aumenta cantidad, sino hace un push con la cantidad 1.
    if (productosEnCarrito.some(producto => producto.id === idBoton)) {
        const index = productosEnCarrito.findIndex(producto => producto.id === idBoton);
        productosEnCarrito[index].cantidad++;
    } else {
        productoAgregado.cantidad = 1;
        productosEnCarrito.push(productoAgregado);
    }
    //Actualizo numero carrito.
    actualizarNumerito();
    //Guardo en LS.
    localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito));    
}

//Sumo las cantidades y muestro al lado de Carrito.
function actualizarNumerito() {
    let nuevoNumerito = productosEnCarrito.reduce((acc, producto) => acc + producto.cantidad, 0);
    numerito.innerText = nuevoNumerito;    
}