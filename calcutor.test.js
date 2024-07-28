const { appendValue, clearResult, calculateResult } = require('../calculator');

test('appendValue should append a value to the current display', () => {
  expect(appendValue('', '1')).toBe('1');
  expect(appendValue('1', '2')).toBe('12');
  expect(appendValue('12', '3')).toBe('123');
});

test('clearResult should clear the current display', () => {
  expect(clearResult()).toBe('');
});

test('calculateResult should correctly evaluate the expression', () => {
  expect(calculateResult('1+1')).toBe('2');
  expect(calculateResult('2*3')).toBe('6');
  expect(calculateResult('4/2')).toBe('2');
  expect(calculateResult('5-2')).toBe('3');
});

test('calculateResult should return "Error" for invalid expressions', () => {
  expect(calculateResult('1/0')).toBe('Error');
  expect(calculateResult('abc')).toBe('Error');
});