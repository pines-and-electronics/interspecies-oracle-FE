import { Button, TextField, Typography} from '@material-ui/core'
import React, { ReactElement } from 'react'
import { useTextField } from '../../components'
import useStyles from './styles'
import { useNavigate } from '@reach/router'
export default function Login(): ReactElement {
  const classes = useStyles()
  const navigate = useNavigate()
  
  return (
    <div className={classes.root}>
      <Typography variant='h1' style={{color: 'yellow'}}> 
        Game Mode Selection 
      </Typography>
    </div>
  )
}
