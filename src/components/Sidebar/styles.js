import { makeStyles } from '@mui/styles';

export default makeStyles((theme) => ({
  imageLink: {
    display: 'flex',
    justifyContent: 'center',
    padding: '10% 0',
  },
  image: {
    width: '70%',
  },
  list: {
    color: theme.palette.text.primary,
    textDecoration: 'none !important',
  },
  genreImage: {
    filter: theme.palette.mode === 'dark' ? 'dark' : 'invert(1)',
  },
}));
