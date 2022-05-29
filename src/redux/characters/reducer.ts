import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { getCharacters } from '../../api/characters';
import {IParams} from "../../models/character";

export const fetchCharacters = createAsyncThunk(
    'characters/fetchCharacters',
    async (params: IParams, {rejectWithValue}) => {
        try {
            const response = await getCharacters(params)
            if(response.status !== 200) {
                throw new Error('Can\'t fetch characters. Server error.');
            }
            const data = response.data
            console.log('response', response);
            return data
        } catch(error)  {
            //TODO ERROR HANDLING
            // @ts-ignore
            return rejectWithValue(error.message);
        }
    }
)

const charactersSlice = createSlice({
    name: 'characters',
    initialState: {
        characters: [],
        isLoading: false,
        error: null
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchCharacters.pending, (state) => {
            state.isLoading = true;
        })
        builder
            .addCase(fetchCharacters.fulfilled, (state, action) => {
            state.isLoading = false;
            state.characters = action.payload;
        })
        // builder
        //     .addCase(fetchCharacters.rejected, (state, action) => {
        //     state.isLoading = false;
        //     state.error = action.payload;
        // })
    },
});

export default charactersSlice.reducer;
