import React, { useState } from 'react'
import './App.css'
import Header from './Components/Header'
import Main from './Components/Main'

function App() {
  const [groceries, setGroceries] = useState([{
    id: 1,
    name: 'beetroot',
    price: 0.35,
    amount: 0
  },
  {
    id: 2,
    name: 'carrot',
    price: 0.30,
    amount: 0
  },
  {
    id: 3,
    name: 'apple',
    price: 0.25,
    amount: 0
  },
  {
    id: 4,
    name: 'apricot',
    price: 0.65,
    amount: 0
  },
  {
    id: 5,
    name: 'avocado',
    price: 0.45,
    amount: 0
  },
  {
    id: 6,
    name: 'bananas',
    price: 0.35,
    amount: 0
  },
  {
    id: 7,
    name: 'bell-pepper',
    price: 0.15,
    amount: 0
  },
  {
    id: 8,
    name: 'berry',
    price: 0.385,
    amount: 0
  },
  {
    id: 9,
    name: 'blueberry',
    price: 0.95,
    amount: 0
  },
  {
    id: 10,
    name: 'eggplant',
    price: 0.25,
    amount: 0
  }
  ])

  const [selected, setSelected] = useState([])
  const [total, setTotal] = useState(0)

  function addItemToCart(item) {
    item.amount++
  }

  function removeItemFromCart(item) {
    if (item.amount > 0) {
      item.amount--
    }
  }

  function getCart() {
    setSelected(groceries.filter(item => item.amount > 0))
  }

  function getTotal() {
    let total = 0

    const cart = getCart()

    for (const item of selected) {
      total += item.price * item.amount
    }
    setTotal(total)
  }

  return (<>
    <Header groceries={groceries} addItemToCart={addItemToCart} getCart={getCart} />
    <Main groceries={groceries}
      selected={selected}
      addItemToCart={addItemToCart}
      getCart={getCart}
      removeItemFromCart={removeItemFromCart}
      getTotal={getTotal}
      total={total} />
  </>)
}

export default App
