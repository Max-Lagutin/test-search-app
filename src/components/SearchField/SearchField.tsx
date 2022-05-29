import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import {useState} from "react";

export default function BasicTextFields() {
    const [query, setQuery] = useState('')
    const onChange = (e: { target: { value: string; }; }) => {
        const {value} = e.target;
        setQuery(value)
    }

    return (
        <Box
            component="form"
            sx={{
                '& > :not(style)': { m: 1, width: '400px' },
                textAlign: 'center',
                margin: '60px 0'
            }}
            noValidate
            autoComplete="off"
        >
            <TextField
                label="Search your character"
                variant="outlined"
                onChange={onChange}
                value={query}
            />
        </Box>
    );
}