/* eslint-disable no-console */
/* eslint-disable no-restricted-syntax */
/* eslint-disable no-undef */
const obj = {
  name: 'мечник', health: 10, level: 2, attack: 80, defence: 40,
};

export default function sortObject(object, arr = []) {
  const characteristics = [];
  const sortCharacteristics = [];
  for (const key in object) {
    if (arr.includes(key)) {
      characteristics.push({
        key,
        value: obj[key],
      });
      characteristics.sort();
    } else {
      sortCharacteristics.push({
        key,
        value: obj[key],
      });
    }
  }
  function sortArray(x, y) {
    if (x.key < y.key) {
      return -1;
    }
    return 1;
  }
  sortCharacteristics.sort(sortArray);
  const result = [...characteristics, ...sortCharacteristics];
  return result;
}

const array = sortObject(obj, ['name', 'level']);
console.log(array);
