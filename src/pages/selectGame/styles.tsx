import { makeStyles, Theme } from '@material-ui/core'
import theme from '../../theme'

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
  },
  form: {
    display: 'flex',
    width: '100vw',
    flexDirection: 'column',
    justifyContent: 'space-between',
    // border: '1px solid #3333',
    padding: theme.spacing(3),
    // boxShadow: theme.shadows[3],
    textAlign: 'center',
    alignItems: 'center',
    '& > div': {
      marginBottom: theme.spacing(2),
    },
  },
  textDescription: {
    margin: 0,
    textAlign: 'left',
  },
  tribeInfo: {
    display: 'flex',
    flexDirection: 'column',
    alignContent: 'flex-start',
    alignItems: 'left',
    textAlign: 'left',
    width: '100%',
    border: '3px solid #2B8C86',
    background: 'rgba(255, 255, 255, 0.25)',
    borderRadius: 20,
    padding: theme.spacing(2),
  },
  emptyHolder: {
    width: '100%',
    height: 75,
  },
  buttonHolder: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: theme.spacing(1),
    width: '100%',
  },
  gamesHolder: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  button: {
    border: '3px solid #2B8C86',
    background: 'rgba(255, 255, 255, 0.25)',
    borderRadius: 20,
  },
  buttonIcon: {
    width: '5em',
    height: '5em',
  },
}))

export default useStyles
