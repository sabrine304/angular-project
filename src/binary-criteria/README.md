# Binary Criteria Search Engine

/!\ Read carefully

This test is aimed to see how you search through data, how you manage async calls, and undefined criteria depth.

- The `criteria.spec.ts` file should not be modified at all, as well as `criteria.json`, `criteria2.json` and `data.sample.json`.
- The `_sleep` method should not be modified, and related calls to the method should remain in their location.
- We consider that all keys (genre, year, platforms and hasExpansion) are fetched asynchronously.
  (for example let's imagine we need to do an API call to get the information, symbolized by the _sleep() method call)
- Thus, those calls may have unpredictable execution time (random timeout in the _sleep method)

You can modify the class as you wish: add/update/delete attributes, same for methods...

The goal is to implement the `process` function.

The spec may be lacking some explanations: feel free to make assumptions and to explain them in your code.

## Key points

- Every criterion can be asynchronous
- Binary criteria can have unlimited depth (we can chain as `$or` or `$and` as we want)
- The root of the "criteria" key can be seen as an "and"
