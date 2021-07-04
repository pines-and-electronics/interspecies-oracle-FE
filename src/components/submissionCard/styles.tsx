import { makeStyles, Theme } from '@material-ui/core'

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    padding: theme.spacing(2),
  },
  card: {
    margin: 16,
    display: 'flex',
    flexDirection: 'row',
    padding: 24,
    height: '24em',
    color: theme.palette.grey[700]
  },
  media: {
    width: 250,
    margin: 16,
    backgroundSize: '100%',
  },
  cardContent: {
    margin: 16
  },
  childContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  contentContainer: {
    display: 'flex',
    flexDirection: 'column',
  }
}))

export default useStyles
