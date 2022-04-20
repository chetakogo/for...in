/* eslint-disable no-undef */
import sortObject from '../app';

test('sorting', () => {
  const obj = {
    name: 'мечник', health: 10, level: 2, attack: 80, defence: 40,
  };
  const array = sortObject(obj, ['name', 'level']);
  const newArray = [
    { key: 'name', value: 'мечник' },
    { key: 'level', value: 2 },
    { key: 'attack', value: 80 },
    { key: 'defence', value: 40 },
    { key: 'health', value: 10 },
  ];
  expect(array).toEqual(newArray);
});
