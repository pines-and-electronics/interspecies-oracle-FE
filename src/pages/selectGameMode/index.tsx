import { Button } from '@material-ui/core'
import React, { ReactElement } from 'react'
import useStyles from './styles'
import { useNavigate } from '@reach/router'
import PhotoCameraOutlinedIcon from '@material-ui/icons/PhotoCameraOutlined'
import AssessmentOutlinedIcon from '@material-ui/icons/AssessmentOutlined'

export default function SelectGameMode(): ReactElement {
  const classes = useStyles()
  const navigate = useNavigate()

  const contest = 'King of the Bugs'
  const rewards = ['Personal and tribal accolades', '3 TOL tokens', 'A unique NFT']

  const listRewards = rewards.map(reward => <li className={classes.rewardList}>{reward}</li>)

  const onSubmit = () => {
    console.log('Submit a Bug')
    navigate('/capture')
  }

  const onLeaderboard = () => {
    console.log('Go to Leaderboard')
    navigate('/adjudication/competition-overview')
  }

  const onAdjudication = () => {
    console.log('Adjudication')
    //navigate()
  }

  return (
    <div className={classes.root}>
      <div className={classes.form}>
        <div className={classes.textHolder}>
          <p className={classes.textTitle}>The Tree of Life requests offerings!</p>
          <p className={classes.textDescription}>Insects are a keystone in the natural ecosystem. The Tree of Life has commanded a contest to expand it's knowledge of the insects in the park.</p>
        </div>
        <div className={classes.textHolder}>
          <p className={classes.textTitle}>Contest: { contest }</p>
          <p className={classes.textDescription}>Certify your pictures of insects, and enter it into the "Coolest Bug of the Week" contest.</p>
        </div>
        <div className={classes.textHolder}>
          <p className={classes.textTitle}>Rewards:</p>
          <ul style={{margin: 0}}>{ listRewards }</ul>
        </div>
        <div className={classes.buttonHolder}>
          <Button variant="contained" color="primary" className={classes.button} endIcon={<PhotoCameraOutlinedIcon />} onClick={onSubmit}>Submit a Bug</Button>
          <Button variant="contained" color="primary" className={classes.button} endIcon={<AssessmentOutlinedIcon />} onClick={onLeaderboard}>Leaderboard</Button>
          <Button variant="contained" color="secondary" className={classes.button} onClick={onAdjudication}>Adjudication</Button>
        </div>
      </div>
    </div>
  )
}
