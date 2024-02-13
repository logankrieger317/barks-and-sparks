import React from 'react'
import './Buttons.css'
import ReplayIcon from '@mui/icons-material/Replay';
import CloseIcon from '@mui/icons-material/Close';
import StarRateIcon from '@mui/icons-material/StarRate';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FlashOnIcon from '@mui/icons-material/FlashOn';
import { IconButton } from '@mui/material';

function SwipeButtons() {
  const handleRepeatClick = () => {
    console.log('Repeat Button Clicked'); 
  }

  const handleCloseClick = () => {
    console.log('Close Button Clicked');
  }

  const handleLikeClick = () => {
    console.log('Like Button Clicked'); 
  }

  const handleFavoriteClick = () => {
    console.log('Favorite Button Clicked');
  }

  const handleFlashClick = () => {
    console.log('Flash Button Clicked');
  }


  return (
    <div className='swipeButtons'>
        
        <IconButton onClick={handleRepeatClick} className='swipeButtons_repeat'>    
        <ReplayIcon fontSize='large'/>
        </IconButton>

        <IconButton onClick={handleCloseClick} className='swipeButtons_close'>
        <CloseIcon fontSize='large'/>
        </IconButton>

        <IconButton onClick={handleLikeClick} className='swipeButtons_like'>
        <StarRateIcon fontSize='large'/>
        </IconButton>

        <IconButton onClick={handleFavoriteClick} className='swipeButtons_favorite'>
        <FavoriteIcon fontSize='large'/>
        </IconButton>

        <IconButton onClick={handleFlashClick} className='swipeButtons_flash'>
        <FlashOnIcon fontSize='large'/>
        </IconButton>
        
    </div>
  )
}

export default SwipeButtons