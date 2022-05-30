import * as React from 'react'
import debounce from 'lodash.debounce'
import { Box, TextField } from '@mui/material'
import { useAppDispatch } from '../../store/hooks'
import { setFilters } from '../../redux/filters/reducer'

export const SearchField: React.FC = () => {
    const dispatch = useAppDispatch()

    const debouncedSearch = debounce((value: string) => {
        dispatch(setFilters({ search: value, pageNumber: 1 }))
    }, 800)

    const onChange = (e: {
        preventDefault: () => void
        target: { value: string }
    }) => {
        e.preventDefault()
        const { value } = e.target
        debouncedSearch(value)
    }

    return (
        <Box
            component="form"
            sx={{
                '& > :not(style)': { m: 1, width: '400px' },
                textAlign: 'center',
                margin: '60px 0',
            }}
            noValidate
            autoComplete="off"
        >
            <TextField
                label="Search your character"
                variant="outlined"
                onChange={onChange}
            />
        </Box>
    )
}
