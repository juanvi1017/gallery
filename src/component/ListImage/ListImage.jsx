import * as React from 'react';
import { useState, useCallback } from 'react';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import InfiniteScroll from "react-infinite-scroll-component";
import ImageListItemBar from '@mui/material/ImageListItemBar';
import IconButton from '@mui/material/IconButton';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ListItemText from '@mui/material/ListItemText';

import { list } from '../../utils';
import ImageLarge from '../ImageLarge/ImageLarge';

import './style.css';

// api
import { get } from '../../apirest';

let movil = false;
let table = false;

export default function ListImage() {

  const [data, setData] = useState(list)
  const [detail, setDetail] = useState(null)
  const [page, setPage] = useState(2)
  const [open, setOpen] = useState(false);

  if (window.innerWidth <= 768) {
    movil = true
    table = false
  }
  else if (window.innerWidth <= 820) {
    movil = false
    table = true
  }

  const getImageNext = useCallback(async (next, info) => {
    const response = await get(`https://api.unsplash.com/photos?page=${next}&per_page=30`)
    if (response.status === 200) {
      setData([...info, ...response.data]);
      setPage(next)
    }
  }, [])

  const view = (value) => {
    setDetail(value)
    setOpen(true)
  }


  return (
    <Box sx={{ width: '100%', height: 'auto', marginBottom: '20px', overflowX: 'hidden' }} >
      <InfiniteScroll
        dataLength={data.length}
        next={() => getImageNext(page + 1, data)}
        hasMore={true}
        loader={<h4>Loading...</h4>}
      >
        <ImageList cols={movil ? 1 : table ? 2 : 3} gap={1} className='image-list'>
          {data.map((item, key) => (
            <ImageListItem key={key}>
              <img
                srcSet={`${item.urls.regular}`}
                src={`${item.urls.small}`}
                alt={`${item.slug}`}
                loading="lazy"
                onClick={() => view(item)}
              />
              <ImageListItemBar
                title={item.user.name}
                subtitle={<span>by: @{item.user.username}</span>}
                position="below"
                actionIcon={
                  <IconButton
                    sx={{ color: 'purple' }}
                    aria-label='info about'
                  >
                    <FavoriteBorderIcon />
                    <ListItemText primary={`${item.likes}`} />
                  </IconButton>
                }
              />
            </ImageListItem>
          ))}
        </ImageList>
      </InfiniteScroll>
      {open && (
        <ImageLarge
          open={open}
          onClose={() => setOpen(false)}
          data={detail}
        />
      )}
    </Box>
  );
}
