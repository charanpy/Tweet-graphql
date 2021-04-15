import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '100vh',
  },
  margin: {
    marginTop: 10,
    marginBottom: 20,
  },
  grow: {
    flexGrow: 1
  }
}));

export default useStyles;
