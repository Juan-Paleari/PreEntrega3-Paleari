


let productos = [
    {
        id:1,
        nombre: "Buzo Culture",
        precio: 18450,
        imagen: "https://acdn.mitiendanube.com/stores/622/377/products/82ce240e-6ed0-467d-9e77-2fbf2fa008c2-e6b6fa5f566c30656b16935149651850-480-0.webp"
    
    },
    
    {   id:2,
        nombre: "Pantalon Cargo Delight",
        precio: 23000,
        imagen: "https://acdn.mitiendanube.com/stores/622/377/products/e0669c3e-b3cb-410c-8f70-a89c786f218b-ec033f123704c2703116935159314969-480-0.webp"
    },
    {   id:3,
        nombre: "Zapatillas Neuss",
        precio: 35000,
        imagen: "https://acdn.mitiendanube.com/stores/622/377/products/7203d414-b347-4f59-b73a-8c330aeafda8-b2fd7c09b5aad8ea0e16941034868689-480-0.webp"
    },
    {   id:4,
        nombre: "Remera Slow",
        precio: 12200,
        imagen: "https://acdn.mitiendanube.com/stores/622/377/products/6ba12db0-5a8d-4024-9482-8fe195421bba-41f0574e018cbb192416945458945284-480-0.webp"
    }
    ];

    const guardarProductosLS = (productos) => {
        localStorage.setItem("productos", JSON.stringify(productos));
    }

    const cargarProductosLS = () => {
        return JSON.parse(localStorage.getItem("productos")) || [];
    }


        const renderProductos = () => {
        const productos = cargarProductosLS();
        let contenidoHTML = "";

        productos.forEach(producto => {
            contenidoHTML += ` <div class="col-md-2 ms-5 text-center">
            <div class="card" ">
            <img src="${producto.imagen}" class="card-img-top" alt="${producto.nombre}">
            <div class="card-body">
              <h5 class="card-title">${producto.nombre}</h5>
              <p class="card-text">$${producto.precio}.</p>
              <a href="#" class="btn btn-dark" onclick="agregarAlCarrito(${producto.id})">Agregar al carrito (+)</a>
            </div>
            </div>
          </div>`
            
        });

        document.getElementById("productos").innerHTML = contenidoHTML;
        

    }

    const renderCarrito = () => {
        const productos = cargarCarritoLS();
        let contenidoHTML = `<table class="table">`;

        productos.forEach(producto => {
            contenidoHTML += ` <tr>
            <td> <img src="${producto.imagen}" class="card-img-top" alt="${producto.nombre}"></td> 
            <td> ${producto.nombre}</td> 
            <td> ${producto.precio}</td> 
            <td> <img src="img/trash.svg" class="card-img-top" alt="Eliminar" </td>
            </tr>
             `
            
        });

        document.getElementById("productos").innerHTML = contenidoHTML;
        

    }

    

    const guardarCarritoLS = (carrito) => {
        localStorage.setItem("carrito", JSON.stringify(carrito));
    }

    const cargarCarritoLS = () => {
        return JSON.parse(localStorage.getItem("carrito")) || [];
    }

    const agregarAlCarrito = (id) => {
        const carrito = cargarCarritoLS();
        let producto = buscarProducto(id);
        carrito.push(producto);
        guardarCarritoLS(carrito);

        actualizarNumeroCarrito();

    } 

    const actualizarNumeroCarrito = () => {
        const carrito = cargarCarritoLS();
        const numeroCarrito = carrito.length;
        const numeroCarritoElemento = document.querySelector("#botonCarrito .numero-carrito");
        numeroCarritoElemento.innerHTML = numeroCarrito;
        document.getElementById("numero-carrito").innerText = numeroCarrito;
    } 

    document.addEventListener("DOMContentLoaded", () => {
        actualizarNumeroCarrito();

    });


    const buscarProducto = (id) => {
        const productos = cargarProductosLS();
        let producto = productos.find(item => item.id === id);

        return producto;
    }

    const estaEnElCarrito = (id) => {
        
        const productos = cargarProductosLS();
        return productos.some(item => item.id === id)

    }
