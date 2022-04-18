import { readFileSync } from 'fs';
import { XMLParser } from 'fast-xml-parser';

export default function XMLLoader() {
  return {
    name: 'xml-loader',
    async transform(_ : string, id : string) {
      const xmlRegEx = /\.xml$/;
      if (xmlRegEx.test(id)) {
        const xml = readFileSync(id).toString();
        const parser = new XMLParser();
        const convertedObj = await parser.parse(xml);
        const buf = Buffer.from(JSON.stringify(convertedObj));
        return {
          code: `export default ${buf}`,
        };
      }
      return {};
    },
  };
}
