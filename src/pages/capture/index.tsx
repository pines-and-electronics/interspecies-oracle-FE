import { Button, IconButton, Slider, Typography } from '@material-ui/core'
import { DeleteSweep, PhotoCameraRounded, SendOutlined } from '@material-ui/icons'
import { useNavigate } from '@reach/router'
import React, { ReactElement, useState } from 'react'
import CanvasDraw from 'react-canvas-draw'
import useStyles from './styles'

export default function Capture(): ReactElement {
  const classes = useStyles()
  const [source, setSource] = useState('')
  const [brushSize, setBrushSize] = useState<number | string | Array<number | string>>(10)

  const navigate = useNavigate()
  let state = {
    color: '#FF9595bb',
    brushRadius: 15,
    lazyRadius: 12,
  }

  let canvasRef: CanvasDraw | null

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
  const handleSliderChange = (event: any, newValue: number | number[]) => {
    setBrushSize(newValue)
  }
  return (
    <div className={classes.root}>
      <Typography variant="h2">Capture a picture</Typography>
      <br />

      {source && (
        <div>
          <CanvasDraw
            ref={canvasDraw => (canvasRef = canvasDraw)}
            className={classes.imgBox}
            immediateLoading={true}
            brushColor={state.color}
            brushRadius={typeof brushSize === 'number' ? brushSize : 10}
            lazyRadius={state.lazyRadius}
            imgSrc={source}
          />

          <br />

          <Typography variant="h3">Draw mask using your fingers</Typography>
          <br />
          <div style={{ width: '80vw', maxWidth: '50em', margin: 'auto', display: 'flex', alignItems: 'center' }}>
            <Typography style={{ flex: '1' }} variant="h5" gutterBottom>
              Pen Size
            </Typography>
            <Slider
              style={{ flex: '3' }}
              defaultValue={30}
              aria-labelledby="discrete-slider"
              valueLabelDisplay="auto"
              color="secondary"
              value={typeof brushSize === 'number' ? brushSize : 10}
              onChange={handleSliderChange}
              step={2}
              marks
              min={2}
              max={50}
            />

            <IconButton
              style={{ flex: '1' }}
              color="primary"
              onClick={() => {
                canvasRef && canvasRef.clear()
              }}
            >
              <DeleteSweep style={{ fontSize: '2em', margin: 0 }} />
            </IconButton>
          </div>
        </div>
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
        onClick={() => {
          const data = canvasRef && canvasRef.getSaveData()
          console.log(data)

          navigate('/write-metadata')
        }}
      >
        Upload Image
      </Button>
    </div>
  )
}
