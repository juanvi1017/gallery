import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import FavoriteIcon from '@mui/icons-material/Favorite';
import PersonPinIcon from '@mui/icons-material/PersonPin';

import Admin from '../../Admin';
import Perfil from '../Perfil/Perfil';


// style
import './style.css';

export default function MenuBottom() {

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      {value === 0 && (
        <Admin />
      )}
        {value === 1 && (
        <Perfil />
      )}
      <Tabs
        value={value}
        onChange={handleChange}
        aria-label="icon tabs example"
        centered
        TabIndicatorProps={{
          style: {
            backgroundColor: "white"
          }
        }}
        className='menu-bootom'
      >
        <Tab icon={<FavoriteIcon />} aria-label="favorite" />
        <Tab icon={<PersonPinIcon />} aria-label="person" />
      </Tabs>
    </>
  );
}
