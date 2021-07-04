import { useQuery } from '@apollo/client'
import { Button, Grid, Typography } from '@material-ui/core'
import { useNavigate } from '@reach/router'
import React, { ReactElement, useState } from 'react'
import LeaderboardCard from '../../../components/leaderboardCard'
import { QUERY_ALL_Submissions } from '../../../graphql/queries'
import { getAllSubmissions, getAllSubmissions_submissionMany } from '../../../graphql/types/getAllSubmissions'
import useStyles from './styles'

export default function CompetitionOverview(): ReactElement {
  const { data, loading } = useQuery<getAllSubmissions>(QUERY_ALL_Submissions, {
    onError: err => {
      console.log(err)
    },
    onCompleted: subData => {
      console.log(subData)

      subData && setSubmissions(subData.submissionMany)
    },
  })
  const navigate = useNavigate()

  const [submissions, setSubmissions] = useState<(getAllSubmissions_submissionMany | null)[] | null>([])
  const classes = useStyles()
  if (loading || !data || !submissions) return <div className="spin"></div>
  return (
    <div className={classes.root}>

      <p className={classes.textDescription}><span>There are </span> <span>{submissions.length}</span><span> entries in the competition </span></p>
      <div className={classes.center}>
        <Button onClick={() => navigate('/adjudication/enter-competition')} color="secondary" style={{width: '20em'}}>Enter the Contest</Button>
      </div>
      <div style={{borderBottom: '1px solid white', margin: '16px 0', padding: 8}} className={classes.center}>
        <Typography variant="h4">Leaderboard</Typography>
      </div>
      {/* <hr className={classes.hr} /> */}

      <Grid container className={classes.root} spacing={2}>
        {submissions.map((bug, i) => {
          return (
            <Grid item xs={12} style={{margin: "16px 0"}}>
              <LeaderboardCard image={bug?.pictureLink || ''} name={bug?.name || ''} description={bug?.description || ''} rank={i} likes={bug?.votes || 0} poem={bug?.poem || 'No poem written'}/>
            </Grid>
          )
        })}
      </Grid>
    </div>
  )
}
