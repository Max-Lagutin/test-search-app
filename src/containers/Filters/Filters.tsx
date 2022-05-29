import {useState} from 'react';
import Box from '@mui/material/Box';
import {Status} from './Status';
import {Gender} from './Gender';
import {Species} from './Species';

export const Filters = ({ setPageNumber, setGender, setStatus, setSpecies }: any) => {

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
            <Status
                setPageNumber={setPageNumber}
                setStatus={setStatus}
            />
            <Gender
                setPageNumber={setPageNumber}
                setGender={setGender}
            />
            <Species    setPageNumber={setPageNumber}  setSpecies={setSpecies} />

        </Box>
    );
}