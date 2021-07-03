import { SimplePaletteColorOptions, lighten, darken } from '@material-ui/core'

export const primary: SimplePaletteColorOptions = {
  main: '#2B8C86',
  dark: darken('#2B8C86', 0.1),
  light: lighten('#2B8C86', 0.9),
}

export const secondary: SimplePaletteColorOptions = {
  main: '#FF9595',
  dark: darken('#FF9595', 0.1),
  light: lighten('#FF9595', 0.9),
}

export const common = {
  black: '#333',
  white: '#fff',
}

export const success: SimplePaletteColorOptions = {
  main: '#3CC13B',
  light: lighten('#3CC13B', 0.9),
}
export const warning: SimplePaletteColorOptions = {
  main: '#F3BB1C',
  light: lighten('#F3BB1C', 0.9),
}
export const error: SimplePaletteColorOptions = {
  main: '#f44444',
  light: lighten('#f44444', 0.9),
}
export const info: SimplePaletteColorOptions = {
  main: '#3CC13B',
  light: lighten('#3CC13B', 0.9),
}
export const primaryGradient = `radial-gradient(390.48% 55.17% at 50% 50%, #FF9595 0%, #2B8C86 100%)`
