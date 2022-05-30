import * as React from 'react';
import { Card, CardContent, Typography } from '@mui/material';
import { IEpisode } from '../../models/interfaces';
import { formatedDate } from '../../helpers/formatedDate';

export const EpisodeCard: React.FC<IEpisode> = props => {
    const { air_date, created, name, episode } = props
    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardContent>
                <Typography gutterBottom variant="h6" component="div">
                    {name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Air date: {air_date}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Episode: {episode}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Created: {formatedDate(created)}
                </Typography>
            </CardContent>
        </Card>
    )
}
