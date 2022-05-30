import React from 'react';
import { Box, Pagination } from '@mui/material';
import { setFilters } from '../../redux/filters/reducer';
import { useAppDispatch } from '../../store/hooks';
import { IInfo } from '../../models/interfaces';

export interface IPaginate {
    info: IInfo
    pageNumber: number
}

const paginationStyles = {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '30px',
}

export const PaginationWrapper: React.FC<IPaginate> = ({
    pageNumber,
    info,
}) => {
    const dispatch = useAppDispatch()
    const handleChange = (e: React.ChangeEvent<unknown>, value: number) => {
        dispatch(setFilters({ pageNumber: value }))
    }

    return (
        <Box sx={paginationStyles}>
            <Pagination
                count={info?.pages}
                page={pageNumber}
                onChange={handleChange}
            />
        </Box>
    )
}
