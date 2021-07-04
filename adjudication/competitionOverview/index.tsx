import { useQuery } from '@apollo/client'
import { Button, Grid, Typography } from '@material-ui/core'
import React, { ReactElement, useState } from 'react'
import { useSetSnackbar } from '../../../appContext'
import CompetitionCard from '../../../components/competitionCard'
import { QUERY_ALL_SHIPS } from '../../../graphql/queries'
import { Ships, Ships_ships } from '../../../graphql/types/Ships'
import useStyles from './styles'

export default function CompetitionOverview(): ReactElement {
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
      <div className={classes.center}>
        <Button variant="outlined" color="primary" style={{width: '20em'}}>Enter the Contest</Button>
      </div>
      <div style={{borderBottom: '1px solid black', margin: '16px 0', padding: 8}} className={classes.center}>
        <Typography variant="h4">Leaderboard</Typography>
      </div>
      {/* <hr className={classes.hr} /> */}

      {console.log(ships.length)}
      <Grid container className={classes.root} spacing={2}>
        {ships.map((ship, i) => {
          return (
            <Grid item xs={12} style={{margin: "16px 0"}}>
              <CompetitionCard image={ship?.image || ''} name={ship?.name || ''} type={ship?.type || ''} weight={ship?.weight_kg || 0} rank={i} likes={Math.floor(Math.random()*200)} />
            </Grid>
          )
        })}
      </Grid>
    </div>
  )
}
