import { Button, Card, CardContent, CardMedia, Container, Typography } from '@material-ui/core';
import React, { ReactElement } from 'react';
import useStyles from './styles';

type SubmisionCardProps = {
  image: string,
  name: string,
  type: string,
  weight: number
}

export default function SubmissionCard({image, name, type, weight}:SubmisionCardProps): ReactElement {
  const classes = useStyles()

  return (
    <Card className={classes.card}>
      <Container style={{display: 'flex'}}>
        <CardMedia className={classes.media} image={image} title={name} />
      </Container>
      <Container className={classes.contentContainer}>
        <CardContent className={classes.cardContent}>
          <Typography variant="h4">{name}</Typography>
          <Typography variant="body1">{type}</Typography>
          <Typography variant="body1">{weight} kg</Typography>
        </CardContent>
        <Container className={classes.buttonContainer}>
          <Button variant="outlined" color="primary">Certify</Button>
        </Container>
      </Container>
    </Card>

  )
} 