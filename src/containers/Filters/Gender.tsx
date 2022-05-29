import React from 'react';
import {FormLabel, FormControl, RadioGroup, FormControlLabel, Radio} from "@mui/material";
import {GENDER} from './category';

export const Gender = ({ setGender, setPageNumber }: any) => {
    const onChangeRadio = (e: { target: { value: string }; }) => {
        const {value} = e.target;
        setPageNumber(1)
        setGender(value)
    }
    return (
        <FormControl>
            <FormLabel>Gender</FormLabel>
            <RadioGroup
                onChange={onChangeRadio}
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue="female"
                name="status"
            >
                {GENDER.map((item, index) => (
                    <FormControlLabel
                        key={index}
                        value={item}
                        label={item}
                        control={<Radio />}
                        name="status"
                    />
                ))}
            </RadioGroup>
        </FormControl>
    );
};
