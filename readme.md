# vite-plugin-xml-loader
![forthebadge](https://forthebadge.com/images/badges/made-with-typescript.svg)
![forthebadge](https://forthebadge.com/images/badges/built-with-love.svg)

Automatically transform all xml files to json buffer 

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
## Testing
This plugin is also testable and there's a test script ready. To test it yourself, you can clone this repository and do 
```
npm test
```
## License
[MIT License](https://opensource.org/licenses/MIT)
