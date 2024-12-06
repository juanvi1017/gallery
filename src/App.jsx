import ListImage from './component/ListImage';
import MenuBottom from './component/MenuBottom/MenuBottom';
import MenuTop from './component/MenuTop/MenuTop';
import { Grid2 } from '@mui/material';

function App() {

  return (
    <>
      <MenuTop />
      <Grid2 container spacing={2} justifyContent='center' textAlign='center'>
        <Grid2 size={{ xs: 11, md: 8 }} >
          <ListImage />
        </Grid2>
      </Grid2>
      <MenuBottom />
    </>
  )
}

export default App
