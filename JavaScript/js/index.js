import {showPokemons} from "./list.js";

window.onload = function() {
    //setTimeout(showAlert, 2000);
    showMain();
    addListeners();
}

window.current = 4;

function showAlert() {
    alert("Bienvenido a mi web");
}

function addListeners() {
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

function showList() {
    if(current == 1){
        alert("Ya estamos aquí");
    } else {
        current = 1
        var padre = document.getElementById("main");
        while(padre.hasChildNodes())
            padre.removeChild(padre.firstChild);
        showPokemons();
    }
}

function showMain() {
    if(current == 0){
        alert("Ya estamos aquí");
    } else {
        current = 0;

        var padre = document.getElementById("main");
        var padre = document.getElementById("main");
        while(padre.hasChildNodes())
            padre.removeChild(padre.firstChild);
        
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

        const main_dropdown1 = document.createElement('div');
        main_dropdown1.setAttribute('id', 'main__dropdown2');
        main_dropdown1.setAttribute('class', 'main__dropdown');
        main_dropdown1.addEventListener("click", showDropdown1);

        const main_dropdown_titulo1 = document.createElement('h2');
        main_dropdown_titulo1.setAttribute('class', 'main_dropdown_titulo');
        main_dropdown_titulo1.textContent = "Historia de Pokemon";

        const main_dropdown_angle1 = document.createElement('i');
        main_dropdown_angle1.setAttribute('class', 'fa-solid fa-angle-down main__dropdown-icon');

        const main_dropdown_content1 = document.createElement('div');
        main_dropdown_content1.setAttribute('id', 'main__dropdown-content1');
        main_dropdown_content1.setAttribute('class', 'main__dropdown-content');

        const parrafo11 = document.createElement('p');
        parrafo11.setAttribute('class', 'main__paragraph');
        parrafo11.textContent = "Cuando el creador, Satoshi Tajiri, era joven, uno de sus pasatiempos favoritos era la recolección y colección de insectos.8​ Tajiri se dirigió a la ciudad de Tokio a estudiar, ya que su padre quería que fuese ingeniero. Sin embargo, a Tajiri no le agradaba la idea de estudiar y se dedicaba más a pasatiempos como los videojuegos. Pasó un tiempo y Tajiri llegó a trabajar como jugador de prueba de algunos juegos para revistas, junto a Ken Sugimori, con quien hizo una gran amistad. En 1989 crearon una revista llamada Game Freak.";

        const main_dropdown2 = document.createElement('div');
        main_dropdown2.setAttribute('id', 'main__dropdown2');
        main_dropdown2.setAttribute('class', 'main__dropdown');
        main_dropdown2.addEventListener("click", showDropdown2);

        const main_dropdown_titulo2 = document.createElement('h2');
        main_dropdown_titulo2.setAttribute('class', 'main_dropdown_titulo');
        main_dropdown_titulo2.textContent = "Concepto de Pokemon";

        const main_dropdown_angle2 = document.createElement('i');
        main_dropdown_angle2.setAttribute('class', 'fa-solid fa-angle-down main__dropdown-icon');

        const main_dropdown_content2 = document.createElement('div');
        main_dropdown_content2.setAttribute('id', 'main__dropdown-content2');
        main_dropdown_content2.setAttribute('class', 'main__dropdown-content');

        const parrafo12 = document.createElement('p');
        parrafo12.setAttribute('class', 'main__paragraph');
        parrafo12.textContent = "Los Pokémon son una clase de criaturas inspiradas en animales reales, insectos, objetos, plantas o criaturas mitológicas. Los jugadores toman el papel Entrenadores Pokémon y tienen tres objetivos generales: completar la Pokédex mediante la recopilación de todas las especies de Pokémon disponibles que se encuentran, entrenar un equipo de Pokémon poderosos de aquellos que han atrapado para competir contra otros entrenadores. El objetivo final del juego es llegar a ganar la Liga Pokémon y convertirse en el campeón regional. La temática de coleccionar, entrenar y luchar están presentes en casi todas las versiones de la franquicia Pokémon, incluidos los videojuegos, las series de anime y manga, y el juego de cartas coleccionables Pokémon. títulos también implican que el jugador pueda desentrañar misterios sobre la existencia de Pokémon legendarios o míticos.";
        
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

        main_content.appendChild(main_dropdown1);
        main_dropdown1.appendChild(main_dropdown_titulo1);
        main_dropdown1.appendChild(main_dropdown_angle1);
        main_content.appendChild(main_dropdown_content1);
        main_dropdown_content1.appendChild(parrafo11);

        main_content.appendChild(main_dropdown2);
        main_dropdown2.appendChild(main_dropdown_titulo2);
        main_dropdown2.appendChild(main_dropdown_angle2);
        main_content.appendChild(main_dropdown_content2);
        main_dropdown_content2.appendChild(parrafo12);
    }
}

function showDropdown1() {
    document.getElementById("main__dropdown-content1").classList.toggle("main__dropdown-content--click");
}

function showDropdown2() {
    document.getElementById("main__dropdown-content2").classList.toggle("main__dropdown-content--click");
}