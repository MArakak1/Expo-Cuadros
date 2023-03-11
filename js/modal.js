const modalContenedor = document.querySelector('.modal-contenedor');
const abrirCarrito = document.getElementById('cesta-carrito');
const cerrarCarrito = document.getElementById('btn-cerrar-carrito');
const modalCarrito = document.querySelector('.modal-carrito');
const vaciarCarrito = document.querySelector('.btn-vaciar-carrito');

//Boton para abrir el carrito
abrirCarrito.addEventListener('click', () => {
    modalContenedor.classList.toggle('modal-active')
});

//Boton para cerrar el carrito
cerrarCarrito.addEventListener('click', () => {
    modalContenedor.classList.toggle('modal-active')
});

modalContenedor.addEventListener('click', () => {
    cerrarCarrito.click()
});

// Boton para eliminar un solo producto
modalCarrito.addEventListener('click', (e) => {
    e.stopPropagation()
    if (e.target.classList.contains('boton-eliminar')) {
        eliminarProductosCarrito(e.target.value)
    }
});

// Boton y SweetAlert de vaciar el carrito 
vaciarCarrito.addEventListener('click', (e) => {
           if(carrito.length !=0) // el carrito no está vacio
      {
        Swal.fire({
            title: '¿Estás seguro que desea vaciar el carrito?',
            text: 'Se eliminaran todos los productos',
            icon:'warning',
            showCancelButton: true,
            confirmButton: '#2c88d9',
            cancelButton: '#d33',
            confirmButtonText: 'Eliminar',
            cancelButton: 'Cancelar'
        }).then ((result) => {
            if(result.isConfirmed) { vaciarTodoCarrito();
                Swal.fire({
                    icon: 'success',
                    title: 'Perfecto',
                    text: 'Los productos han sido eliminados con éxito!'
                });
            };
        });
      
      };
});