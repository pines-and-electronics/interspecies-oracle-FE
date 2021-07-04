import { Card, CardContent, CardMedia, Container, Typography } from '@material-ui/core';
import React, { ReactElement } from 'react';
import useStyles from './styles';

type SubmisionCardProps = {
  image: string,
  name: string,
  description: string,
  likes: number,
  rank: number,
  poem: string
}

export default function LeaderboardCard({image, name, description, likes, rank, poem}:SubmisionCardProps): ReactElement {
  const classes = useStyles()

  return (
    <Card className={classes.card}>
      <Container style={{display: 'flex'}}>
        <CardMedia className={classes.media} image={image} title={name} />
      </Container>
      <Container className={classes.contentContainer}>
        <CardContent className={classes.cardContent}>
          <Typography variant="h4" color='textSecondary'>{name}</Typography>
          <Typography variant="body1" color='textSecondary'>{description}</Typography>
        </CardContent>
      </Container>
      <Container className={`${classes.poemContainer} ${classes.center}`}>
        <div>
          {poem}
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