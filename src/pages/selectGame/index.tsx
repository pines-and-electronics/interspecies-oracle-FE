import { Typography, Button, TextField } from '@material-ui/core'
import FormControl from '@material-ui/core/FormControl'
import InputLabel from '@material-ui/core/InputLabel'
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select'
import { useNavigate } from '@reach/router'
import React, { ReactElement } from 'react'
import { useTextField } from '../../components'
import useStyles from './styles'

import TribeLogo from './tribe.png'


export default function SelectGame(): ReactElement {
  const classes = useStyles()
  const navigate = useNavigate()

  const region = "Tierpark"
  const tribe = "NgenInfinity"
  const tribePopulation = 21
  const [game, setGame] = React.useState('')

  const handleChange = (event: any) => {
    setGame(event.target.value);
  }

  const onSubmit = () => {
    console.log(game)
    if (game === 'find-bug') navigate('/select-game-mode')
  }
  
  return (
    <div className={classes.root}>
      <Typography variant='h2' style={{color: 'green'}}> 
        Select Game 
      </Typography>
      <div className={classes.form}>
        <div className={classes.tribeInfo}>
          <div className={classes.tribeText}>
            <p className={classes.textDescription}>Your Tribe: <b>{ tribe }</b></p>
            <p className={classes.textDescription}>Tribe Population: <b>{ tribePopulation }</b></p>
            <p className={classes.textDescription}>Your Region: <b>{ region }</b></p>
          </div>
          <img className={classes.tribeLogo} src={TribeLogo} alt="logo" />
        </div>
        <FormControl variant="outlined">
          <InputLabel>Select Game</InputLabel>
          <Select value={game} onChange={handleChange} label="Select Game">
            <MenuItem value="find-bug">Find a Bug</MenuItem>
            <MenuItem value="find-mushroom">Find a Mushroom</MenuItem>
            <MenuItem value="cleanup">Cleanup the Park</MenuItem>
            <MenuItem value="discovery">Discovery</MenuItem>
          </Select>
        </FormControl>
      </div>
      <Button style={{ color: 'white', backgroundColor: 'green' }} onClick={onSubmit}>Let's Go</Button>
    </div>
  )
}
