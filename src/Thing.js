import React, {Component } from 'react'
import DeleteButton from './DeleteButton'
import PromoteButton from './PromoteButton'
import './Thing.css'

class Thing extends Component {
  render(){
    const props = this.props
     return (
    <li className="Thing" style={{backgroundColor: props.thing.promoted}}>
      <input 
        type="checkbox" 
        defaultChecked={props.thing.checked} 
        onClick={props.checkIt} 
        id={props.thing.id} 
      />
      <div className="details">
        <div className="name">
          {props.thing.name}
            <DeleteButton 
              deleteThings={props.deleteThings} 
              thisid={props.thing.id} 
            />
            <PromoteButton 
              promoteIt={props.promoteIt}
              thisid={props.thing.id}
            />
            <input
              className="date"
              id={props.thing.id}
              type="date"
              onChange={props.addDate}
              defaultValue={props.thing.date}
            />  
        </div>
      </div>
    </li>
  )
  }
}

export default Thing