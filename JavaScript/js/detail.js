function showDetail (name, img, ability) {
    current = 3;
    var padre = document.getElementById("main");
    var child = document.getElementById("list__content");
    padre.removeChild(child);

    const contenedor = document.getElementById('main');

    const subcontenedor = document.createElement('div');
    subcontenedor.setAttribute('class', 'detail__content');
    subcontenedor.setAttribute('id', 'detail__content');

    const tarjeta = document.createElement('div');
    tarjeta.setAttribute('class', 'detail__card');
    tarjeta.setAttribute('id', 'detail__card');

    const cabeceraTarjeta = document.createElement('div');
    cabeceraTarjeta.setAttribute('class', 'detail__card-header');

    const cuerpoTarjeta = document.createElement('div');
    cuerpoTarjeta.setAttribute('class', 'detail__card-body');

    const titulo = document.createElement('h2');
    titulo.setAttribute('class', 'detail__card-title');
    titulo.textContent = name;

    const imagen = document.createElement('img');
    imagen.setAttribute('class', 'detail__card-img');
    imagen.setAttribute('src', img);

    const titulo2 = document.createElement('h4');
    titulo2.setAttribute('class', 'detail__card-title');
    titulo2.textContent = "Habilidades: ";

    const parrafo = document.createElement('p');
    parrafo.setAttribute('class', 'detail__card-body-text');
    parrafo.textContent = ability;

    contenedor.appendChild(subcontenedor);
    subcontenedor.appendChild(tarjeta);

    tarjeta.appendChild(cabeceraTarjeta);
    tarjeta.appendChild(cuerpoTarjeta);

    cabeceraTarjeta.appendChild(titulo);

    cuerpoTarjeta.appendChild(imagen);
    cuerpoTarjeta.appendChild(titulo2);
    cuerpoTarjeta.appendChild(parrafo);
}

export {showDetail}