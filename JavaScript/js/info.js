
(async function () {
    const subcontenedor = document.createElement('div');
    subcontenedor.setAttribute('class', 'list__content');

    for (let i = 1; i < 21; i++) {
        const response = await fetch('https://pokeapi.co/api/v2/pokemon/' + i);
        const data = await response.json();
        console.log(data);

        const contenedor = document.getElementById('main');

        

        const tarjeta = document.createElement('div');
        tarjeta.setAttribute('class', 'card');

        const cabeceraTarjeta = document.createElement('div');
        cabeceraTarjeta.setAttribute('class', 'card-header');
        const cuerpoTarjeta = document.createElement('div');
        cuerpoTarjeta.setAttribute('class', 'card-body');

        const titulo = document.createElement('h5');
        titulo.setAttribute('class', 'card-title');
        titulo.textContent = data.name;
        const imagen = document.createElement('img');
        imagen.setAttribute('class', 'card-img');
        imagen.setAttribute('src', data.sprites.front_default);

        contenedor.appendChild(subcontenedor);
        subcontenedor.appendChild(tarjeta);

        tarjeta.appendChild(cabeceraTarjeta);
        tarjeta.appendChild(cuerpoTarjeta);

        cabeceraTarjeta.appendChild(titulo);

        cuerpoTarjeta.appendChild(imagen);
    }
})();