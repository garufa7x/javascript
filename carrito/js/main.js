
//Productos.
const productos = [
    {
        "id": "casco-01",
        "titulo": "Casco 01",
        "imagen": "./img/cascos/casco1.jpg",
        "categoria": {
            "nombre": "Cascos",
            "id": "cascos"
        },
        "precio": 25000
    },
    {
        "id": "casco-02",
        "titulo": "Casco 02",
        "imagen": "./img/cascos/casco2.jpg",
        "categoria": {
            "nombre": "Cascos",
            "id": "cascos"
        },
        "precio": 35000
    },
    {
        "id": "casco-03",
        "titulo": "Casco 03",
        "imagen": "./img/cascos/casco3.jpg",
        "categoria": {
            "nombre": "Cascos",
            "id": "cascos"
        },
        "precio": 15000
    },
    {
        "id": "casco-04",
        "titulo": "Casco 04",
        "imagen": "./img/cascos/casco4.jpg",
        "categoria": {
            "nombre": "Cascos",
            "id": "cascos"
        },
        "precio": 45000
    },
    {
        "id": "campera-01",
        "titulo": "Campera 01",
        "imagen": "./img/camperas/campera1.jpg",
        "categoria": {
            "nombre": "Camperas",
            "id": "camperas"
        },
        "precio": 78000
    },
    {
        "id": "campera-02",
        "titulo": "Campera 02",
        "imagen": "./img/camperas/campera2.jpg",
        "categoria": {
            "nombre": "Camperas",
            "id": "camperas"
        },
        "precio": 100000
    },
    {
        "id": "campera-03",
        "titulo": "Campera 03",
        "imagen": "./img/camperas/campera3.jpg",
        "categoria": {
            "nombre": "Camperas",
            "id": "camperas"
        },
        "precio": 670000
    },
    {
        "id": "campera-04",
        "titulo": "Campera 04",
        "imagen": "./img/camperas/campera4.jpg",
        "categoria": {
            "nombre": "Camperas",
            "id": "camperas"
        },
        "precio": 110000
    },
    {
        "id": "guante-01",
        "titulo": "Guante 01",
        "imagen": "./img/guantes/guantes1.jpg",
        "categoria": {
            "nombre": "Guantes",
            "id": "guantes"
        },
        "precio": 12000
    },
    {
        "id": "guante-02",
        "titulo": "Guante 02",
        "imagen": "./img/guantes/guantes2.jpg",
        "categoria": {
            "nombre": "Guantes",
            "id": "guantes"
        },
        "precio": 18000
    },
    {
        "id": "guante-03",
        "titulo": "Guante 03",
        "imagen": "./img/guantes/guantes3.jpg",
        "categoria": {
            "nombre": "Guantes",
            "id": "guantes"
        },
        "precio": 26789
    },
    {
        "id": "guante-04",
        "titulo": "Guante 04",
        "imagen": "./img/guantes/guantes4.jpg",
        "categoria": {
            "nombre": "Guantes",
            "id": "guantes"
        },
        "precio": 16432
    }
]

//Me traigo algunos elementos.
const contenedorProductos = document.querySelector("#contenedor-productos");
const botonesCategorias = document.querySelectorAll(".boton-categoria");
const tituloPrincipal = document.querySelector("#titulo-principal");
let botonesAgregar = document.querySelectorAll(".producto-agregar");
const numerito = document.querySelector("#numerito");

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

//Llamo a la funcion para que aparezcan todos los productos cuando abro la pagina.
cargarProductos(productos);

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