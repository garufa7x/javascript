
//Me traigo los productos del LS.
let productosEnCarrito = localStorage.getItem("productos-en-carrito");
productosEnCarrito = JSON.parse(productosEnCarrito);

const contenedorCarritoVacio = document.querySelector("#carrito-vacio");
const contenedorCarritoProductos = document.querySelector("#carrito-productos");
const contenedorCarritoAcciones = document.querySelector("#carrito-acciones");
const contenedorCarritoComprado = document.querySelector("#carrito-comprado");
let botonesEliminar = document.querySelectorAll(".carrito-producto-eliminar");
const botonVaciar = document.querySelector("#carrito-acciones-vaciar");
const contenedorTotal = document.querySelector("#total");
const botonComprar = document.querySelector("#carrito-acciones-comprar");
const botonesCategorias = document.querySelectorAll(".boton-categoria");

//Clase Producto con metodo calcularSubtotal.
class Producto {
    constructor(id, titulo, imagen, cantidad, precio) {
        this.id = id;
        this.titulo = titulo;
        this.imagen = imagen;
        this.cantidad = cantidad;
        this.precio = precio;
    }

    calcularSubtotal() {
        return this.precio * this.cantidad;
    }
}

//Carga productos
function cargarProductosCarrito() {
    if (productosEnCarrito && productosEnCarrito.length > 0) {
        //Si hay productos limpia el contenedor contenedorCarritoProductos e inserta, actualiza el total.
        contenedorCarritoVacio.classList.add("disabled");
        contenedorCarritoProductos.classList.remove("disabled");
        contenedorCarritoAcciones.classList.remove("disabled");
        contenedorCarritoComprado.classList.add("disabled");

        contenedorCarritoProductos.innerHTML = "";

        //Carga los productos en el carrito pero ahora usando la clase Producto. 
        productosEnCarrito.forEach(producto => {
        //Desestructuro el objeto y obtengo las variables.     
        const { id, titulo, imagen, cantidad, precio } = producto;
        //Luego uso las variables para crear la instancia de la clase Producto y lo asigno a prod. Acá me cayó la ficha!!!
        const prod = new Producto(id, titulo, imagen, cantidad, precio);

        const div = document.createElement("div");
        div.classList.add("carrito-producto");
        div.innerHTML = `
        <img class="carrito-producto-imagen" src="${prod.imagen}" alt="${prod.titulo}">
        <div class="carrito-producto-titulo">
            <small>Título</small>
            <h3>${prod.titulo}</h3>
        </div>
        <div class="carrito-producto-cantidad">
            <small>Cantidad</small>
            <p>${prod.cantidad}</p>
        </div>
        <div class="carrito-producto-precio">
            <small>Precio</small>
            <p>$${prod.precio}</p>
        </div>
        <div class="carrito-producto-subtotal">
            <small>Subtotal</small>
            <p>$${prod.calcularSubtotal()}</p>
        </div>
        <button class="carrito-producto-eliminar" id="${prod.id}">Eliminar</button>
      `;            

            contenedorCarritoProductos.append(div);
        })

        actualizarBotonesEliminar();
        actualizarTotal();
        //Si no, muestro el Carrito vacio.
    } else {
        contenedorCarritoVacio.classList.remove("disabled");
        contenedorCarritoProductos.classList.add("disabled");
        contenedorCarritoAcciones.classList.add("disabled");
        contenedorCarritoComprado.classList.add("disabled");
    }

}

//Carga el Carrito.
cargarProductosCarrito();

//Paso como argumento eliminarDelCarrito.
function actualizarBotonesEliminar() {
    botonesEliminar = document.querySelectorAll(".carrito-producto-eliminar");

    botonesEliminar.forEach(boton => {
        boton.addEventListener("click", eliminarDelCarrito);
    });
}

function eliminarDelCarrito(e) {

    Toastify({
        text: "Producto eliminado",
        duration: 3000,
        close: true,
        gravity: "top", // `top` or `bottom`
        position: "right", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
            background: "rgb(21, 21, 92)",
            borderRadius: ".5rem",
            textTransform: "uppercase",
            fontSize: ".8rem"
        },
        offset: {
            x: '1.5rem', // horizontal axis - can be a number or a string indicating unity. eg: '2em'
            y: '1.5rem' // vertical axis - can be a number or a string indicating unity. eg: '2em'
        },
        onClick: function () { } // Callback after click
    }).showToast();

    //Busco en el parametro e el id que viene de la funcion actualizarBotonesEliminar.
    const idBoton = e.currentTarget.id;
    //Busco el id que conicida con el e.currentTarget.id.
    const index = productosEnCarrito.findIndex(producto => producto.id === idBoton);
    //Elimino 1 elemento desde la posicion index.
    productosEnCarrito.splice(index, 1);
    cargarProductosCarrito();

    localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito));

}

//Vacio el Carrito, pongo el array en 0. Actualizo LS.
botonVaciar.addEventListener("click", vaciarCarrito);
function vaciarCarrito() {

    Swal.fire({
        title: 'Se van a eliminar los productos. ¿Estas seguro?',
        icon: 'question',
        showDenyButton: false,
        showCancelButton: true,
        confirmButtonText: 'Si',
        confirmButtonColor: 'red',
        cancelButtonText: 'Cancelar',
    }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
            productosEnCarrito.length = 0;
            localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito));
            cargarProductosCarrito();
        }
    })


}

//Actualizo el total.
function actualizarTotal() {
    const totalCalculado = productosEnCarrito.reduce((acc, producto) => acc + (producto.precio * producto.cantidad), 0);
    total.innerText = `$${totalCalculado}`;
}

botonComprar.addEventListener("click", comprarCarrito);
function comprarCarrito() {
    //Compro Carrito, pongo el array en 0. Actualizo LS.
    productosEnCarrito.length = 0;
    localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito));

    contenedorCarritoVacio.classList.add("disabled");
    contenedorCarritoProductos.classList.add("disabled");
    contenedorCarritoAcciones.classList.add("disabled");
    contenedorCarritoComprado.classList.remove("disabled");

}