import React from 'react'
import CartLi from './CartItem'
import '../App.css'


function Main(props) {
    const groceries = props.groceries
    const selected = props.selected
    const addItemToCart = props.addItemToCart
    const getCart = props.getCart
    const removeItemFromCart = props.removeItemFromCart
    const getTotal = props.getTotal


    return (<>
        <div id="cart">
            <h2>Your Cart</h2>
            <div className="cart--item-list-container">
                <ul className="item-list cart--item-list">
                    <CartLi selected={selected}
                        addItemToCart={addItemToCart}
                        getCart={getCart}
                        removeItemFromCart={removeItemFromCart}
                        getTotal={getTotal} />
                </ul>
            </div>
            <div className="total-section">
                <div>
                    <h3>Total</h3>
                </div>

                <div>
                    <span className="total-number">£{props.total.toFixed(2)}</span>
                </div>
            </div>
        </div>

    </>
    )
}

export default Main