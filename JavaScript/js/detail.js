function showDetail (name, img) {
    var padre = document.getElementById("main");
    var child = document.getElementById("list__content");
    padre.removeChild(child);

    const contenedor = document.getElementById('main');

    const subcontenedor = document.createElement('div');
    subcontenedor.setAttribute('class', 'list__content');
    subcontenedor.setAttribute('id', 'list__content');

    const tarjeta = document.createElement('div');
    tarjeta.setAttribute('class', 'list__card');
    tarjeta.setAttribute('id', 'list__card');

    const cabeceraTarjeta = document.createElement('div');
    cabeceraTarjeta.setAttribute('class', 'list__card-header');

    const cuerpoTarjeta = document.createElement('div');
    cuerpoTarjeta.setAttribute('class', 'list__card-body');

    const titulo = document.createElement('h5');
    titulo.setAttribute('class', 'list__card-title');
    titulo.textContent = name;

    const imagen = document.createElement('img');
    imagen.setAttribute('class', 'list__card-img');
    imagen.setAttribute('src', img);

    contenedor.appendChild(subcontenedor);
    subcontenedor.appendChild(tarjeta);

    tarjeta.appendChild(cabeceraTarjeta);
    tarjeta.appendChild(cuerpoTarjeta);

    cabeceraTarjeta.appendChild(titulo);

    cuerpoTarjeta.appendChild(imagen);
}

export {showDetail}