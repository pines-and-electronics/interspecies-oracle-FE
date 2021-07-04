import { Button, TextField, Typography } from '@material-ui/core'
import React, { ReactElement } from 'react'
import { useTextField } from '../../components'
import useStyles from './styles'
import { useNavigate } from '@reach/router'
import LandingImage from './landing.png'
export default function Login(): ReactElement {
  const classes = useStyles()
  const navigate = useNavigate()
  const [userId, userIDProps] = useTextField('text', 'UserID')
  const [password, passwordProps] = useTextField('password', 'Password')
  const onSubmit = () => {
    console.log(userId, password)
    navigate('/login')
  }
  return (
    <div className={classes.root}>
      <img className={classes.landingImage} src={LandingImage} alt="logo" />
      <Typography variant="h1"> Hello!</Typography>
      <Typography variant="body1">
        Welcome to Game Of Oracles! Learn <br /> about your environment through <br /> collaboration
      </Typography>
      <div className={classes.actionArea}>
        <Button onClick={onSubmit}>Log In</Button>
        <Button onClick={onSubmit}>Sign Up</Button>
      </div>
    </div>
  )
}
