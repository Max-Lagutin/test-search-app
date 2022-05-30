import React, { useEffect } from 'react'
import { Box, Button, Grid, Typography } from '@mui/material'
import { useParams, useNavigate } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../store/hooks'
import {
    fetchCharacter,
    fetchCharacterEpisodes,
} from '../../redux/character/reducer'
import { EpisodeCard } from '../../components/Cards/EpisodeCard'
import { CharacterCard } from '../../components/Cards/CharacterCard'
import { IEpisode } from '../../models/interfaces'

const styles = {
    position: 'fixed',
    display: 'flex',
    flexDirection: 'column',
    left: '24px',
    top: '120px',
    marginTop: '24px',
    height: '100%',
}

const characterDetailsStyles = {
    flexGrow: 1,
    margin: '60px 0',
    position: 'relative',
    paddingLeft: '280px',
}

const buttonStyles = {
    marginBottom: '16px',
}

interface IEpisodeCard {
    data: IEpisode
}

export const CharacterEpisodes: React.FC = () => {
    const dispatch = useAppDispatch()
    const navigate = useNavigate()
    const { character, episode, error } = useAppSelector(
        state => state.character
    )
    const { id } = useParams()

    useEffect(() => {
        dispatch(fetchCharacter(id))
    }, [dispatch, id])

    const episodeUrls: any = character.episode

    useEffect(() => {
        dispatch(fetchCharacterEpisodes(episodeUrls))
    }, [dispatch, character])

    if (error) return <div>{`Error: ${error.message}`}</div>

    const onClick = (e: { preventDefault: () => void }) => {
        e.preventDefault()
        navigate('/', { replace: true })
    }

    return (
        <Box
            component="form"
            sx={characterDetailsStyles}
            noValidate
            autoComplete="off"
        >
            <Box sx={styles}>
                <Button sx={buttonStyles} variant="text" onClick={onClick}>
                    Back to characters
                </Button>
                <CharacterCard {...character} />
            </Box>
            <Typography
                textAlign="center"
                gutterBottom
                variant="h4"
                component="div"
            >
                Episodes
            </Typography>
            <Grid container spacing={3}>
                {episode &&
                    episode.map((episodeItem: IEpisodeCard) => (
                        <EpisodeCard
                            key={episodeItem.data.id}
                            {...episodeItem.data}
                        />
                    ))}
            </Grid>
        </Box>
    )
}
