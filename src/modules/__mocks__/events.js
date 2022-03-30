const click = () => 'the object is removed';

const keypress = () => {
  const value = 'hi';
  if (value !== '') {
    return 'the object is added';
  }
  return 'the object is not added';
};

module.exports = { keypress, click };