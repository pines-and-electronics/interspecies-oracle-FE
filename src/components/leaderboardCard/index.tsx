import { Card, CardContent, CardMedia, Container, Typography } from '@material-ui/core';
import React, { ReactElement } from 'react';
import useStyles from './styles';

type SubmisionCardProps = {
  image: string,
  name: string,
  type: string,
  weight: number,
  likes: number,
  rank: number
}

export default function LeaderboardCard({image, name, type, weight, likes, rank}:SubmisionCardProps): ReactElement {
  const classes = useStyles()

  return (
    <Card className={classes.card}>
      <Container style={{display: 'flex'}}>
        <CardMedia className={classes.media} image={image} title={name} />
      </Container>
      <Container className={classes.contentContainer}>
        <CardContent className={classes.cardContent}>
          <Typography variant="h4" color='textSecondary'>{name}</Typography>
          <Typography variant="body1" color='textSecondary'>{type}</Typography>
          <Typography variant="body1" color='textSecondary'>{weight} kg</Typography>
        </CardContent>
      </Container>
      <Container className={`${classes.poemContainer} ${classes.center}`}>
        <div>
          {"Roses are red\nViolets are blue\nI will drink your milkshake\nIf you let me through"}
        </div>
      </Container>
      <Container className={`${classes.rankContainer} ${classes.center}`}>
        <div className={`${classes.rankCircle} ${classes.center}`}>
          {rank}
        </div>
        <div className={classes.likes}>
          {likes} Likes
        </div>
      </Container>
    </Card>

  )
} 