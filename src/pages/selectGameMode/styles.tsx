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
    margin: 0,
    fontSize: "110%",
    fontWeight: 'bolder',
    overflowWrap: 'normal',
  },
  textDescription: {
    margin: 0,
    overflowWrap: 'normal',
  },
  rewardList: {
    margin: 0,
    overflowWrap: 'normal',
  },
  buttonHolder: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  button: {
    color: 'white',
    margin: theme.spacing(1),
  },
}))

export default useStyles
