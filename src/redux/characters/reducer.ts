import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getCharacters } from '../../api/characters';
import { ICharacter, IInfo, IParams } from '../../models/interfaces';

export const fetchCharacters = createAsyncThunk(
    'characters/fetchCharacters',
    async (params: IParams, { rejectWithValue }) => {
        try {
            const response = await getCharacters(params)
            if (response.status !== 200) {
                throw new Error("Can't fetch characters. Server error.")
            }

            return response.data
        } catch (error: any) {
            if (error.response.status === 404) {
                return {}
            }
            console.log('error', error)
            return rejectWithValue(error)
        }
    }
)

interface ICharacterState {
    characters?: {
        results: ICharacter[]
        info: IInfo
    }
    isLoading: boolean
    error?: { message: string }
}

const initialState: ICharacterState = {
    characters: {
        results: [],
        info: {},
    },
    isLoading: false,
    error: null,
}
const charactersSlice = createSlice({
    name: 'characters',
    initialState: initialState,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(fetchCharacters.pending, state => {
            state.isLoading = true
        })
        builder.addCase(fetchCharacters.fulfilled, (state, action) => {
            state.isLoading = false
            state.characters = action.payload
        })
        builder.addCase(fetchCharacters.rejected, (state, action) => {
            state.isLoading = false
            // @ts-ignore
            state.error = action.payload
        })
    },
})

export default charactersSlice.reducer
