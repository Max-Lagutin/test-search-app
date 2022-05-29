import React from 'react';
import {FormLabel, FormControl, RadioGroup, FormControlLabel, Radio} from "@mui/material";
import {SPECIES} from './category';

export const Species = ({ setSpecies, setPageNumber }: any) => {
    const onChangeRadio = (e: { target: { value: string }; }) => {
        const {value} = e.target;
        setPageNumber(1)
        setSpecies(value)
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
                {SPECIES.map((item, index) => (
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
