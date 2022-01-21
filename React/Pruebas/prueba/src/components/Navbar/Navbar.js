import React from 'react';
 
import './Navbar.css';
 
// Suponemos que este valor viene de una API
const language = 'es';
 
const spanishTitle = 'Bievenid@!';
const englishTitle = 'Welcome!';
 
const navbarLinks = ['Home', 'About', 'Account'];
 
class Navbar extends React.Component {
  render() {
    return (
      <nav>
        <h1>{language === 'es' ? spanishTitle : englishTitle}</h1>
 
        <ul>
                    {/* ¡Usamos map para iterar y devolver un nuevo JSX! */}
          {navbarLinks.map((linkName) => {
            return <li key={linkName}>{linkName}</li>;
          })}
        </ul>
      </nav>
    );
  }
}
 
export default Navbar;