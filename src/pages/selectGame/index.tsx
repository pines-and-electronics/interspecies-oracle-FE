import { Button, Typography } from '@material-ui/core'
import FormControl from '@material-ui/core/FormControl'
import InputLabel from '@material-ui/core/InputLabel'
import MenuItem from '@material-ui/core/MenuItem'
import Select from '@material-ui/core/Select'
import { useNavigate } from '@reach/router'
import React, { ReactElement } from 'react'
import useStyles from './styles'
import { ReactComponent as BugIcon } from './find_bug.svg'
import { ReactComponent as MushroomIcon } from './find_mushroom.svg'
import { ReactComponent as CleanupIcon } from './cleanup.svg'

export default function SelectGame(): ReactElement {
  const classes = useStyles()
  const navigate = useNavigate()

  const region = "Tiergarten"
  const tribe = "NgenInfinity"
  const tribePopulation = 21

  const handleChange = (game: string) => {
    console.log(game)
    if (game === 'find-bug') navigate('/select-game-mode')
  }

  return (
    <div className={classes.root}>
      <div className={classes.form}>
        <div className={classes.tribeInfo}>
            <p className={classes.textDescription}>Enjoy <b>{ region }</b>!</p>
            <p className={classes.textDescription}>Your Tribe: <b>{ tribe }</b></p>
            <p className={classes.textDescription}>Tribe Population: <b>{ tribePopulation }</b></p>
        </div>
        <div className={classes.emptyHolder}>

        </div>
        <Typography variant='h5' style={{ marginBottom: 30, color: 'white' }}><b>Select a Game</b></Typography>
        <div className={classes.gamesHolder}>
          <div className={classes.buttonHolder}>
            <Button variant="contained" className={classes.button} onClick={() => handleChange('find-bug')}>
              <BugIcon className={classes.buttonIcon}/>
            </Button>
            <p style={{color: 'white', fontSize: '120%'}}>Find a Bug</p>
          </div>
          <div className={classes.buttonHolder}>
            <Button variant="contained" className={classes.button} onClick={() => handleChange("find-mushroom")}>
              <MushroomIcon className={classes.buttonIcon}/>
            </Button>
            <p style={{color: 'white', fontSize: '120%'}}>Find a Mushroom</p>
          </div>
          <div className={classes.buttonHolder}>
            <Button variant="contained" className={classes.button} onClick={() => handleChange("cleanup")}>
              <CleanupIcon className={classes.buttonIcon}/>
            </Button>
            <p style={{color: 'white', fontSize: '120%'}}>Cleanup the Park</p>
          </div>
        </div>
      </div>
    </div>
  )
}
