import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getCharacter, getCharacterEpisodes } from '../../api/characters';
import { ICharacter } from '../../models/interfaces';

export const fetchCharacter = createAsyncThunk(
    'character/fetchCharacter',
    async (id: string, { rejectWithValue }) => {
        try {
            const response = await getCharacter(id)
            if (response.status !== 200) {
                throw new Error("Can't fetch character. Server error.")
            }

            return response.data
        } catch (error) {
            console.log('error', error)
            return rejectWithValue(error)
        }
    }
)

export const fetchCharacterEpisodes = createAsyncThunk(
    'character/fetchEpisodes',
    async (episode: [], { rejectWithValue }) => {
        try {
            const data: any = await getCharacterEpisodes(episode)

            return data
        } catch (error) {
            console.log('error', error)
            return rejectWithValue(error)
        }
    }
)

interface ICharacterState {
    character: ICharacter
    episode: []
    isLoading: boolean
    error?: { message: string }
}

const initialState: ICharacterState = {
    character: {},
    episode: [],
    isLoading: false,
    error: null,
}

const characterSlice = createSlice({
    name: 'character',
    initialState: initialState,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(fetchCharacter.pending, state => {
            state.isLoading = true
        })
        builder.addCase(fetchCharacter.fulfilled, (state, action) => {
            state.isLoading = false
            state.character = action.payload
        })
        builder.addCase(fetchCharacter.rejected, (state, action) => {
            state.isLoading = false
            // @ts-ignore
            state.error = action.payload
        })
        builder.addCase(fetchCharacterEpisodes.pending, state => {
            state.isLoading = true
        })
        builder.addCase(fetchCharacterEpisodes.fulfilled, (state, action) => {
            state.isLoading = false
            state.episode = action.payload
        })
        builder.addCase(fetchCharacterEpisodes.rejected, (state, action) => {
            state.isLoading = false
            // @ts-ignore
            state.error = action.payload
        })
    },
})

export default characterSlice.reducer
