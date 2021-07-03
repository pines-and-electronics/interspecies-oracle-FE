import { Button, TextField } from '@material-ui/core'
import React, { ReactElement } from 'react'
import { useTextField } from '../../components'
import useStyles from './styles'
// import { useNavigate } from '@reach/router'

//TODO: Temp!
import Photo from './mrsquishy.png'
import TribeLogo from './tribe.png'

export default function Login(): ReactElement {
  const classes = useStyles()
  // const navigate = useNavigate()
  const [name, nameProps] = useTextField('text', 'Name')
  const [description, descriptionProps] = useTextField('description', 'Description')
  const [poem, poemProps] = useTextField('text', '10 lines max')
  const onSubmit = () => {
    console.log(name, description, poem)
    // navigate('/capture')
  }
  return (
    <div className={classes.root}>
      <div className={classes.vertical}>
        {/* Header */}
        <div className={classes.horizontal}>
          <div className={classes.vertical} style={{ paddingRight: 25 }}>
            <p style={{ paddingBottom: 10 }}>Enter your bug for Tribe NgenInfinity</p>
            <img className={classes.tribeLogo} src={TribeLogo} alt="logo" />
          </div>

          <img className={classes.photo} src={Photo} alt="logo" />
        </div>

        {/* Form entry */}
        <div>
          <p className={classes.textDescription}>Name your bug!</p>
          <TextField {...nameProps} />
          <p className={classes.textDescription}>How did you find it?</p>
          <TextField multiline rowsMax={10} {...descriptionProps} />
          {/* GPS */}
          <div style={{ display: 'flex', flexDirection: 'row' }}>
            <p>
              <span>GPS Accuracy: ±</span>
              <span>40</span>m
            </p>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <TextField label={'gps-north'} disabled={true} value={"52°30'33.211 N"} />
            <br />
            <TextField label={'gps-east'} disabled={true} value={"13°28'10.114 E"} />
          </div>
          {/* Poem */}
          <p className={classes.textDescription}>The Tree Of Life wishes you to compase a poem to your insect</p>
          <TextField multiline rowsMax={10} {...poemProps} />
          <div style={{ flexDirection: 'row' }}></div>

          <Button style={{ justifyContent: 'center' }} onClick={onSubmit}>
            submit
          </Button>
        </div>
      </div>
    </div>
  )
}
