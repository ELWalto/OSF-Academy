import React, { useContext } from "react";
import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  IconButton,
} from "@material-ui/core";
import { AddShoppingCart } from "@material-ui/icons";
import useStyles from "./style";
import { useCart } from "../../../Contexts/CartContext/CartContext";
import { Modal } from "../../Toastify/toastify";

const Product = ({ product }) => {
  const classes = useStyles();
  const cart = useCart();
  const add = (product) => () => {
    cart.addToCart(product);
    
  };

  return (
    <>
      <Card className={classes.root}>
        <CardMedia
          className={classes.media}
          image={product.image}
          title={product.name}
        />
        <CardContent>
          <div className={classes.cardContent}>
            <Typography variant="h5" gutterBottom>
              {product.name}
            </Typography>
            <Typography variant="h6">$:{product.price}</Typography>
          </div>
          <div className={classes.description}>
            <Typography variant="h6" color="textPrimary">
              {" "}
              {product.description}
            </Typography>
          </div>
        </CardContent>
        <CardActions disableSpacing className={classes.cardActions}>
          <IconButton onClick={add(product)} aria-label="Add to cart"> 
          <Modal/>
                     
          </IconButton>
          
        </CardActions>
      </Card>
    </>
  );
};

export default Product;
