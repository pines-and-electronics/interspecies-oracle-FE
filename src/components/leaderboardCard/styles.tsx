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
  },
  rankContainer: {
    display: 'flex',
    flexDirection: 'column'
  },
  rankCircle: {
    width: '64px',
    height: '64px',
    borderRadius: '50%',
    backgroundColor: theme.palette.primary.light,
    color: theme.palette.primary.dark,
    fontSize: '24pt',
    fontWeight: 'bold'
  },
  likes: {
    color: theme.palette.primary.main,
    fontWeight: 'bold',
    margin: '8px 0'
  },
  poemContainer: {
    textAlign: 'center',
    fontFamily: 'Bona Nova',
    color: theme.palette.text.secondary,
    whiteSpace: 'pre-line'
  },
  center: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }
}))

export default useStyles
