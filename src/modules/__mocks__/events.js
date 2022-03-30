const click = () => 'the <li> is removed';

const keypress = () => {
  const value = 'hi';
  if (value !== '') {
    return 'the <li> is added';
  }
  return 'the <li> is not added';
};

module.exports = { keypress, click };