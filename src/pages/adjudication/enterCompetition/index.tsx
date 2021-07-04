import { useQuery } from '@apollo/client'
import { Button, Grid } from '@material-ui/core'
import React, { ReactElement, useState } from 'react'
import SubmissionCard from '../../../components/submissionCard'
import { getAllSubmissions, getAllSubmissions_submissionMany } from '../../../graphql/types/getAllSubmissions'
import { QUERY_ALL_Submissions } from '../../../graphql/queries'
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

  const [submissions, setSubmissions] = useState<(getAllSubmissions_submissionMany | null)[] | null>([])
  const classes = useStyles()

  if (loading || !data || !submissions) return <div className="spin"></div>

  const notEnteredBugs = submissions.filter(bug => !bug?.flagEntered)
  const enteredBugs = submissions.filter(bug => bug?.flagEntered)

  console.log(submissions)
  return (
    // <div>{JSON.stringify(submissions, null, 4)}</div>
    <div className={classes.root}>
      <Grid container spacing={4}>
        <Grid xs={12} md={6} spacing={4}>
          <div className={`${classes.title} ${classes.center}`}>
            {notEnteredBugs.length} submissions waiting for entry
          </div>
          {notEnteredBugs.map((bug, i) => {
            return (
              <Grid item xs={12} style={{ margin: '16px 16px' }}>
                <SubmissionCard
                  image={bug?.pictureLink || ''}
                  name={bug?.name || ''}
                  description={bug?.description || ''}
                >
                  <Button variant="outlined" color="primary">
                    Stake and Enter!
                  </Button>
                </SubmissionCard>
              </Grid>
            )
          })}
        </Grid>
        <Grid xs={12} md={6} spacing={4}>
          <div className={`${classes.title} ${classes.center}`}>{enteredBugs.length} submissions entered</div>
          {enteredBugs.map((bug, i) => {
            return (
              <Grid item xs={12} style={{ margin: '16px 16px' }}>
                <SubmissionCard
                  image={bug?.pictureLink || ''}
                  name={bug?.name || ''}
                  description={bug?.description || ''}
                >
                  <Button variant="outlined" color="primary">
                    Stake and Enter!
                  </Button>
                </SubmissionCard>
              </Grid>
            )
          })}
        </Grid>
      </Grid>
    </div>
  )
}
