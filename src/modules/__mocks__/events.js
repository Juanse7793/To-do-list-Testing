const click = () => 'the <li> is removed';

const keypress = () => {
  const value = 'hi';
  if (value !== '') {
    return 'the <li> is added';
  }
  return 'the <li> is not added';
};

const cleanClick = () => 'the completed tasks have been removed';

const change = () => 'the checkbox bool value has changed';

const input = () => 'the description of the task is editing';

module.exports = {
  keypress, click, cleanClick, change, input,
};