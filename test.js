import randomFloat from './index.js';
import test from 'ava';

test('randomFloat return type to be number', t => {
	t.is(typeof randomFloat(), 'number');
});

test('randomFloat with number min 0 return type to be number', t => {
	t.is(typeof randomFloat(0), 'number');
});

test('randomFloat with number min 0 and max 10 return type to be number', t => {
	t.is(typeof randomFloat(0, 10), 'number');
});

test('randomFloat with number min 0 and max 10 less than 11', t => {
	t.true(randomFloat(0, 10) < 11);
});

test('randomFloat with string to thow error on string', t => {
	const error = t.throws(() => {
		randomFloat('string', 'string', 'string')
	}, {instanceOf: TypeError});

	t.is(error.message, 'Expected all arguments to be numbers.');
});

test('randomFloat with min and max to thow error on min > max', t => {
	const error = t.throws(() => {
		randomFloat(10, 0)
	}, {instanceOf: TypeError});
  
	t.is(error.message, 'Min cannot be greater than Max.');
});