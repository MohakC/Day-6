import React, { Component } from 'react'
import Header from './Header'
import ThingList from './ThingList'
import AddButton from './AddButton'
import './App.css'

class App extends Component {
  state = {
    things: {
    }
  }

  addThings(ev) {
    ev.preventDefault() 
  }

  handleChange(ev) {
    const counter = Object.keys(this.state.things).length
    let clone = {...this.state.things}
    let newItem = {}
    newItem = {id: (counter+1).toString(), name: ev.target.value}
    clone[counter+1] = newItem
    this.setState( {things: clone} )
    ev.target.value = ""
  }

  deleteThings(ev) {
    ev.preventDefault();
    const id = ev.currentTarget.id
    let clone = {...this.state.things}
    delete clone[id]
    this.setState( {things: clone}) 
  }

  render() {
    return (
      <div className="App">
        <Header />
        <div>
        <AddButton add={this.addThings.bind(this)}/>
        <textarea className="input" placeholder="Enter a Thing you want to add" onBlur={this.handleChange.bind(this)}/>
        </div>
        <ThingList things={this.state.things} deleteThings={this.deleteThings.bind(this)}/>
      </div>
    );
  }
}

export default App;
