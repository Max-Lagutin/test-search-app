import React from 'react';
import {Home} from './containers/Home/Home'
import {Container} from '@mui/material';
import Typography from "@mui/material/Typography";

const APP_NAME = 'Ricky Morty App';

function App() {
  return (
      <Container maxWidth="xl">
          <Typography gutterBottom sx={{textAlign: "center", marginTop: '30px'}}  variant="h3" component="h1">
              {APP_NAME}
          </Typography>
      <Home />
    </Container>
  );
}

export default App;
