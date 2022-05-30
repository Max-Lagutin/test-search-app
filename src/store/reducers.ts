import { combineReducers } from 'redux'
import charactersReducer from '../redux/characters/reducer'
import characterReducer from '../redux/character/reducer'
import filtersReducer from '../redux/filters/reducer'

export default combineReducers({
    character: characterReducer,
    characters: charactersReducer,
    filters: filtersReducer,
})
