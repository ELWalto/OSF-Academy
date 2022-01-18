import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  root: {
    maxWidth: '100vw',
    marginBottom:'2rem',
    transition: 'all 250ms linear',
    scrollbarWidth: 'none',
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  cardActions: {
    display: 'flex',
    justifyContent: 'flex-end',

  },
  cardContent: {
    display: 'flex',
    justifyContent: 'space-between',
    textAlign:'justify',
    maxWidth:'150ch',
    overflow: 'hidden',
    textOverflow:'ellipsis',
    whiteSpace:'nowrap'
  },
}));
