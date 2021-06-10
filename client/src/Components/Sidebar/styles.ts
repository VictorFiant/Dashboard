import { makeStyles } from '@material-ui/core/styles';



export default makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexDirection: 'column',
    },
   
    container: {
      width: '240px',
      margin: '30px 0',
      padding: 10,
      [theme.breakpoints.down('xs')]: {
        width: '80%',
      },
    },
    margin: {
      marginTop: 20,
      width: '100%'
    },
    severity: {
      marginTop: 70,
      width: '100%'
    },
    padding: {
      padding: '10px 40px',
    },
    paper: {
      padding: '10px 15px',
      border: '1px solid black',
    },
    formControl: {
        margin: theme.spacing(1),
      },
  }));