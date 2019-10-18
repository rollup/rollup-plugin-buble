# rollup-plugin-buble

Convert ES2015 with buble.

## Archived (Migration to Mono-Repo In-Process)

This repository has been archived and is in the process of being migrated to a new monorepo. Please bear with us as we make this transition. More information to follow.

## Installation

```bash
npm install --save-dev rollup-plugin-buble
```


## Usage

```js
import { rollup } from 'rollup';
import buble from 'rollup-plugin-buble';

rollup({
  entry: 'main.js',
  plugins: [ buble() ]
}).then(...)
```

## Options

- `include`: a [micromatch](https://github.com/micromatch/micromatch) pattern, or array of patterns, specifying files to include
- `exclude`: a [micromatch](https://github.com/micromatch/micromatch) pattern, or array of patterns, specifying files to exclude
- `transforms`: an object of transform options, per the [Buble docs](https://buble.surge.sh/guide/)

## License

MIT
