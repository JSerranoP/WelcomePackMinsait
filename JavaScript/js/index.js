import {showPokemons, addListeners2} from "./list.js";

window.onload = function() {
    //setTimeout(showAlert, 2000);
    showMain();
    addListeners1();
}

var current;

function showAlert() {
    alert("Bienvenido a mi web");
}

function addListeners1() {
    document.getElementById("home__icon").addEventListener("click", showMain);
    document.getElementById("home__button").addEventListener("click", showMain);
    document.getElementById("list__button").addEventListener("click", showList);
    document.getElementById("home__icon").addEventListener("mouseover", onMouseOver);
    document.getElementById("home__button").addEventListener("mouseover", onMouseOver);
    document.getElementById("list__button").addEventListener("mouseover", onMouseOver);
    document.getElementById("home__icon").addEventListener("mouseout", onMouseOut);
    document.getElementById("home__button").addEventListener("mouseout", onMouseOut);
    document.getElementById("list__button").addEventListener("mouseout", onMouseOut);
}

var onMouseOver = function(event) {
    document.getElementById(event.target.id).classList.add("header__navbarItem--hover");
}

var onMouseOut = function(event) {
    document.getElementById(event.target.id).classList.remove("header__navbarItem--hover");
}

var showList = function(event) {
    if(current == 1){
        alert("Ya estamos aquí");
    } else {
        current = 1
        var padre = document.getElementById("main");
        var child = document.getElementById("main__content");
        padre.removeChild(child);
        showPokemons();
        addListeners2();
    }
}

function showMain() {
    if(current == 0){
        alert("Ya estamos aquí");
    } else {
        current = 0;

        var padre = document.getElementById("main");
        var child = document.getElementById("list__content");
        if(child)
            padre.removeChild(child);
        
        const contenedor = document.getElementById('main');

        const main_content = document.createElement('div');
        main_content.setAttribute('id', 'main__content');

        const titulo = document.createElement('h2');
        titulo.setAttribute('class', 'main__title');
        titulo.textContent = "Temática: Pokemon";

        const parrafo1 = document.createElement('p');
        parrafo1.setAttribute('class', 'main__paragraph');
        parrafo1.textContent = "En esta web se pretende mostrar una lista de Pokemons con sus respectivos nombres, imagenes y descripción";

        const parrafo2 = document.createElement('p');
        parrafo2.setAttribute('class', 'main__paragraph');
        parrafo2.textContent = "En el header encontramos el link a la vista actual y a la vista del listado de los distintos pokemons";

        const parrafo3 = document.createElement('p');
        parrafo3.setAttribute('class', 'main__paragraph');
        parrafo3.textContent = "En el footer o pie de pagina, podemos ver los iconos con los links a las redes sociales de Pokemon";

        const parrafo4 = document.createElement('p');
        parrafo4.setAttribute('class', 'main__paragraph');
        parrafo4.textContent = "En la vista principal, al hacer hover por algun elemento, este cambia de color, y al hacer out vuelve a su estado original";

        const parrafo5 = document.createElement('p');
        parrafo5.setAttribute('class', 'main__paragraph');
        parrafo5.textContent = "Al clickar en un bloque que está condensado, este se despliega para mostrar toda la información";

        const parrafo6 = document.createElement('p');
        parrafo6.setAttribute('class', 'main__paragraph');
        parrafo6.textContent = "La vista del listado de Pokemons se ha cargado dinámicamente";

        const parrafo7 = document.createElement('p');
        parrafo7.setAttribute('class', 'main__paragraph');
        parrafo7.textContent = "Se muestran inicialmente el nombre y la imagen de cada uno";

        const parrafo8 = document.createElement('p');
        parrafo8.setAttribute('class', 'main__paragraph');
        parrafo8.textContent = "Al hacer click sobre ellos, navegaremos a la vista en detalle";

        const parrafo9 = document.createElement('p');
        parrafo9.setAttribute('class', 'main__paragraph');
        parrafo9.textContent = "La vista en detalle recibe un objeto con los datos del elemento clickado";

        const parrafo10 = document.createElement('p');
        parrafo10.setAttribute('class', 'main__paragraph');
        parrafo10.textContent = "En ella aparece de nuevo el nombre y la imagen del Pokemon, pero también su descripción";
        
        const saltoLinea1 = document.createElement('br');
        const saltoLinea2 = document.createElement('br');

        contenedor.appendChild(main_content);
        main_content.appendChild(titulo);
        main_content.appendChild(parrafo1);
        main_content.appendChild(parrafo2);
        main_content.appendChild(parrafo3);
        main_content.appendChild(parrafo4);
        main_content.appendChild(parrafo5);
        main_content.appendChild(saltoLinea1);
        main_content.appendChild(parrafo6);
        main_content.appendChild(parrafo7);
        main_content.appendChild(parrafo8);
        main_content.appendChild(saltoLinea2);
        main_content.appendChild(parrafo9);
        main_content.appendChild(parrafo10);
    }
}