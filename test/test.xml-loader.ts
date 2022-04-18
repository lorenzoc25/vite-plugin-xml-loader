import XMLLoader from '../index';

const main = async () => {
  const result = await XMLLoader().transform('', './t.xml');
  console.log(result);
};

main();
