import React from 'react';
// import ReactPaginate from "react-paginate";
import { IInfo } from '../../models/character';
import {Box} from '@mui/material';
import Pagination from '@mui/material/Pagination';

export interface IPaginate {
    info: IInfo,
    pageNumber: number,
    setPageNumber: (number: number) => void;
}

const paginationStyles = {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '30px'
}

export const PaginationWrapper:React.FC<IPaginate> = ({ pageNumber, info, setPageNumber }) => {
    const handleChange = (e: React.ChangeEvent<unknown>, value: number) => {
        setPageNumber(value);
    };

    return (
        <Box sx={paginationStyles}>
            <Pagination count={info?.pages} page={pageNumber} onChange={handleChange} />
        </Box>
    )
};
