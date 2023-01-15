# tsconfig-to-dual-package-example

An example for [tsconfig-to-dual-package](https://github.com/azu/tsconfig-to-dual-package).

## Install

Install with [npm](https://www.npmjs.com/):

    npm install @azu/tsconfig-to-dual-package-example

- Distribution files: https://www.npmjs.com/package/@azu/tsconfig-to-dual-package-example?activeTab=explore

## Usage

Use it in `index.mjs`

```js
import { sum } from "@azu/tsconfig-to-dual-package-example"
console.log(sum(1,2,3,4,5)) // => 15
```

Use it in `index.cjs`

```js
const { sum } = require("@azu/tsconfig-to-dual-package-example");
console.log(sum(1,2,3,4,5)) // => 15
```

## Changelog

See [Releases page](https://github.com/azu/tsconfig-to-dual-package-example/releases).

## Running tests

Install devDependencies and Run `npm test`:

    npm test

## Contributing

Pull requests and stars are always welcome.

For bugs and feature requests, [please create an issue](https://github.com/azu/tsconfig-to-dual-package-example/issues).

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

## Author

- azu: [GitHub](https://github.com/azu), [Twitter](https://twitter.com/azu_re)

## License

MIT © azu
