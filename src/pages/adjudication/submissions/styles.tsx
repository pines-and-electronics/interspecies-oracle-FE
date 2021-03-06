import { makeStyles, Theme } from '@material-ui/core'

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    padding: theme.spacing(2),
    margin: theme.spacing(4)
  },
  card: {
    marginBottom: theme.spacing(2),
    marginTop: theme.spacing(2),
  },
  gridContainer: {
    padding: theme.spacing(4),
  },
  media: {
    height: 180,
  },
}))

export default useStyles
