const contenedorProductos = document.querySelector("#contenedor-productos");
const botonesCategorias = document.querySelectorAll(".boton-categoria");
const tituloPrincipal = document.querySelector("#titulo-principal");
let botonesAgregar = document.querySelectorAll(".producto-agregar");
const numerito = document.querySelector("#numerito");
let productos = [];

//Pide los productos desde un archivo json con async y await y tray-catch-finnaly para manejar los errores.
const pedirProductos = async () => {
    try {
        const respuesta = await fetch("./js/productos.json");
        const datos = await respuesta.json();
        productos = datos;
        cargarProductos(productos);
    }
    catch {
        console.log(error);
    }
    finally {
        console.log("Prueba terminada.");
    }
}
pedirProductos()

//Carga los productos desde el array.
async function cargarProductos(productosElegidos) {
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