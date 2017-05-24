import React, { Component } from 'react'
import Header from './Header'
import ThingList from './ThingList'
import AddButton from './AddButton'
import base from './base'
import './App.css'

class App extends Component {
  componentWillMount(){
    base.syncState('things', {context: this, state: 'things'})
  }
  state = {
    things: {
    }
  }

  handleChange(ev) {
    ev.preventDefault()
    const counter = Object.keys(this.state.things).length
    let clone = {...this.state.things}
    let newItem = {}
    newItem = {id: (counter+1).toString(), name: ev.currentTarget.children[1].value, checked: false}
    clone[counter+1] = newItem
    this.setState( {things: clone} )
    ev.currentTarget.children[1].value = ""
  }

  deleteThings(ev) {
    ev.preventDefault();
    const id = ev.currentTarget.id
    let clone = {...this.state.things}
    clone[id] = null
    this.setState( {things: clone}) 
  }

  checkIt(ev){
    let clone = {...this.state.things}
    clone[ev.target.id].checked = ev.currentTarget.checked
    this.setState( {things: clone} )
  }

  render() {
    return (
      <div className="App">
        <Header />
        <div>
        <form onSubmit={this.handleChange.bind(this)}>
        <AddButton />
        <textarea className="input" placeholder="Enter a Thing you want to add" />
        </form>
        </div>
        <ThingList 
          things={this.state.things} 
          deleteThings={this.deleteThings.bind(this)} 
          checkIt={this.checkIt.bind(this)}/>
      </div>
    );
  }
}

export default App;
