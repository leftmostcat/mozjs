// |reftest| skip-if(!Array.prototype.at) -- Array.prototype.at is not enabled unconditionally
// Copyright (C) 2020 Rick Waldron. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-array.prototype.at
description: >
  Array.prototype.at.name value and descriptor.
info: |
  Array.prototype.at( index )

  17 ECMAScript Standard Built-in Objects

includes: [propertyHelper.js]
features: [Array.prototype.at]
---*/
assert.sameValue(typeof Array.prototype.at, 'function');

assert.sameValue(
  Array.prototype.at.name, 'at',
  'The value of Array.prototype.at.name is "at"'
);

verifyProperty(Array.prototype.at, 'name', {
  enumerable: false,
  writable: false,
  configurable: true
});

reportCompare(0, 0);