import React from 'react'
import './Cards.css'

function Cards(props) {
  return (
    <div className="card">
        <div class="item1">
            {
                props.props.map((curr)=>(
                    <div className="cards">
                        <div class="item10">{curr.name}</div>
                        <div class="item10">{curr.id}</div>
                        
                        <div class="item10">{curr.name}</div>
                        <div class="item10">{curr.id}</div>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default Cards