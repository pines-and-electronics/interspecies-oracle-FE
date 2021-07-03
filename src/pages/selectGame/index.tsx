import { Typography } from '@material-ui/core'
import { useNavigate } from '@reach/router'
import React, { ReactElement } from 'react'
import { useTextField } from '../../components'
import useStyles from './styles'
export default function SelectGame(): ReactElement {
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
      <div className={classes.form}>
        <Typography variant="h1"> KUBA</Typography>
      </div>
    </div>
  )
}
