import { IconButton } from "@material-ui/core";
import { AddShoppingCart } from "@material-ui/icons";
import React from "react";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export function Modal() {
  const notify = () =>
    toast.success("Adicionado com sucesso!", {
      position: toast.POSITION.TOP_CENTER,
      autoClose: 3000,
      closeOnClick: true,
      theme: 'light',
      icon: <AddShoppingCart/>,  
    });

  return (
    <div>
      <IconButton onClick={notify}>
        <AddShoppingCart />
      </IconButton>

      <ToastContainer />
    </div>
  );
}
