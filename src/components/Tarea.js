import React, { Component } from 'react';

class Tarea extends Component {

    EstiloCompletado() {
        return {
            fontSize: '20px',
            color: this.props.tarea.estado ? 'blue' : 'black',
            textDecoration: 'none'
        }
    }

    render() {
        const {tarea} = this.props;
/*
        return <p style={this.EstiloCompletado()}>
            {tarea.titulo} - 
            {tarea.descripcion} - 
            {tarea.estado} - 
            {tarea.id}
            <input type="checkbox" onChange={this.props.cambiarEstado.bind(this, tarea.id)} />
            <button onClick={this.props.eliminarTarea.bind(this, tarea.id)}>
                x                
            </button>
        </p>
*/

        return (
            <div className="col mb-4">
                <div className="card">
                    <div className="card-header">
                        <h3>{tarea.titulo}</h3>
                        <span className="badge badge-pill badge-danger ml-2">
                            {tarea.id}
                        </span>
                        <button onClick={this.props.eliminarTarea.bind(this, tarea.id)} class="close"><span aria-hidden="true">&times;</span></button>
                    </div>
                    <div className="card-body">
                        <p>{tarea.descripcion}</p>
                    </div>
                </div>
            </div>
        )

    }
}

export default Tarea;
