import React from 'react';
import { formatPrice } from '../helpers'

class Order extends React.Component {
  render() {
    const orderId = Object.keys(this.props.order)
    const sum = orderId.reduce((previousValue, key) => {
      const fish = this.props.fishes[key]
      const count = this.props.order[key]
      const isAvailable = fish && fish.status === 'available'
      if (isAvailable) {
        return previousValue + (count * fish.price || 0)
      } 
      return previousValue
    }, 0)
    return (
      <div className='order-wrap'>
        <h2>Your Order</h2>
        <p>{formatPrice(sum)}</p>
      </div>
    )
  }
}

export default Order;
