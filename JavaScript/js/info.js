const getList = async () => {
    var list = [];

    for (let i = 1; i < 21; i++) {
        const response = await fetch('https://pokeapi.co/api/v2/pokemon/' + i);
        const data = await response.json();
        list.push(data);
        console.log(data);
    }
    
    return list;
}

export {getList}