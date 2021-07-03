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
        <div className={classes.horizontal} >
          <div className={classes.vertical} style={{ paddingRight: 25 }}>
            <p style={{ paddingBottom: 10 }}>Enter your bug for Tribe NgenInfinity</p>
            <img className={classes.tribeLogo} src={TribeLogo} alt="logo" />
          </div>

          <img className={classes.photo} src={Photo} alt="logo" />
        </div>

        {/* Form entry */}
        <div>
          <div className={classes.form}>
            <p className={classes.textDescription}>Name your bug!</p>
            <TextField {...nameProps} />
            <p className={classes.textDescription}>How did you find it?</p>
            <TextField multiline rowsMax={10} {...descriptionProps} />
            <p className={classes.textDescription}>The Tree Of Life wishes you to compase a poem to your insect</p>
            <TextField multiline rowsMax={10} {...poemProps} />
            <div style={{ flexDirection: 'row' }}>
              <div style={{ display:'flex', flexDirection: 'row' }}>
                <p>GPS Accuracy</p> <p>Test</p>
              </div>
              <div>
                <p className={classes.textDescription}>GPS North</p>
                <TextField label={"gps-north"} disabled={true} value={"asdf"}/>
              </div>
              <p className={classes.textDescription}>GPS East</p>
              <TextField label={"gps-east"} disabled={true} value={"asdf"}/>
            </div>
            <Button onClick={onSubmit} >submit</Button>
          </div>
        </div>
      </div>
    </div >
  )
}
