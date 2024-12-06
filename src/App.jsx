import ListImage from './component/ListImage/ListImage';
import MenuBottom from './component/MenuBottom/MenuBottom';
import MenuTop from './component/MenuTop/MenuTop';
import Hero from './component/Hero/Hero';
import { Grid2 } from '@mui/material';

function App() {

  return (
    <>
      <MenuTop />
      <Hero />
      <Grid2 container spacing={1} justifyContent='center' textAlign='center'>
        <Grid2 size={{ xs: 11, md: 12 }}>
          <ListImage />
        </Grid2>
      </Grid2>
      <MenuBottom />
    </>
  )
}

export default App
