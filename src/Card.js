import React, { useEffect, useState } from 'react'
import TinderCard from 'react-tinder-card'
import './Card.css';




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
         {
  name: "Person 1",
  url: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  key: "person1" 
},
{
  name: "Person 2",
  url: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  key: "person2"
},
{
  name: "Person 3", 
  url: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  key: "person3"
},
{
  name: "Person 4",
  url: "https://images.unsplash.com/photo-1525134479668-1bee5c7c6845?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  key: "person4"
},
{
  name: "Person 5",
  url: "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  key: "person5"
},
{
  name: "Person 6",
  url: "https://images.unsplash.com/photo-1530268729831-4b0b9e170218?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  key: "person6"  
},
{
  name: "Person 7",
  url: "https://images.unsplash.com/photo-1530785602389-07594beb8b73?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  key: "person7"
},
{
  name: "Person 8",
  url: "https://plus.unsplash.com/premium_photo-1679971488735-6e4d613c682f?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  key: "person8"
},
{
  name: "Person 9",
  url: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?q=80&w=1727&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  key: "person9" 
},
{
  name: "Person 10",
  url: "https://images.unsplash.com/photo-1485206412256-701ccc5b93ca?q=80&w=1788&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  key: "person10"
}

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