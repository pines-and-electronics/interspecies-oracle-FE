import { makeStyles, Theme } from '@material-ui/core'

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    padding: theme.spacing(2),
  },
  card: {
    marginBottom: theme.spacing(2),
    marginTop: theme.spacing(2),
    display: 'flex',
    flexDirection: 'row',
    padding: 24,
    height: "100%"
  },
  media: {
    width: 250,
    margin: 16,
    backgroundSize: '100%',
  },
  cardContent: {
    width: 250,
    margin: 16
  },
  buttonContainer: {

  },
  contentContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between'
  }
}))

export default useStyles
