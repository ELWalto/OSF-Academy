import React from "react";
import { Grid } from "@material-ui/core";
import Product from "./Product/Product";

const products = [
  {
    id: 1,
    name: "Shoes",
    description: "Expensive shoes.",
    price: "$10",
    image:
      "https://cdn.maioresemelhores.com/imagens/maiores-e-melhores-tenis-mais-caros-07.jpg",
  },
  {
    id: 2,
    name: "Shoes",
    description: "Expensive shoes.",
    price: "$20",
    image:
      "https://cdn.maioresemelhores.com/imagens/maiores-e-melhores-tenis-mais-caros-02.jpg",
  },
  {
    id: 3,
    name: "Shoes",
    description: "Expensive shoes.",
    price: "$30",
    image:
      "https://cdn.maioresemelhores.com/imagens/maiores-e-melhores-tenis-mais-caros-03.jpg",
  },
  {
    id: 4,
    name: "Shoes",
    description: "Expensive shoes.",
    price: "$40",
    image:
      "https://cdn.maioresemelhores.com/imagens/maiores-e-melhores-tenis-mais-caros-04.jpg",
  },
  {
    id: 5,
    name: "Shoes",
    description: "Expensive shoes.",
    price: "$1",
    image:
      "https://cdn.maioresemelhores.com/imagens/maiores-e-melhores-tenis-mais-caros-06.jpg",
  },
  {
    id: 6,
    name: "Shoes",
    description: "Expensive shoes.",
    price: "$50",
    image:
      "https://cdn.maioresemelhores.com/imagens/maiores-e-melhores-tenis-mais-caros-12.jpg",
  },
];

const Products = () => {
  return (
    <div>
      <Grid container justify="center" spacing={4}>
        {products.map((product) => (
          <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
            <Product product={product} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Products;
