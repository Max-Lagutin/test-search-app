import * as React from 'react';
import {Link, useLocation} from 'react-router-dom';
import {
    Card,
    CardActions,
    CardContent,
    CardMedia,
    Grid,
    Typography,
} from '@mui/material'
import {ICharacter} from '../../models/interfaces';
import {formatedDate} from '../../helpers/formatedDate';

export const CharacterCard: React.FC<ICharacter> = props => {

    const location = useLocation()
    const isMainPage = location.pathname === '/'
    const {id, created, gender, image, name, species, status} = props

    return (
        <Grid item xs={2} sm={4} md={3}>
            <Card sx={{maxWidth: 345}}>
                <CardMedia
                    component="img"
                    alt="green iguana"
                    height="240"
                    image={image}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Gender: {gender}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Species: {species}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Status: {status}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Created: {formatedDate(created)}
                    </Typography>
                </CardContent>
                {isMainPage && (
                    <CardActions>
                        <Link to={`${id}`}>SHOW EPISODES</Link>
                    </CardActions>
                )}
            </Card>
        </Grid>
    )
}
