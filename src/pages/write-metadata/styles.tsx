import { makeStyles, Theme } from '@material-ui/core'

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
  },
  vertical: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  horizontal: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  tribeLogo: {
    height: 100,
    width: 100,
  },
  photo: {
    height: 200,
    width: 200,
  },
  textDescription: {
    justifyContent: 'left',
  },
  textPoem: {
    justifyContent: 'center',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    // border: '1px solid #3333',
    padding: theme.spacing(3),
    // boxShadow: theme.shadows[3],
    textAlign: 'left',
    alignItems: 'left',
    '& > div': {
      marginBottom: theme.spacing(2),
    },
  },
}))

export default useStyles
