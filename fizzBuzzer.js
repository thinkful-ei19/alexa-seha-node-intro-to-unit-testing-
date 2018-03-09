'use strict';

function buzzer(num) {
  if (typeof num !== 'number') {
    throw Error('`num` must be a number');
  }
  if (num % 15 === 0) {
    return 'fizz-buzz';
  }
  if (num % 5 === 0) {
    return 'buzz';
  }
  if (num % 3 === 0) {
    return 'fizz';
  }
  else {
    return num;
  }
}

module.exports = buzzer;