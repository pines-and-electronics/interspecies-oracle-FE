import { Button } from '@material-ui/core'
import { useNavigate } from '@reach/router'
import React, { ReactElement } from 'react'
import useStyles from './styles'


export default function ChooseGame(): ReactElement {
  const classes = useStyles()
  const navigate = useNavigate()

  return (
    <div className={classes.root}>
      <div className={classes.form}>
        <Button onClick={() => navigate('/adjucation/submissions')}>View & Certify your submissions</Button>
        <Button>Enter the contest</Button>
      </div>
    </div>
  )
}
