import React, { Component } from 'react';

class TareaForm extends Component {

    state = {
        titulo: '',
        descripcion: ''
    }

    onSubmit = e => {
        //console.log(this.state)
        this.props.agregarTarea(this.state.titulo, this.state.descripcion)
        e.preventDefault()
    }

    onChange = e => {
        //console.log(e.target.name, e.target.value)
        this.setState(
            {
                [e.target.name]: e.target.value
            }
        )
    }

    render() {
        return (
            <div className="card">
            <div className="card-body">
            <form onSubmit={this.onSubmit}>
                <div className="form-group">
                    <input 
                        type="text"
                        name="titulo"
                        placeholder="Ingrese tarea"
                        className="form-control"
                        onChange={this.onChange}
                        value={this.state.titulo}/>
                </div>
                <div className="form-group">
                    <textarea
                        name="descripcion"
                        placeholder="Comentario"
                        className="form-control"
                        onChange={this.onChange}
                        value={this.state.descripcion}></textarea>
                </div>
                <div className="form-group">
                    <button type="submit" className="btn btn-primary">Ingrese</button>
                </div>
            </form>
            </div>
            </div>
        )
    }
}

export default TareaForm;
