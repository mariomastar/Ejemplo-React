import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Menu extends Component {
    
    render() {
        let cantidad = this.props.cantidad;
        return (
            <nav className="navbar navbar-dark bg-dark">
                <a href="/" className="text-white">Tareas
                    <span className="badge badge-pill badge-light ml-2">{cantidad}</span>
                </a>
                <Link to="/posts">Posts</Link>
            </nav>
        )
    }
}

export default Menu;