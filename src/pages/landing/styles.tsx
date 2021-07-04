import { makeStyles, Theme } from '@material-ui/core'

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
  },
  landingImage: {
    marginBottom: theme.spacing(5),
    width: '20em',
  },
  actionArea: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: theme.spacing(3),
    minWidth: '30em',
  },
}))

export default useStyles
