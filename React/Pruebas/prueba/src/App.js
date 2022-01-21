import React from 'react';

import Form from './components/Form'
import CharacterCard from './components/CharacterCard'

import './App.css';
 
class App extends React.Component {
  state = {
    characterList: [],
  };
 
  componentDidMount() {
    setTimeout(() => {
      fetch('<https://rickandmortyapi.com/api/character/>', {headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }})
        .then((res) => res.json())
        .then((response) => {
          // La petición trae los personajes en el array results...
          this.setState({
            characterList: response.results,
          });
        });
    }, 2000);
  }
 
  render() {
    return (
      <div className="App">
        <h2>Listado de personajes</h2>
 
        <div>
          {this.state.characterList.length ? (
            this.state.characterList.map((character) => (
              <div key={JSON.stringify(character)}>
                <h4>Id: {character.id}</h4>
                <h4>Name: {character.name}</h4>
 
                <img src={character.image} alt={character.name} />
 
                <p>Status: {character.status}</p>
                <p>Species: {character.species}</p>
              </div>
            ))
          ) : (
            <h3>¡No hay personajes cargados!</h3>
          )}
        </div>
      </div>
    );
  }
}

export default App;