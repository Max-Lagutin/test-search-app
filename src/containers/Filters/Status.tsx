import React from 'react';
import {FormLabel, FormControl, RadioGroup, FormControlLabel, Radio} from "@mui/material";
import {STATUS} from './category';

export const Status = ({ setStatus, setPageNumber }: any) => {
    const onChangeRadio = (e: { target: { value: string }; }) => {
        const {value} = e.target;
        setPageNumber(1)
        setStatus(value)
    }
    return (
        <FormControl>
            <FormLabel>Status</FormLabel>
            <RadioGroup
                onChange={onChangeRadio}
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue="female"
                name="status"
            >
                    {STATUS.map((item, index) => (
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
