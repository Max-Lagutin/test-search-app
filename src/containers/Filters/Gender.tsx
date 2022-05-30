import React from 'react'
import {
    FormLabel,
    FormControl,
    RadioGroup,
    FormControlLabel,
    Radio,
} from '@mui/material'
import { GENDER } from './categories'
import { useAppDispatch, useAppSelector } from '../../store/hooks'
import { setFilters } from '../../redux/filters/reducer'

export const Gender: React.FC = () => {
    const dispatch = useAppDispatch()
    const { filters }: any = useAppSelector(state => state.filters)

    const onChangeRadio = (e: { target: { value: string } }) => {
        const { value } = e.target

        dispatch(
            setFilters({
                gender: value,
                pageNumber: 1,
            })
        )
    }

    return (
        <FormControl>
            <FormLabel>Gender</FormLabel>
            <RadioGroup
                onChange={onChangeRadio}
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue=""
                name="gender"
            >
                {GENDER.map((item, index) => (
                    <FormControlLabel
                        key={index}
                        value={item}
                        label={item}
                        control={<Radio checked={filters.gender === item} />}
                    />
                ))}
            </RadioGroup>
        </FormControl>
    )
}
