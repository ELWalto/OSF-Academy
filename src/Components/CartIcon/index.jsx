import { ShoppingCart } from '@material-ui/icons'
import React from 'react'
import { useCart } from '../../Contexts/CartContext/CartContext'
import { DivCounter, Nav, NavBtn, NavBtnLink } from '../Logo/style'

const CartIcon = () => {
  const cart = useCart()

  const itemsCount = Object.keys(cart.cart).length

    return (
        <div>
          <Nav>
            <NavBtn>
          <NavBtnLink to="/cart">
            <ShoppingCart />
            
        {itemsCount > 0 && <divCounter>({itemsCount})</divCounter>}

          </NavBtnLink>
        </NavBtn>
        </Nav>
        </div>
    )
}

export default CartIcon
