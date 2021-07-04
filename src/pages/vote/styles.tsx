import { makeStyles, Theme } from '@material-ui/core'
const placeholderImageURL = 'https://wolper.com.au/wp-content/uploads/2017/10/image-placeholder.jpg'
const useStyles = makeStyles((theme: Theme) => ({
  root: {
    height: '100vh',
    textAlign: 'center',
    width: '100vw',
  },
  imgBox: {
    width: '60vw',
    height: '50vh',
    boxShadow: theme.shadows[10],
    // maxHeight: "80vh",
    margin: 'auto',
  },
  img: {
    backgroundImage: 'url(' + placeholderImageURL + ')',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    width: '100%',
  },
  input: {
    display: 'none',
  },
  swipe: {
    position: 'absolute',
  },
  cardContainer: {
    width: '100%',
    height: '300px',
    textAlign: 'center',
    verticalAlign: 'middle',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    display: 'flex',
  },
  card: {
    position: 'relative',
    backgroundColor: '#fff',
    width: '260px',
    maxWidth: '260px',
    height: '300px',
    boxShadow: '0px 0px 60px 0px rgba(0,0,0,0.30)',
    borderRadius: '20px',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  buttons: {
    marginTop: '30px',
    width: '30em',
    margin: 'auto',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
}))

export default useStyles
