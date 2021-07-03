import { useQuery } from '@apollo/client'
import { Card, CardActionArea, CardContent, CardMedia, Grid, Typography } from '@material-ui/core'
import React, { ReactElement, useState } from 'react'
import { useSetSnackbar } from '../../../appContext'
import { QUERY_ALL_SHIPS } from '../../../graphql/queries'
import { Ships, Ships_ships } from '../../../graphql/types/Ships'
import useStyles from './styles'

export default function Adjudication(): ReactElement {

  const { data, loading } = useQuery<Ships>(QUERY_ALL_SHIPS, {
    onError: () => {
      handleSnackbarSet('Something went wrong', 'error')
    },
    onCompleted: shipsData => shipsData && setShips(shipsData.ships),
  })

  const { handleSnackbarSet } = useSetSnackbar()
  const [ships, setShips] = useState<(Ships_ships | null)[] | null>([])
  const classes = useStyles()
  if (loading || !data || !ships) return <div className="spin"></div>
  return (
    <div className={classes.root}>

      <p className={classes.textDescription}><span>There are </span> <span>10</span><span> entries in the competition </span></p>

      {/* <hr className={classes.hr} /> */}

      {console.log(ships.length)}
      <Grid container className={classes.root} spacing={2}>
        {ships.map(ship => {
          console.log(ship?.name)

          return (
            <Grid item xs={12}>
              <Card className={classes.card}>
                <CardActionArea>
                  {/* <CardMedia className={classes.media} image={ship?.image || ''} title={ship?.name || ''} /> */}
                  <CardContent>
                    <div style={{ display: 'flex', flexDirection: 'row', flexFlow: 'row wrap' }}>
                      <div>1</div>
                      <div>asdf</div>
                      <div>asdf</div>
                    </div>
                    {/* <Typography variant="h4">{ship?.name}</Typography>
                    <Typography variant="body1">{ship?.type}</Typography>
                    <Typography variant="body1">{ship?.weight_kg} kg</Typography> */}
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          )
        })}
      </Grid>
    </div>
  )
}
