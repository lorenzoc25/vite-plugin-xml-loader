import XMLLoader from '../index';

test('correct xml to json', async () => {
  const result = await XMLLoader().transform('', __dirname + '/test.xml');
  const expectedObj = {
    "code": "export default {\"test\":\"\"}",
  };
  expect(result).toStrictEqual(expectedObj);
});

test('Non .xml file', async () => {
  const result = await XMLLoader().transform('', __dirname + '/test.txt');
  expect(result).toStrictEqual({});
});