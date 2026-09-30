# cartTotal implementation brief

## Task

Implement `cartTotal(items, options)` in `src/cart.js`.

## Allowed changes

You may modify:
- `src/cart.js`
- test files under `test/`

Do not modify unrelated files.

## Contract

`items` is an array of:
{ name, price, qty }

`options` is:
{ vatRate, freeShipFrom, shipFee }

The public function signature must remain:
`cartTotal(items, options)`

### Calculate:
- subtotal = sum of price * qty
- VAT = subtotal * vatRate
- shipping = 0 when subtotal >= freeShipFrom
- otherwise shipping = shipFee
Return:
subtotal + VAT + shipping
The result must be a JavaScript number rounded to the nearest whole đồng.

### Worked example
cartTotal(
  [
    { name: 'Áo thun', price: 180000, qty: 2 },
    { name: 'Sổ tay', price: 45000, qty: 1 }
  ],
  {
    vatRate: 0.08,
    freeShipFrom: 500000,
    shipFee: 30000
  }
)
must return 467400 as a JavaScript number.

### Edge cases
- Empty cart returns 0.
- Empty cart has no VAT and no shipping.
- Negative price throws RangeError.
- qty must be a positive integer.
- Zero, negative, or non-integer qty throws RangeError.

### Constraints
- Plain JavaScript only.
- No dependencies.
- Keep the implementation small and readable.
- Do not use toFixed() for the final result.

### Tests
Tests should cover:
- worked example returns 467400
- empty cart
- exact free-shipping threshold
- negative price
- zero quantity
- negative quantity
- non-integer quantity
- result is a number

### Done when
- npm test passes
- npm run lint passes
- no dependency has been added