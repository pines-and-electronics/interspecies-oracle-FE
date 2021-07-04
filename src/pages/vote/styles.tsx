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
    position: 'absolute'
  },
  cardContainer: {
    width: '100%',
    height: '300px',
    textAlign: 'center',
    verticalAlign: 'middle',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    display: 'flex'
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
      backgroundPosition: 'center'
  },
  buttons: {
    margin: '20px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
   button: {
      flexShrink: 0,
      padding: '10px',
      borderRadius: '15px',
      border: 'none',
      color: '#fff',
      fontSize: '18px',
      backgroundColor: '#9198e5',
      transition: '200ms',
      margin: '0 10px',
      fontWeight: 'bolder',
      width: '160px',
      boxShadow: '0px 0px 30px 0px rgba(0,0,0,0.10)'
  }
}))

export default useStyles
