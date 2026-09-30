# Project rules

## Stack

- Node.js
- ES modules
- Plain JavaScript
- Node's built-in `node:test`

Do not introduce frameworks or third-party dependencies.

## Main task

Implement and maintain:

`cartTotal(items, options)` in `src/cart.js`

The function must follow the assignment specification exactly.

### Inputs

`items` is an array of objects:
{ name, price, qty }

`options` is an object:
{ vatRate, freeShipFrom, shipFee }

### Required behaviour
- subtotal is the sum of price * qty.
- VAT is subtotal * vatRate.
- Shipping is 0 when subtotal >= freeShipFrom.
- Otherwise shipping is shipFee.
- Return subtotal + VAT + shipping.
- Return a JavaScript number.
- Round the final result to the nearest whole dong.
- An empty cart returns 0 with no VAT and no shipping.
- A negative price throws RangeError.
- A qty that is not a positive integer throws RangeError.
The worked example must return:
467400

### Files and scope
Implementation changes should stay focused on the assignment.
Expected files:
- src/cart.js for implementation
- existing test files, or additional test files in the test directory, for specification tests
Do not modify unrelated files unless required for the project harness.

### Commands

Before changing implementation, run:
`npm test`

The starter repository is expected to begin with a failing test.

After making implementation changes, stop and present the changes for human review.

Do not commit, push, or merge changes unless explicitly instructed.

Before considering the task complete, the following gates must pass:

- `npm test`
- `npm run lint`

### Tests
Tests must verify behaviour from the specification, not implementation details.
Tests should cover at least:
1. Worked example returns 467400.
2. Empty cart returns 0.
3. Free shipping applies when subtotal is exactly freeShipFrom.
4. A negative price throws RangeError.
5. qty: 0 throws RangeError.
6. A negative quantity throws RangeError.
7. A non-integer quantity such as 1.5 throws RangeError.
8. The returned total is a number.
Keep tests focused so that each test has one clear reason to fail.

### Code style
- Use plain JavaScript.
- Use ES module syntax.
- Keep the implementation small and readable.
- Prefer clear variable names such as subtotal, vat, shipping, and total.
- Use Number.isInteger() when checking quantity.
- Throw RangeError for the invalid values required by the specification.
- Avoid unnecessary abstraction for this small assignment.

### Never
- Never add a dependency without explicit approval.
- Never install a package just to solve cartTotal.
- Never return the final total using toFixed(), because it returns a string.
- Never change the public cartTotal(items, options) contract.
- Never silently ignore an invalid negative price.
- Never silently accept a zero, negative, or non-integer quantity.
- Never edit unrelated project files.
- Never commit node_modules/.
- Never change tests only to make an incorrect implementation pass.
- Never claim the task is complete unless all configured gates pass.

### Definition of done
The task is complete only when:
- cartTotal follows every rule in the specification.
- The worked example returns 467400 as a number.
- All required edge cases are tested.
- npm test passes.
- Any configured lint/format gate passes.
- The final diff has been reviewed line by line.
- No dependency has been added.