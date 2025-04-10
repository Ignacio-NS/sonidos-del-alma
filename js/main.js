// Función para obtener el carrito desde localStorage
function obtenerCarrito() {
    return JSON.parse(localStorage.getItem("carrito")) || [];
  }
  
  // Función para guardar el carrito en localStorage
  function guardarCarrito(carrito) {
    localStorage.setItem("carrito", JSON.stringify(carrito));
  }
  
  // Función para mostrar productos en el carrito
  function mostrarCarrito() {
    const lista = document.getElementById("lista-carrito");
    const total = document.getElementById("total-carrito");
    const contenedorBoton = document.getElementById("boton-vaciar");
    const carrito = obtenerCarrito();
  
    lista.innerHTML = "";
    let suma = 0;
  
    carrito.forEach((producto, index) => {
      const item = document.createElement("li");
      item.className = "list-group-item d-flex justify-content-between align-items-center shadow-sm rounded border-0 mb-2 bg-white p-3";
  
      const titulo = document.createElement("span");
      titulo.className = "text-truncate me-auto fs-5 fw-medium";
      titulo.textContent = producto.titulo;
  
      const precio = document.createElement("span");
      precio.className = "badge bg-primary rounded-pill ms-3 fs-6";
      precio.textContent = `$${producto.precio.toLocaleString("es-CL")}`;
  
      const eliminar = document.createElement("button");
      eliminar.className = "btn btn-sm btn-outline-danger ms-3 fs-6";
      eliminar.innerText = "✖";
      eliminar.addEventListener("click", () => eliminarProducto(index));
  
      item.appendChild(titulo);
      item.appendChild(precio);
      item.appendChild(eliminar);
      lista.appendChild(item);
  
      suma += producto.precio;
    });
  
    total.textContent = `$${suma.toLocaleString("es-CL")}`;
  
    contenedorBoton.innerHTML = "";
    if (carrito.length > 0) {
      const btnVaciar = document.createElement("button");
      btnVaciar.className = "btn btn-outline-danger mt-4";
      btnVaciar.id = "vaciar-carrito";
      btnVaciar.innerHTML = '<i class="bi bi-trash"></i> Vaciar Carrito';
      btnVaciar.addEventListener("click", vaciarCarrito);
      contenedorBoton.appendChild(btnVaciar);
    }
  
    // Estilos de fondo para sección del encabezado
    const header = document.querySelector("header");
    if (header) {
      header.style.background = "linear-gradient(to right, #3C1C28, #8B4513)";
      header.style.color = "white";
    }
  }
  
  // Eliminar producto específico
  function eliminarProducto(index) {
    const carrito = obtenerCarrito();
    carrito.splice(index, 1);
    guardarCarrito(carrito);
    mostrarCarrito();
  }
  
  // Vaciar carrito
  function vaciarCarrito() {
    localStorage.removeItem("carrito");
    mostrarCarrito();
  }
  
  // Inicializar al cargar
  document.addEventListener("DOMContentLoaded", () => {
    const botones = document.querySelectorAll(".agregar-carrito");
  
    botones.forEach((btn) => {
      btn.addEventListener("click", (e) => {
        const card = e.target.closest(".card");
        const titulo = card.querySelector(".card-title").textContent;
        const precioTexto = card.querySelector(".fw-bold").textContent.replace(/\D/g, "");
        const precio = parseInt(precioTexto);
  
        const producto = { titulo, precio };
        const carrito = obtenerCarrito();
        carrito.push(producto);
        guardarCarrito(carrito);
  
        alert(`${titulo} fue agregado al carrito.`);
      });
    });
  
    if (window.location.pathname.includes("carrito.html")) {
      mostrarCarrito();
    }
  });
  