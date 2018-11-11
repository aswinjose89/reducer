## Reducer

Frontend environments evolve rapidly nowadays and modern browsers have already implemented a great deal of DOM/BOM APIs which are good enough for production use. We don't have to learn jQuery from scratch for DOM manipulation or event handling. In the meantime, thanks to the spread of frontend libraries such as React, Angular and Vue, manipulating the DOM directly becomes anti-pattern, so that jQuery usage has never been less important. This project summarizes most of the alternatives in native Javascript implementation to jQuery methods, with IE 10+ support.

## Quick Links

**[Array](#array)**

1. [r.isArray](#_chunk)
1. [_.compact](#_compact)
1. [_.concat](#_concat)
1. [_.fill](#_fill)
1. [_.find](#_find)
1. [_.findIndex](#_findindex)
1. [_.first](#_first)
1. [_.flatten](#_flatten)
1. [_.flattenDeep](#_flattendeep)
1. [_.fromPairs](#_frompairs)
1. [_.head and _.tail](#_head-and-_tail)
1. [_.indexOf](#_indexof)
1. [_.join](#_join)
1. [_.last](#_last)
1. [_.lastIndexOf](#_lastindexof)
1. [_.reverse](#_reverse)
1. [_.without](#_without)
1. [_.intersection](#_intersection)
1. [_.difference](#_difference)
1. [_.slice](#_slice)
1. [_.isArray](#_isarray)
1. [_.isArrayBuffer](#_isarraybuffer)


## Array

### _.chunk

Creates an array of elements split into groups the length of size.
```js
// Underscore/Lodash
_.chunk(['a', 'b', 'c', 'd'], 2);
// => [['a', 'b'], ['c', 'd']]

_.chunk(['a', 'b', 'c', 'd'], 3);
// => [['a', 'b', 'c'], ['d']]


// Native

const chunk = (input, size) => {
  return input.reduce((arr, item, idx) => {
    return idx % size === 0
      ? [...arr, [item]]
      : [...arr.slice(0, -1), [...arr.slice(-1)[0], item]];
  }, []);
};

chunk(['a', 'b', 'c', 'd'], 2);
// => [['a', 'b'], ['c', 'd']]

chunk(['a', 'b', 'c', 'd'], 3);
// => [['a', 'b', 'c'], ['d']]

```

#### Browser Support

![Chrome][chrome-image] | ![Firefox][firefox-image] | ![IE][ie-image] | ![Opera][opera-image] | ![Safari][safari-image]
:-: | :-: | :-: | :-: | :-: |
   ✔  |  ✔ |  Not Supported |  ✔ |  ✔  |

**[⬆ back to top](#quick-links)**

### _.compact

Creates an array with all falsy values removed.

  ```js
  // Underscore/Lodash
  _.compact([0, 1, false, 2, '', 3]);

  // Native
  [0, 1, false, 2, '', 3].filter(Boolean)
  ```

#### Browser Support

![Chrome][chrome-image] | ![Firefox][firefox-image] | ![IE][ie-image] | ![Opera][opera-image] | ![Safari][safari-image]
:-: | :-: | :-: | :-: | :-: |
   ✔  |  1.5 ✔ |  9 ✔ |  ✔ |  ✔  |

**[⬆ back to top](#quick-links)**

### _.concat

Creates a new array concatenating array with any additional arrays and/or values.

  ```js
  // Underscore/Lodash
  var array = [1]
  var other = _.concat(array, 2, [3], [[4]])

  console.log(other)
  // output: [1, 2, 3, [4]]

  // Native
  var array = [1]
  var other = array.concat(2, [3], [[4]])

  console.log(other)
  // output: [1, 2, 3, [4]]
  ```

#### Browser Support

![Chrome][chrome-image] | ![Firefox][firefox-image] | ![IE][ie-image] | ![Opera][opera-image] | ![Safari][safari-image]
:-: | :-: | :-: | :-: | :-: |
1.0  ✔  | 1.0 ✔ |  5.5 ✔  |  ✔  |  ✔  |

**[⬆ back to top](#quick-links)**
