import { Button, TextField } from '@material-ui/core'
import React, { ReactElement } from 'react'
import { useTextField } from '../../components'
import useStyles from './styles'
import { useNavigate } from '@reach/router'

//TODO: Temp!
import thisPicture from './mrsquishy.png'

export default function Login(): ReactElement {

  const classes = useStyles()
  const navigate = useNavigate()
  const [userId, userIDProps] = useTextField('text', 'UserID')
  const [password, passwordProps] = useTextField('password', 'Password')
  const onSubmit = () => {
    console.log(userId, password)
    navigate('/capture')
  }
  return (
    <div className={classes.root}>
      <img src={thisPicture} alt="logo" />
      <div>
        <div className={classes.form}>
          <TextField {...userIDProps} />
          <TextField {...passwordProps} />
          <Button onClick={onSubmit}>submit</Button>
        </div>
      </div>
    </div>
  )
}
