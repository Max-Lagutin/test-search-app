import React, { useEffect } from 'react'
import { Box, Grid } from '@mui/material'
import { fetchCharacters } from '../../redux/characters/reducer'
import { useAppSelector, useAppDispatch } from '../../store/hooks'
import { CharacterCard } from '../../components/Cards/CharacterCard'
import { ICharacter } from '../../models/interfaces'
import { SearchField } from '../../components/SearchField/SearchField'
import { PaginationWrapper } from '../../components/Pagination/Pagination'
import { Filters } from '../Filters/Filters'

type characterType = ICharacter | undefined

export const Home: React.FC = () => {
    const dispatch = useAppDispatch()
    const { characters, error } = useAppSelector(state => state.characters)
    const { filters } = useAppSelector(state => state.filters)

    const charactersData = characters.results
    const info = characters.info

    useEffect(() => {
        dispatch(fetchCharacters({ ...filters }))
    }, [dispatch, filters])

    if (error) return <div>{`Error: ${error.message}`}</div>

    return (
        <Box>
            <SearchField />
            <Box
                sx={{
                    flexGrow: 1,
                    marginBottom: '90px',
                    position: 'relative',
                    paddingLeft: '200px',
                }}
            >
                <Filters />
                <Grid
                    container
                    spacing={{ xs: 2, md: 3 }}
                    columns={{ xs: 4, sm: 8, md: 12 }}
                >
                    {charactersData ? (
                        charactersData.map((character: characterType) => (
                            <CharacterCard key={character.id} {...character} />
                        ))
                    ) : (
                        <Box sx={{ textAlign: 'center', width: '100%' }}>
                            {'No characters found'}
                        </Box>
                    )}
                </Grid>
                {charactersData && (
                    <PaginationWrapper
                        info={info}
                        pageNumber={filters.pageNumber}
                    />
                )}
            </Box>
        </Box>
    )
}
