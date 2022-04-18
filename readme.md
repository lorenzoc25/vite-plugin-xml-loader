# vite-plugin-xml-loader
[![forthebadge](https://forthebadge.com/images/badges/made-with-typescript.svg)](https://forthebadge.com)
[![forthebadge](https://forthebadge.com/images/badges/built-with-love.svg)](https://forthebadge.com)
A [Vite](https://vitejs.dev/) plugin that would will transform all xml files to json buffer 

## Install
```bash
npm i vite-plugin-xml-loader --save
```
## Usage
In your `vite.config.js` or `vite.config.ts` file, do
```ts
import { defineConfig } from 'vite'
...
import XMLLoader from 'vite-plugin-xml-loader' 

...
export default defineConfig({
  plugins: [
    ...
    XMLLoader(),
  ]
})
```
and the plugin should be ready to use.

## License
[MIT License](https://opensource.org/licenses/MIT)