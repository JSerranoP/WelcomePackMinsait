window.onload = function() {
    //setTimeout(showAlert, 2000);
    showMain();
}

function showAlert() {
    alert("Bienvenido a mi web");
}

function showList() {

}

function showMain() {
    const contenedor = document.getElementById('main');

    const titulo = document.createElement('h2');
    titulo.setAttribute('class', 'main__title');
    titulo.textContent = "Temática: Pokemon";

    const parrafo1 = document.createElement('p');
    parrafo1.setAttribute('class', 'main__content');
    parrafo1.textContent = "En esta web se pretende mostrar una lista de Pokemons con sus respectivos nombres, imagenes y descripción";

    const parrafo2 = document.createElement('p');
    parrafo2.setAttribute('class', 'main__content');
    parrafo2.textContent = "En el header encontramos el link a la vista actual y a la vista del listado de los distintos pokemons";

    const parrafo3 = document.createElement('p');
    parrafo3.setAttribute('class', 'main__content');
    parrafo3.textContent = "En el footer o pie de pagina, podemos ver los iconos con los links a las redes sociales de Pokemon";

    const parrafo4 = document.createElement('p');
    parrafo4.setAttribute('class', 'main__content');
    parrafo4.textContent = "En la vista principal, al hacer hover por algun elemento, este cambia de color, y al hacer out vuelve a su estado original";

    const parrafo5 = document.createElement('p');
    parrafo5.setAttribute('class', 'main__content');
    parrafo5.textContent = "Al clickar en un bloque que está condensado, este se despliega para mostrar toda la información";

    const parrafo6 = document.createElement('p');
    parrafo6.setAttribute('class', 'main__content');
    parrafo6.textContent = "La vista del listado de Pokemons se ha cargado dinámicamente";

    const parrafo7 = document.createElement('p');
    parrafo7.setAttribute('class', 'main__content');
    parrafo7.textContent = "Se muestran inicialmente el nombre y la imagen de cada uno";

    const parrafo8 = document.createElement('p');
    parrafo8.setAttribute('class', 'main__content');
    parrafo8.textContent = "Al hacer click sobre ellos, navegaremos a la vista en detalle";

    const parrafo9 = document.createElement('p');
    parrafo9.setAttribute('class', 'main__content');
    parrafo9.textContent = "La vista en detalle recibe un objeto con los datos del elemento clickado";

    const parrafo10 = document.createElement('p');
    parrafo10.setAttribute('class', 'main__content');
    parrafo10.textContent = "En ella aparece de nuevo el nombre y la imagen del Pokemon, pero también su descripción";
    
    const saltoLinea1 = document.createElement('br');
    const saltoLinea2 = document.createElement('br');

    contenedor.appendChild(titulo);
    contenedor.appendChild(parrafo1);
    contenedor.appendChild(parrafo2);
    contenedor.appendChild(parrafo3);
    contenedor.appendChild(parrafo4);
    contenedor.appendChild(parrafo5);
    contenedor.appendChild(saltoLinea1);
    contenedor.appendChild(parrafo6);
    contenedor.appendChild(parrafo7);
    contenedor.appendChild(parrafo8);
    contenedor.appendChild(saltoLinea2);
    contenedor.appendChild(parrafo9);
    contenedor.appendChild(parrafo10);
}