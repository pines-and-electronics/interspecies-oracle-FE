import { Card, CardContent, CardMedia, Container, Typography } from '@material-ui/core';
import React, { ReactElement } from 'react';
import useStyles from './styles';

type SubmisionCardProps = {
  image: string,
  name: string,
  description: string,
  // weight: number,
  children: ReactElement
}

export default function SubmissionCard({image, name, description, children}:SubmisionCardProps): ReactElement {
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
        <Container className={classes.childContainer}>
          {children}
        </Container>
      </Container>
    </Card>

  )
} 