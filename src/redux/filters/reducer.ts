import { createSlice } from '@reduxjs/toolkit'

const filtersSlice = createSlice({
    name: 'filters',
    initialState: {
        filters: {
            pageNumber: 1,
        },
    },
    reducers: {
        setFilters(state, action) {
            state.filters = { ...state.filters, ...action.payload }
        },
        clearFilters(state) {
            state.filters = { pageNumber: 1 }
        },
    },
})

export const { setFilters, clearFilters } = filtersSlice.actions
export default filtersSlice.reducer
