import React, { Component } from 'react';
import './App.css';

import tareas from './sample/tareas.json';
import Tareas from './components/Tareas';
import TareaForm from './components/TareaForm';
import Posts from './components/Posts';
import Menu from './components/Menu';

import { BrowserRouter as Router, Route } from 'react-router-dom';

//console.log(tareas)

class App extends Component {

  state = {
    tareas: tareas
  }

  agregarTarea = (titulo, descripcion) => {
    //console.log(titulo, descripcion)
    const nuevaTarea = {
      titulo: titulo,
      descripcion: descripcion,
      estado: false,
      id: this.state.tareas.length
    }

    this.setState({
      tareas: [...this.state.tareas, nuevaTarea]
    })
  }

  eliminarTarea = (id) => {
    const nuevasTareas = this.state.tareas.filter(tarea => tarea.id !== id);
    //console.log(nuevasTareas);
    this.setState({tareas: nuevasTareas})
  }

  cambiarEstado = id => {
    const nuevasTareas = this.state.tareas.map(tarea => {
      if(tarea.id === id) {
        tarea.estado = !tarea.estado
      }
      return tarea;
    });
    this.setState({tareas: nuevasTareas})
  }

  render() {
    //this.agregarTarea()
    return (
      <div>
        <Router>
          <Menu cantidad={this.state.tareas.length}/>
          <Route exact path="/" render={() => {
            return <div className="container">
                  <div className="row">
                  
                    <TareaForm agregarTarea={this.agregarTarea}/>

                  <div className="col-md-8">
                      <Tareas
                        tareas={this.state.tareas}
                        eliminarTarea={this.eliminarTarea}
                        cambiarEstado={this.cambiarEstado}
                      />
                  </div>
                  </div>
              </div>
          }}>

          </Route>
          <Route path="/posts" component={Posts} />
        </Router>
      </div>
    )
  }
}

export default App;
