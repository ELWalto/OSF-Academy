import { makeStyles } from '@material-ui/core/styles';
import styled from 'styled-components';


export default makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
  title: {
    marginTop: '5%',
  },
  emptyButton: {
    minWidth: '150px',
    [theme.breakpoints.down('xs')]: {
      marginBottom: '5px',
    },
    [theme.breakpoints.up('xs')]: {
      marginRight: '20px',
    },
  },
  checkoutButton: {
    minWidth: '150px',
  },
  link: {
    textDecoration: 'none',
  },
  cardDetails: {
    display: 'flex',
    marginTop: '10%',
    width: '100%',
    justifyContent: 'space-between',
  },
}));


export const TitleCart = styled.h1`
  text-align: center;
  display: flex;
  font-size: 40px;
  line-height: 55px;
  text-transform: uppercase;
  margin-bottom: 2.5rem;
  margin-block-start: 0.83em;
  margin-block-end: 0.83em;
  justify-content: center;
`;

export const Footer = styled.footer`

  bottom: 0;
  width: 100%;
  max-width: 1400px;
  text-align: center;
  align-items: center;
  align-content: flex-start;
  text-align: center;
  margin-bottom: 10px;
  line-height: 50px;

`;

export const DivItems = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  height: 100%;
  padding: 50px;
  text-align: center;

  h3 {
    text-align: center;
    font-size: 25px;
    padding: 1rem;
  }
  div.Buttons {
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin: 10px;
    padding: 10px;
  }
  div.checkout {
    padding: 10px;
  }
  div.clearCart {
    padding: 10px;
  }
`;

export const DivChangeQty = styled.div`
  flex-direction: row;
`;

export const DivIncrease = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
`;

export const DivDecrease = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
`;
export const DivDelete = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
`;

