import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Container, Typography } from '@mui/material';
import { Home } from './containers/Home/Home';
import { CharacterEpisodes } from './containers/CharacterEpisodes/CharacterEpisodes';

const APP_NAME = 'Ricky Morty App'

function App() {
    return (
        <Container maxWidth="xl">
            <Typography
                gutterBottom
                sx={{ textAlign: 'center', marginTop: '30px' }}
                variant="h3"
                component="h1"
            >
                {APP_NAME}
            </Typography>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path=":id" element={<CharacterEpisodes />} />
            </Routes>
        </Container>
    )
}

export default App
