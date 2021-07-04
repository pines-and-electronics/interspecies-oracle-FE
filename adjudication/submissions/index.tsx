import { useQuery } from '@apollo/client'
import { Button, Grid, Typography } from '@material-ui/core'
import React, { ReactElement, useState } from 'react'
import { useSetSnackbar } from '../../../appContext'
import SubmissionCard from '../../../components/submissionCard'
import { QUERY_ALL_SHIPS } from '../../../graphql/queries'
import { Ships, Ships_ships } from '../../../graphql/types/Ships'
import useStyles from './styles'

export default function Submissions(): ReactElement {

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
      <Typography variant="h2" align="center">
        Certify and submit bugs
      </Typography>
      {console.log(ships.length)}
      <Typography variant="subtitle1" align="center">
        Click Certify to authenticate your submissions and enter the competition!
      </Typography>
      <Grid container className={classes.gridContainer} spacing={2}>
      {ships.map(ship => {
        console.log(ship?.name)
        return (
          <Grid item xs={12} md={6}>
            <SubmissionCard image={ship?.image || ''} name={ship?.name || ''} type={ship?.type || ''} weight={ship?.weight_kg || 0}>
              <Button variant="outlined" color="primary">Certify</Button>
            </SubmissionCard>
          </Grid>
        )
      })}
      </Grid>
    </div>
  )
}
