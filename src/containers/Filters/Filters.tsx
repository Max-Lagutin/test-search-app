import React from 'react'
import { Box, Button, Typography } from '@mui/material'
import { Status } from './Status'
import { Gender } from './Gender'
import { Species } from './Species'
import { useAppDispatch } from '../../store/hooks'
import { clearFilters } from '../../redux/filters/reducer'

const filtersStyles = {
    position: 'absolute',
    display: 'flex',
    flexDirection: 'column',
    top: 0,
    left: 0,
    margin: '0 0 60px 0',
    height: '100%',
}

export const Filters: React.FC = () => {
    const dispatch = useAppDispatch()

    const clearAllFilters = (e: { preventDefault: () => void }) => {
        e.preventDefault()
        dispatch(clearFilters())
    }

    return (
        <Box component="form" sx={filtersStyles} noValidate autoComplete="off">
            <Typography gutterBottom variant="h6" component="div">
                {'Filters'}
            </Typography>
            <Button variant="text" onClick={clearAllFilters}>
                Clear filters
            </Button>
            <Status />
            <Gender />
            <Species />
        </Box>
    )
}
