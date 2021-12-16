
(async function () {
    for (let i = 1; i < 21; i++) {
        const response = await fetch('https://pokeapi.co/api/v2/pokemon/' + i);
        const data = await response.json();
        console.log(data);

        const contenedor = document.getElementById('main');

        // Creamos una tarjeta
        const tarjeta = document.createElement('div');
        tarjeta.setAttribute('class', 'card');

        // Creamos el la cabecera y el cuerpo de la tarjeta
        const cabeceraTarjeta = document.createElement('div');
        cabeceraTarjeta.setAttribute('class', 'card-header');

        const cuerpoTarjeta = document.createElement('div');
        cuerpoTarjeta.setAttribute('class', 'card-body');

        // Creamos el encabezado y le asignamos el título de la película
        const titulo = document.createElement('h5');
        titulo.setAttribute('class', 'card-title');
        titulo.textContent = data.name;

        const imagen = document.createElement('img');
        imagen.setAttribute('class', 'card-img');
        imagen.setAttribute('src', data.sprites.front_default);

        // Agregamos la tarjeta
        contenedor.appendChild(tarjeta);

        // Agregamos la cabecera y el cuerpo a la tarjeta
        tarjeta.appendChild(cabeceraTarjeta);
        tarjeta.appendChild(cuerpoTarjeta);

        // Agregamos el título a la cabecera
        cabeceraTarjeta.appendChild(titulo);

        // Agregamos la descripción al cuerpo
        cuerpoTarjeta.appendChild(imagen);
    }
})();