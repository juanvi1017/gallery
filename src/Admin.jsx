import ListImage from './component/ListImage/ListImage';
import Hero from './component/Hero/Hero';
import { Grid2 } from '@mui/material';

function Admin() {

  return (
    <>
      <Hero />
      <Grid2 container spacing={1} justifyContent='center' textAlign='center'>
        <Grid2 size={{ xs: 11, md: 12 }}>
          <ListImage />
        </Grid2>
      </Grid2>
    </>
  )
}

export default Admin
