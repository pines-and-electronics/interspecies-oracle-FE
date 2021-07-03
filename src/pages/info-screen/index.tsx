import { Button } from '@material-ui/core'
import React, { ReactElement } from 'react'
// import { useTextField } from '../../components'
import useStyles from './styles'
// import { useNavigate } from '@reach/router'

//TODO: Temp!
import Photo from './mrsquishy.png'
import TribeLogo from './tribe.png'

export default function Login(): ReactElement {

  const classes = useStyles()
  const onNewPicture = () => {
    // navigate('/capture')
  }
  const onNextGame = () => {
    // navigate('/capture')
  }
  return (
    <div className={classes.root}>
      <div className={classes.vertical}>

        {/* Header */}
        <div className={classes.horizontal} >
          <div className={classes.vertical} style={{ paddingRight: 25 }}>
            <p style={{ paddingBottom: 10 }}><b><span>Mr. Squishy</span></b> is ready for Certification!</p>
            <img className={classes.tribeLogo} src={TribeLogo} alt="logo" />
          </div>

          <img className={classes.photo} src={Photo} alt="logo" />
        </div>
        <br/>
        {/* Load poem */}
        <q className={classes.textPoem}>Oh, bug on a leaf, thine legs are so fuzzy. As the celestial spheres align, I crave your sweet embrace.</q>

        {/* Help text */}
        <p className={classes.textDescription}>Log into the desktop application with your Blockchain ID.</p>
        <p className={classes.textDescription}>All of your submitted insects are waiting for certification and entry into the game.</p>

        {/* Navigation */}
        <div className={classes.form}>
          <Button style={{ justifyContent: 'center' }} onClick={onNewPicture} >I found another bug!</Button>
          <br />
          <Button style={{ justifyContent: 'center' }} onClick={onNextGame} >Let's play a different game!</Button>
        </div>
      </div >
    </div >
  )
}
