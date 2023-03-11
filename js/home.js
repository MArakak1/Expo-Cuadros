const pintarProductos = (productos) => {
    const contenedor = document.getElementById("producto-contenedor");

    productos.forEach(producto => {
      const div = document.createElement('div');
      div.classList.add('card');
      div.innerHTML += `<div class="card-image">
                          <img src=${producto.imagen}>
                          <span class="card-title">${producto.nombre}</span>
                          <a class="btn-floating halfway-fab wabes-effect waves-light red"><i id=${producto.id} class="material-icons agregar">add_shopping_cart</i></a>
                        </div>
                        <div class="card-content">
                            <p>${producto.medidas}</p>
                            <p>${"$"+producto.precio}</p>
                        </div>
                       `
      contenedor.appendChild(div);
    });
};

// Mostrar catalogo con FETCH 

const mostrarCatalogoProximo = document.getElementById('producto-proximo-contenedor')

fetch('../../data/CatalogoProximamente.json')
    .then((resp) => resp.json())
    .then(data => {

      console.log(data)
       data.forEach(post => {
          const div = document.createElement('div');
          div.classList.add('card');
          div.innerHTML += `<div class="card-image">
            <img src=${post.imagen}>
            <span class="card-title">${post.nombre}</span>
          
          </div>
          <div class="card-content">
              <p>${post.medidas}</p>
              <p>${post.precio}</p>
          </div>
         `
         // Este se agrega cuando estén disponibles <a class="btn-floating halfway-fab wabes-effect waves-light red"><i id=${post.id} class="material-icons agregar">add_shopping_cart</i></a>
            mostrarCatalogoProximo.appendChild(div);
        });
    });

// SweetAlert confirmación de agregado al carrito
const btn1 = document.querySelector ("#producto-contenedor")

btn1.addEventListener ('click', (e) => {
  if(e.target.classList.contains('agregar'))
  Swal.fire ( {
    icon: 'success',
    title: 'Perfecto',
    text: 'El producto se agregó al carrito correctamente.  '
  });
});