// |reftest| skip -- FinalizationGroup is not supported
// Copyright (C) 2019 Leo Balter. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-finalization-group.prototype.register
description: Return undefined after registering itself
info: |
  FinalizationGroup.prototype.register ( target , holdings [, unregisterToken ] )

  1. Let finalizationGroup be the this value.
  2. If Type(finalizationGroup) is not Object, throw a TypeError exception.
  3. If Type(target) is not Object, throw a TypeError exception.
  4. If finalizationGroup does not have a [[Cells]] internal slot, throw a TypeError exception.
  5. If Type(unregisterToken) is not Object,
    a. If unregisterToken is not undefined, throw a TypeError exception.
    b. Set unregisterToken to empty.
  6. Let cell be the Record { [[Target]] : target, [[Holdings]]: holdings, [[UnregisterToken]]: unregisterToken }.
  7. Append cell to finalizationGroup.[[Cells]].
  8. Return undefined.
features: [FinalizationGroup]
---*/

var fn = function() {};
var fg = new FinalizationGroup(fn);

assert.sameValue(fg.register(fg), undefined, 'Register itself');
assert.sameValue(fg.register(fg, fg), undefined, 'Register itself with holdings');
assert.sameValue(fg.register(fg, fg, fg), undefined, 'Register itself with holdings and unregisterToken');

reportCompare(0, 0);