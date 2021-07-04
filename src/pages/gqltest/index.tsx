import { useQuery } from '@apollo/client'
import { Card, CardActionArea, CardContent, CardMedia, Typography } from '@material-ui/core'
import React, { ReactElement, useState } from 'react'

import { getAllSubmissions_submissionMany, getAllSubmissions } from '../../graphql/types/getAllSubmissions'
import { QUERY_ALL_Submissions } from '../../graphql/queries'
import useStyles from './styles'

export default function NotFound(): ReactElement {
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
  return (
    <div className={classes.root}>
      <Typography variant="h1" align="center">
        SpaceX
      </Typography>
      {console.log(submissions.length)}
      {submissions.map(submission => {
        console.log(submission?.name)

        return (
          <Card className={classes.card}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image={submission?.pictureLink || ''}
                title={submission?.name || ''}
              />
              <CardContent>
                <Typography variant="h4">{submission?.name}</Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        )
      })}
    </div>
  )
}
