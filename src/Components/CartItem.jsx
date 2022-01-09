import React from "react"
import '../App.css'

function CartItem(props) {
    const selected = props.selected
    const addItemToCart = props.addItemToCart
    const getCart = props.getCart
    const removeItemFromCart = props.removeItemFromCart
    const getTotal = props.getTotal

    return selected.map(function (grocery) {
        return (
            <li >
                <img className='cart--item-icon' src={`assets/icons/${grocery.id < 10 ? '00' : '0'}${grocery.id}-${grocery.name}.svg`} alt='beetroot'></img>
                <p>{grocery.name}</p>
                <button className="quantity-btn remove-btn center" onClick={function () {
                    removeItemFromCart(grocery)
                    getCart()
                    getTotal()
                }}>-</button>
                <span className="quantity-text center">{grocery.amount}</span>
                <button className="quantity-btn add-btn center" onClick={function () {
                    addItemToCart(grocery)
                    getCart()
                    getTotal()
                }}>+</button>

            </li>
        )
    })
}

function CartLi(props) {
    const addItemToCart = props.addItemToCart
    const getCart = props.getCart
    const removeItemFromCart = props.removeItemFromCart
    const getTotal = props.getTotal

    return <ul className="item-list.cart--item-list">
        <CartItem
            selected={props.selected}
            addItemToCart={addItemToCart}
            getCart={getCart} removeItemFromCart={removeItemFromCart} getTotal={getTotal} />
    </ul>
}

export default CartLi