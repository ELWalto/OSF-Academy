import { ShoppingCart } from '@material-ui/icons'
import React from 'react'
import { Nav, NavBtn, NavBtnLink } from '../Logo/style'

const CartIcon = () => {
    return (
        <div><Nav>
            <NavBtn>
          <NavBtnLink to="/cart">
            <ShoppingCart />
          </NavBtnLink>
        </NavBtn>
        </Nav>
        </div>
    )
}

export default CartIcon
