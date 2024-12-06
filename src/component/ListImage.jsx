import * as React from 'react';
import { useState, useEffect, useCallback } from 'react';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import InfiniteScroll from "react-infinite-scroll-component";

import { list } from '../utils';

import './style.css';

// api
import { get } from '../apirest';
let v =[]

export default function ListImage() {

  const [data, setData] = useState([])
  const [page, setPage] = useState(1)
  const [loading, setLoading] = useState(false)

  const getImage = useCallback(async () => {
    setLoading(true)
    const response = await get(`https://api.unsplash.com/photos?page=${page}&per_page=30`)
    if (response.status === 200) {
      setData(response.data);
    }
    setLoading(false)
  }, [])

  const getImageNext = useCallback(async (next, info) => {
    const response = await get(`https://api.unsplash.com/photos?page=${next}&per_page=30`)
    if (response.status === 200) {
      setData([...info, ...response.data]);
      setPage(next)
    }
  }, [])


  useEffect(() => {
    getImage()
  }, [getImage]);

  return (
    <Box sx={{ width: '100%', height: 'auto', marginTop: '80px' }} >
      <InfiniteScroll
        dataLength={data.length}
        next={() => getImageNext(page + 1, data)}
        hasMore={true}
        loader={<h4>Loading...</h4>}
      >
        <ImageList variant="woven" cols={3}>
          {data.map((item, key) => (
            <ImageListItem key={key}>
              <img
                srcSet={`${item.urls.regular}`}
                src={`${item.urls.small}`}
                alt={`${item.urls.small}`}
                loading="lazy"
              />
            </ImageListItem>
          ))}
        </ImageList>
      </InfiniteScroll>
    </Box>
  );
}
