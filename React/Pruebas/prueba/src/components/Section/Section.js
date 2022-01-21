import React from 'react';
import PropTypes from 'prop-types';
 
class Section extends React.Component {
    render() {
        return (
            <section>
                <ul>
                    {this.props.elements.map(el => {
                        return (
                            <li key={el.title}>
                                <p>Title: {el.title}</p>
                                <p>Company: {el.company}</p>
                            </li>
                        );
                    })}
                </ul>
            </section>
        );
    }
}
 
// Explicaremos este ejemplo en clase al ser una demostración de props complejos.
Section.propTypes = {
    elements: PropTypes.arrayOf(PropTypes.shape({
        title: PropTypes.string,
        company: PropTypes.string,
    }))
}
 
// Este valor será el que obtenga this.props.elements si no envíamos nada.
Section.defaultProps = {
    elements: []   
}

export default Section;