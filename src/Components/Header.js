import React from 'react'
import ForumIcon from '@mui/icons-material/Forum';
import Person2Icon from '@mui/icons-material/Person2';
import PetsIcon from '@mui/icons-material/Pets';
import '../Css/Header.css';

function Header() {
  return (
    <div className='header'>
       <Person2Icon id='personIcon'/>
       <PetsIcon id='petsIcon'/>
       <ForumIcon id='messagesIcon'/>

    </div>
  )
}

export default Header