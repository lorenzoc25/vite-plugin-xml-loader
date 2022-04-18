# vite-plugin-xml-loader

vite-plugin-xml-loader will transform all xml files to json buffer

# Install

```bash
npm install -D vite-plugin-xml-loader
```

# Usage

```js
import vitePluginRaw from 'vite-plugin-raw';
const path = require('path');

module.exports = {
  plugins: [
    vitePluginRaw({
      match: /\.svg$/,
      exclude: [new RegExp(path.resolve(__dirname, './src/assets'))]
    })
  ]
}
```
or
```js
import richtextRedo from '../assets/richtext_redo.svg?raw';
```