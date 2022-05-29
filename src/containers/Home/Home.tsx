import React, {useEffect, useState} from 'react';
import {Box, Grid} from '@mui/material';
import {fetchCharacters} from '../../redux/characters/reducer'
import {useAppSelector, useAppDispatch} from '../../store/hooks';
import {MediaCard} from '../../components/Card/Card';
import {ICharacter, IInfo} from '../../models/character';
import SearchField from '../../components/SearchField/SearchField';
import {PaginationWrapper} from '../../components/Pagination/Pagination';
import {Filters} from '../Filters/Filters';

export const Home: React.FC = () => {
    const [pageNumber, setPageNumber] = useState(1);
    const [status, setStatus] = useState('');
    const [gender, setGender] = useState('');
    const [species, setSpecies] = useState('');
    const dispatch = useAppDispatch();
    const {characters, isLoading, error}  = useAppSelector((state) => state.characters);
    // @ts-ignore
    const charactersData:ICharacter[] = characters?.results
    // @ts-ignore
    const info:IInfo = characters?.info

    useEffect(() => {
        dispatch(fetchCharacters({pageNumber}))
    },[pageNumber])

    console.log('status', status);
    console.log('gender', gender);
    console.log('species', species);

    return (
        <Box sx={{ flexGrow: 1, marginBottom: '90px' }}>
            <SearchField />
            <Filters
                setPageNumber={setPageNumber}
                setStatus={setStatus}
                setSpecies={setSpecies}
                setGender={setGender}
            />
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                {charactersData && charactersData.map((character: ICharacter) => (
                    <Grid key={character.id} item xs={2} sm={4} md={3}>
                        <MediaCard {...character} />
                    </Grid>
                ))}
            </Grid>
            <PaginationWrapper
                info={info}
                pageNumber={pageNumber}
                setPageNumber={setPageNumber}
            />
        </Box>
    )
}
