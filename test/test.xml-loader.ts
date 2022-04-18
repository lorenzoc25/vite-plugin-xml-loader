import XMLLoader from '../index';

const test = async () => {
  const result = await XMLLoader().transform('', './t.xml');
  console.log(result);
};

test();
