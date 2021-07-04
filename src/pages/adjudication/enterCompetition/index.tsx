import { useQuery } from '@apollo/client'
import { Button, Grid, Typography } from '@material-ui/core'
import React, { ReactElement, useState } from 'react'
import { useSetSnackbar } from '../../../appContext'
import SubmissionCard from '../../../components/submissionCard'
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

  const notEnteredBugs = ships.slice(0,6);
  const enteredBugs = ships.slice(7);

  return (
    <div className={classes.root}>
      <Grid container spacing={4}>
        <Grid xs={12} md={6} spacing={4}>
          <div className={`${classes.title} ${classes.center}`}>{notEnteredBugs.length} submissions waiting for entry</div>
          {notEnteredBugs.map((ship, i) => {
            return (
              <Grid item xs={12} style={{margin: "16px 16px"}}>
                <SubmissionCard image={ship?.image || ''} name={ship?.name || ''} type={ship?.type || ''} weight={ship?.weight_kg || 0}>
                  <Button variant="outlined" color="primary">Stake and Enter!</Button>
                </SubmissionCard>
              </Grid>
            )
          })}
          </Grid>
        <Grid xs={12} md={6} spacing={4}>
          <div className={`${classes.title} ${classes.center}`}>{enteredBugs.length} submissions entered</div>
          {enteredBugs.map((ship, i) => {
            return (
              <Grid item xs={12} style={{margin: "16px 16px"}}>
                <SubmissionCard image={ship?.image || ''} name={ship?.name || ''} type={ship?.type || ''} weight={ship?.weight_kg || 0}>
                  <Typography variant="body1" color='textSecondary'>Entered competition</Typography>
                </SubmissionCard>
              </Grid>
            )
          })}
        </Grid>
      </Grid>
    </div>
  )
}
