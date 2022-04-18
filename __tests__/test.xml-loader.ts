import XMLLoader from '../index';

test('Correct xml to json transformation', async () => {
  const result = await XMLLoader().transform('', __dirname + '/test.xml');
  expect(result.code).toStrictEqual("export default {\"test\":\"\"}");
});

test('Non .xml file', async () => {
  const result = await XMLLoader().transform('', __dirname + '/test.txt');
  expect(result).toStrictEqual({});
});