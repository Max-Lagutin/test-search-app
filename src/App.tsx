import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Container, Typography } from '@mui/material'
import { Home } from './containers/Home/Home'
import { CharacterDetails } from './containers/CharacterDetails/CharacterDetails'

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
                <Route path=":id" element={<CharacterDetails />} />
            </Routes>
        </Container>
    )
}

export default App
