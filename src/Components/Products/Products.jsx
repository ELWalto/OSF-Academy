// import React, { useEffect, useState } from "react";
// import { Grid } from "@material-ui/core";
// import Product from "./Product/Product";
// import { api } from "../../Services/api";
// import { ProductCardStyle } from "./style";
// import SearchBar from "../SearchBar/index"

// const Products = () => {
//   const [products, setProducts] = useState([]);
//   useEffect(() => {
//     api.get("/products").then((response) => {
//       console.log(response);
//       setProducts(response.data);
//     });
//   }, []);

//   return (
//     <>
//       <SearchBar></SearchBar>
//       <ProductCardStyle>
//         <Grid container justifyContent="center" spacing={4}>
//           {products?.map((product) => (
//             <Grid item key={product.id} xs={12} sm={6} md={5} lg={3}>
//               <Product product={product} />
//             </Grid>
//           ))}
//         </Grid>
//       </ProductCardStyle>
//     </>
//   );
// };

// export default Products;


import React from 'react'

const Products = () => {
  return (
    <div>
      
    </div>
  )
}

export default Products
