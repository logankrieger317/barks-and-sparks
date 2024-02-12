import React from 'react'
import ForumIcon from '@mui/icons-material/Forum';
import Person2Icon from '@mui/icons-material/Person2';
import PetsIcon from '@mui/icons-material/Pets';
import '../Css/Header.css';
import { IconButton } from '@mui/material';

function Header() {
  return (
    <div className='header'>
    
    <IconButton>
       <Person2Icon id='personIcon'/>
    </IconButton>
    
    <IconButton>
       <PetsIcon id='petsIcon'/>
    </IconButton>
    
    <IconButton>
       <ForumIcon id='messagesIcon'/>
    </IconButton>
    
    </div>
  )
}

export default Header