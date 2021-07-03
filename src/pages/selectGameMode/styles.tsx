import { makeStyles, Theme } from '@material-ui/core'

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
    flexDirection: 'column',
    justifyContent: 'space-between',
    // border: '1px solid #3333',
    padding: theme.spacing(3),
    // boxShadow: theme.shadows[3],
    textAlign: 'left',
    alignItems: 'center',
    '& > div': {
      marginBottom: theme.spacing(2),
    },
  },
  textHolder: {
    alignSelf:'stretch',
  },
  textTitle: {
    fontSize: 'normal',
    fontWeight: 'bold',
    overflowWrap: 'break-word',
  },
  textDescription: {
    fontSize: 'normal',
    overflowWrap: 'break-word',
  },
  rewardList: {
    fontSize: 'small',
    overflowWrap: 'break-word',
  },
  buttonHolder: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  button: {
    margin: theme.spacing(1),
  },
}))

export default useStyles
