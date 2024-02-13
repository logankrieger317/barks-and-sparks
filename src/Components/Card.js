import React, { useEffect, useState } from 'react'
import TinderCard from 'react-tinder-card'
import '../Css/Card.css';
import SwipeButtons from './SwipeButtons';

function Card() {

    const [people, setPeople] = useState([
        { 
            name: "John Doe",
            url: "https://images.unsplash.com/photo-1492447273231-0f8fecec1e3a?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            key: "john"
         },
         {
            name: "Jane Doe",
            url: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            key: "jane"
         },
    ])
        


  return (
    <div>
    
    <div className='tinderCards_cardContainer'>
      
        {people.map(person =>(
            <TinderCard
                className='swipe'
                key={person.name}
                preventSwipe={['up', 'down']}
                >
                <div 
                    style={{backgroundImage:`url(${person.url})`}} 
                    className='card'>

                    <h3>{person.name}</h3>

                </div>
              
            </TinderCard>
        ))}
            
    </div>
    </div>
     
   );

  
}

export default Card