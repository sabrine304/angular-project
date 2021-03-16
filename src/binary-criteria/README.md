# Binary Criteria Search Engine

/!\ Read carefully

This test goal is to see how you search through data, how you manage async calls, and undefined criteria depth.

- The `criteria.json`, `criteria2.json` and `data.sample.json` files should not be modified at all.
- The `_sleep` method should not be modified, and related calls to the method should remain at their current location.
- We consider that all values (genre, year, platforms and hasExpansion) are fetched asynchronously.
  (for example let's imagine we need to do an API call to get the information, mocked by the _sleep() method call)
- Thus, those calls may have unpredictable execution time (random timeout in the _sleep method)

Aside from the `_sleep` method and calls, you can modify the service as you wish: adding/updating/deleting attributes, methods...
You are also free to add tests.

The goal is to implement the `process` function.

The spec may be lacking some explanations: feel free to make assumptions and to explain them in your code.

## Key points

- Binary criteria can have unlimited depth (we can chain as `$or` or `$and` as we want)
- The root of the "criteria" key can be seen as an "and"
