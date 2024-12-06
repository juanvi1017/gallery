import * as React from 'react';
import Dialog from '@mui/material/Dialog';

import './style.css';


export default function ImageLarge({ open, onClose, data }) {


    return (
        <Dialog
            fullWidth
            maxWidth='md'
            open={open}
            onClose={onClose}
        >
            <spam className='close' onClick={() => onClose(false)}>X</spam>
            <img
                srcSet={`${data.urls.regular}`}
                src={`${data.urls.small}`}
                alt={`${data.slug}`}
                loading="lazy"
                style={{width: '100%', height: '90vh'}}
            />
        </Dialog>
    );
}
