import React from 'react'
import './Header.css'

function LiEl(props) {
    const groceries = props.groceries
    const addItemToCart = props.addItemToCart

    return groceries.map(function (grocery) {
        return (
            <li >
                <div className='store--item-icon'>
                    <img className='store--item-icon' src={`assets/icons/${grocery.id < 10 ? '00' : '0'}${grocery.id}-${grocery.name}.svg`} alt='beetroot'></img>
                </div>
                <button onClick={function () {
                    addItemToCart(grocery)
                    props.getCart()
                }}>Add to cart</button>
            </li>
        )
    })
}

function Header(props) {
    const groceries = props.groceries

    const addItemToCart = props.addItemToCart

    return (
        <header id="store">
            <h1>Grocero</h1>
            <ul className='item-list store--item-list'><LiEl groceries={groceries}
                addItemToCart={addItemToCart} getCart={props.getCart} /></ul>
        </header>
    )
}

export default Header