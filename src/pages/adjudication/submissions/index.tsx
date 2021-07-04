import { useQuery } from '@apollo/client'
import { Button, Grid, Typography } from '@material-ui/core'
import React, { ReactElement, useState } from 'react'
import { useSetSnackbar } from '../../../appContext'
import SubmissionCard from '../../../components/submissionCard'
import { QUERY_ALL_Submissions } from '../../../graphql/queries'
import { getAllSubmissions, getAllSubmissions_submissionMany } from '../../../graphql/types/getAllSubmissions'
import useStyles from './styles'

export default function Submissions(): ReactElement {

  const { data, loading } = useQuery<getAllSubmissions>(QUERY_ALL_Submissions, {
    onError: err => {
      console.log(err)
    },
    onCompleted: subData => {
      console.log(subData)

      subData && setSubmissions(subData.submissionMany)
      // Filter certified
      // subData && setSubmissions(subData.submissionMany.filter(submission => !submission.flagCertified))
    },
  })
  const [submissions, setSubmissions] = useState<(getAllSubmissions_submissionMany | null)[] | null>([])

  const { handleSnackbarSet } = useSetSnackbar()
  const classes = useStyles()
  if (loading || !data || !submissions) return <div className="spin"></div>
  return (
    <div className={classes.root}>
      <Typography variant="h2" align="center">
        Certify and submit bugs
      </Typography>
      <Typography variant="subtitle1" align="center">
        Click Certify to authenticate your submissions and enter the competition!
      </Typography>
      <Grid container className={classes.gridContainer} spacing={2}>
      {submissions.map(bug => {
        console.log(bug?.name)
        return (
          <Grid item xs={12} md={6}>
            <SubmissionCard image={bug?.pictureLink || ''} name={bug?.name || ''} description={bug?.description || ''}>
              <Button variant="outlined" color="primary">Certify</Button>
            </SubmissionCard>
          </Grid>
        )
      })}
      </Grid>
    </div>
  )
}
