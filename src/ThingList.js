import React from 'react'
import Thing from './Thing'
import './ThingList.css'

const ThingList = (props) => {
    return (
        <ul className="ThingList">
          { Object
            .keys(props.things)
            .map(thingID => <Thing thing={props.things[thingID]} key={thingID}/>)
          }
        </ul>
    )
}

export default ThingList