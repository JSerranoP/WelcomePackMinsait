import {getList} from "./info.js";
import {showDetail} from "./detail.js";

const showPokemons = async() => {
    const list = await getList()

    const subcontenedor = document.createElement('div');
    subcontenedor.setAttribute('class', 'list__content');
    subcontenedor.setAttribute('id', 'list__content');

    for (let i = 0; i < 20; i++) {
        const contenedor = document.getElementById('main');

        const tarjeta = document.createElement('div');
        tarjeta.setAttribute('class', 'list__card');
        tarjeta.setAttribute('id', 'list__card' + i);
        //tarjeta.addEventListener("click", showDetail(await list[i].name, await list[i].sprites.front_default));
        tarjeta.addEventListener("mouseover", onMouseOver);
        tarjeta.addEventListener("mouseout", onMouseOut);

        const cabeceraTarjeta = document.createElement('div');
        cabeceraTarjeta.setAttribute('class', 'list__card-header');

        const cuerpoTarjeta = document.createElement('div');
        cuerpoTarjeta.setAttribute('class', 'list__card-body');

        const titulo = document.createElement('h5');
        titulo.setAttribute('class', 'list__card-title');
        titulo.textContent = await list[i].name;

        const imagen = document.createElement('img');
        imagen.setAttribute('class', 'list__card-img');
        imagen.setAttribute('src', await list[i].sprites.front_default);

        contenedor.appendChild(subcontenedor);
        subcontenedor.appendChild(tarjeta);

        tarjeta.appendChild(cabeceraTarjeta);
        tarjeta.appendChild(cuerpoTarjeta);

        cabeceraTarjeta.appendChild(titulo);

        cuerpoTarjeta.appendChild(imagen);
    }
}

var onMouseOver = function(event) {
    console.log(event.target.id);
    document.getElementById(event.target.id).classList.add("list__card--hover");
}

var onMouseOut = function(event) {
    document.getElementById(event.target.id).classList.remove("list__card--hover");
}

export {showPokemons}