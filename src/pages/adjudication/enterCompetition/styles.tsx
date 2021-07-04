import { makeStyles, Theme } from '@material-ui/core'

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    padding: theme.spacing(4),
  },
  textDescription: {
    justifyContent:'left'
  },
  hr: {
    border:0,
    height:20,
    background: 'url("http://lorempixel.com/400/200/sports/") 0 0'
  },
  card: {
    marginBottom: theme.spacing(2),
    marginTop: theme.spacing(2),
  },
  media: {
    height: 180,
  },
  center: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    margin: '32px 16px',
    fontSize: '16pt'
  }
}))

export default useStyles
