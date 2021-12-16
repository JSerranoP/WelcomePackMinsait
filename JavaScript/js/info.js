
(async () => {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon/');
    const data = await response.json();
    for(let i = 0; i < data.results.length; i++){
        console.log(data.results[i].name);
    }
})();