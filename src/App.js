
import React, { Component } from 'react';
import './App.css';
import CountDownTimer from './CountDownTimer';

class App extends Component {

  state = { nombre: '', apellido: '', hobbie: '' };

 

  sendData(){
    console.log(this.state)

  }

  syncChanges(value, property){
      let state ={};
      state[property] = value; 
      this.setState(state);

      }


  render() {
    return (
      <div>
        <pre> {JSON.stringify(this.state)} </pre>

        <form>
          <label htmlFor="nombre"> Nombre</label>
          <input name="nombre" type="text" placeholder="inserte su nombre" onChange={(ev) => { this.syncChanges(ev.target.value, 'nombre') }} />
          <p/>

          <label htmlFor="apellido"> Apellidos</label>
          <input name="nombre" type="text" placeholder="inserte su apellido" onChange={(ev) => { this.syncChanges(ev.target.value, 'apellido') }} />
          <p/>

          <label htmlFor="hobbie"> Hobbie: </label>
          <input name="nombre" type="text" placeholder="inserte su hobbie" onChange={(ev) => { this.syncChanges(ev.target.value , 'hobbie')  }} />
          <p/>

          <label htmlFor="fechaCum"> Fecha de nacimiento: </label>
          <p/>
          <input name="fechaCum" type="date" onChange={(ev) => { this.syncChanges(ev.target.value, 'fecha') }} />

          <p/>

          <input onClick={ ()=> this.sendData()} type="submit" value="submit" />

        </form>
      </div>

    );


  }


}


function A() {

  const hoursMinSecs = { hours: 1, minutes: 20, seconds: 40 }

  return (
    <div className="App">
      <CountDownTimer hoursMinSecs={hoursMinSecs} />
    </div>
  );
}

export default App;
