import { test } from 'node:test'
import assert from 'node:assert/strict'
import { cartTotal } from '../src/cart.js'

test('the example from the slides', () => {
  const items = [
    { name: 'T-shirt', price: 180000, qty: 2 },
    { name: 'Notebook', price: 45000, qty: 1 },
  ]
  const options = { vatRate: 0.08, freeShipFrom: 500000, shipFee: 30000 }
  assert.equal(cartTotal(items, options), 467400)
})

test('an empty cart returns zero', () => {
  const options = { vatRate: 0.08, freeShipFrom: 500000, shipFee: 30000 }
  assert.equal(cartTotal([], options), 0)
})

test('free shipping applies at the exact threshold', () => {
  const items = [{ name: 'Laptop stand', price: 250000, qty: 2 }]
  const options = { vatRate: 0.1, freeShipFrom: 500000, shipFee: 30000 }
  assert.equal(cartTotal(items, options), 550000)
})

test('negative price throws RangeError', () => {
  const items = [{ name: 'Invalid item', price: -1, qty: 1 }]
  const options = { vatRate: 0.08, freeShipFrom: 500000, shipFee: 30000 }
  assert.throws(() => cartTotal(items, options), RangeError)
})

test('zero quantity throws RangeError', () => {
  const items = [{ name: 'Invalid item', price: 100000, qty: 0 }]
  const options = { vatRate: 0.08, freeShipFrom: 500000, shipFee: 30000 }
  assert.throws(() => cartTotal(items, options), RangeError)
})

test('negative quantity throws RangeError', () => {
  const items = [{ name: 'Invalid item', price: 100000, qty: -1 }]
  const options = { vatRate: 0.08, freeShipFrom: 500000, shipFee: 30000 }
  assert.throws(() => cartTotal(items, options), RangeError)
})

test('non-integer quantity throws RangeError', () => {
  const items = [{ name: 'Invalid item', price: 100000, qty: 1.5 }]
  const options = { vatRate: 0.08, freeShipFrom: 500000, shipFee: 30000 }
  assert.throws(() => cartTotal(items, options), RangeError)
})

test('the returned total is a number', () => {
  const items = [{ name: 'Notebook', price: 45000, qty: 1 }]
  const options = { vatRate: 0.08, freeShipFrom: 500000, shipFee: 30000 }
  assert.equal(typeof cartTotal(items, options), 'number')
})
