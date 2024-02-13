import React from 'react'
import '../Css/Buttons.css'
import ReplayIcon from '@mui/icons-material/Replay';
import CloseIcon from '@mui/icons-material/Close';
import StarRateIcon from '@mui/icons-material/StarRate';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FlashOnIcon from '@mui/icons-material/FlashOn';
import { IconButton } from '@mui/material';

function SwipeButtons() {
  return (
    <div className='swipeButtons'>
        
        <IconButton className='swipeButtons_repeat'>    
        <ReplayIcon fontSize='large'/>
        </IconButton>

        <IconButton className='swipeButtons_close'>
        <CloseIcon fontSize='large'/>
        </IconButton>

        <IconButton className='swipeButtons_like'>
        <StarRateIcon fontSize='large'/>
        </IconButton>

        <IconButton className='swipeButtons_favorite'>
        <FavoriteIcon fontSize='large'/>
        </IconButton>

        <IconButton className='swipeButtons_flash'>
        <FlashOnIcon fontSize='large'/>
        </IconButton>
        
    </div>
  )
}

export default SwipeButtons