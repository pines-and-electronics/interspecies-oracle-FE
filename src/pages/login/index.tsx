import { Button, TextField, Typography } from '@material-ui/core'
import React, { ReactElement } from 'react'
import { useTextField } from '../../components'
import useStyles from './styles'
import { useNavigate } from '@reach/router'
export default function Login(): ReactElement {
  const classes = useStyles()
  const navigate = useNavigate()
  const [userId, userIDProps] = useTextField('text', 'UserID')
  const [password, passwordProps] = useTextField('password', 'Password')
  const onSubmit = () => {
    console.log(userId, password)
    navigate('/select-game')
  }
  return (
    <div className={classes.root}>
      <div className={classes.form}>
        <Typography variant="h1">
          Welcome <br /> back!
        </Typography>
        <br />
        <br />
        <br />
        <br />
        <TextField {...userIDProps} />
        <TextField {...passwordProps} />
        <Button fullWidth={true} onClick={onSubmit}>
          submit
        </Button>
      </div>
    </div>
  )
}
