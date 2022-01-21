import React from 'react';

class Header extends React.Component {
    render() {
        return (
            <header>
                <img src={this.props.image} alt="User" />
                <h1>{this.props.fullName}</h1>
            </header>
        );
    }
}

export default Header;