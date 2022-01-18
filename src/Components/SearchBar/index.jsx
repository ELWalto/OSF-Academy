import axios from "axios";
import React, { useEffect, useState } from "react";
import { Grid } from "@material-ui/core";
import Product from "../Products/Product/Product";
import { ProductCardStyle } from "../Products/style";
import { NavMenu } from "../Navbar/style";
import Navbar from "../Navbar";

const SearchBar = () => {
  const [searchBar, setSearchBar] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const params = {};
    if (search) {
      params.name_like = search;
    }
    axios.get("http://localhost:3333/products", { params }).then((response) => {
      console.log(response);
      setSearchBar(response.data);
    });
  }, [search]);

  console.log(search);

  return (
    <>
    <div>
      <NavMenu>
        <input
          type="text"
          placeholder="Search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </NavMenu>
      </div>
      <ProductCardStyle>
        <Grid container justifyContent="center" spacing={4}>
          {searchBar?.map((product) => (
            <Grid item key={product.id} xs={12} sm={6} md={5} lg={3}>
              <Product product={product} />
            </Grid>
          ))}
        </Grid>
      </ProductCardStyle>
    </>
  );
};

export default SearchBar;
