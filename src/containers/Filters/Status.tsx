import React from 'react'
import { setFilters } from '../../redux/filters/reducer'
import {
    FormLabel,
    FormControl,
    RadioGroup,
    FormControlLabel,
    Radio,
} from '@mui/material'
import { useAppDispatch, useAppSelector } from '../../store/hooks'
import { STATUS } from './categories'

export const Status: React.FC = () => {
    const dispatch = useAppDispatch()
    const { filters }: any = useAppSelector(state => state.filters)

    const onChangeRadio = (e: {
        preventDefault: () => void
        target: { value: any }
    }) => {
        const { value } = e.target
        dispatch(
            setFilters({
                status: value,
                pageNumber: 1,
            })
        )
    }

    return (
        <FormControl>
            <FormLabel>Status</FormLabel>
            <RadioGroup
                onChange={onChangeRadio}
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue=""
                name="status"
            >
                {STATUS.map((item, index) => (
                    <FormControlLabel
                        key={index}
                        value={item}
                        label={item}
                        control={<Radio checked={filters.status === item} />}
                        name="status"
                    />
                ))}
            </RadioGroup>
        </FormControl>
    )
}
