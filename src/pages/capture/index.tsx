import { Box, Button, Typography } from '@material-ui/core'
import { PhotoCameraRounded, SendOutlined } from '@material-ui/icons'
import React, { ReactElement, useState } from 'react'
import useStyles from './styles'

import CanvasDraw from 'react-canvas-draw'

export default function Capture(): ReactElement {
  const classes = useStyles()
  const [source, setSource] = useState('')
  const CanvasRef = React.useRef()

  let state = {
    color: 'red',
    brushRadius: 10,
    lazyRadius: 12,
  }

  const dataRef = React.useRef(localStorage.getItem('drawing') || '{"lines":[]}')
  const [cacheData, setCacheData] = React.useState(dataRef.current)

  const handleCapture = (target: EventTarget & HTMLInputElement) => {
    setSource('')
    if (target.files) {
      if (target.files.length !== 0) {
        const file = target.files[0]
        const newUrl = URL.createObjectURL(file)

        setTimeout(() => setSource(newUrl), 100)
        console.log(newUrl)
      }
    }
  }

  return (
    <div className={classes.root}>
      <Typography variant="h2">Capture a picture</Typography>
      <br />
      {source && (
        <CanvasDraw
          className={classes.imgBox}
          immediateLoading={true}
          brushColor={state.color}
          brushRadius={state.brushRadius}
          lazyRadius={state.lazyRadius}
          imgSrc={source}
        />
      )}

      <input
        accept="image/*"
        className={classes.input}
        id="icon-button-file"
        type="file"
        capture="environment"
        onChange={e => handleCapture(e.target)}
      />
      <br />
      <label htmlFor="icon-button-file">
        <Button aria-label="upload picture" component="span" startIcon={<PhotoCameraRounded />}>
          Capture Image
        </Button>
      </label>
      <Button
        aria-label="upload picture"
        variant="outlined"
        component="span"
        startIcon={<SendOutlined />}
        disabled={!source}
        style={{ marginLeft: '1em' }}
      >
        Upload Image
      </Button>
    </div>
  )
}
