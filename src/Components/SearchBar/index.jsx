import axios from "axios";
import React, { useEffect, useState } from "react";
import { Grid } from "@material-ui/core";
import Product from "../Products/Product/Product";
import { ProductCardStyle } from "../Products/style";
import { NavMenu } from "../Logo/style";
import Logo from "../Logo/logo";
import CartIcon from "../CartIcon";
import SideBar from "../SideBar/SideBar";
import { useCart } from "../../Contexts/CartContext/CartContext";

const SearchBar = () => {
  const [searchBar, setSearchBar] = useState([]);
  const [search, setSearch] = useState("");

  const cart = useCart();

  useEffect(() => {
    const params = {};
    if (search) {
      params.name_like = search;
    }
    axios
      .get("https://my-json-server.typicode.com/ELWalto/dbjson/products", {
        params,
      })
      .then((response) => {
        console.log(response);
        setSearchBar(response.data);
      });
  }, [search]);

  return (
    <>
      <NavMenu>
        <Logo />
        <input
          type="text"
          placeholder="Search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <CartIcon />
      </NavMenu>

      <div>
        <ProductCardStyle>
          <Grid container justifyContent="center" spacing={4}>
            {searchBar?.map((product) => (
              <Grid item key={product.id} xl={4} xs={8} sm={3} md={2} lg={3}>
                <Product product={product} />
              </Grid>
            ))}
          </Grid>
        </ProductCardStyle>
      </div>
    </>
  );
};

export default SearchBar;
