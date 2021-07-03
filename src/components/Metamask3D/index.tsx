import React, { ReactElement } from 'react';
const ModelViewer = require('@metamask/logo')

  const viewer = ModelViewer({
    // Dictates whether width & height are px or multiplied
    pxNotRatio: true,
    width: 500,
    height: 400,
    // pxNotRatio: false,
    // width: 0.9,
    // height: 0.9,
    // To make the face follow the mouse.
    followMouse: false,
    // head should slowly drift (overrides lookAt)
    slowDrift: false,

  })
  // add viewer to DOM
  const container = document.getElementById('metamask-3d')
  container?.appendChild(viewer.container)
  // // look at something on the page
  viewer.lookAt({
    x: 100,
    y: 100,
  })
  // enable mouse follow
  viewer.setFollowMouse(true)
  // deallocate nicely
  viewer.stopAnimation()

export default function Metamask3D(): ReactElement {

  return (
    <div id='metamask-3d'>
      {/* {viewer.container} */}
    </div>
  )
}