const test = require('tape');
const openhab = require('./index.js');

test('nhc connection', tape => {
  tape.plan(1);
  openhab();
  tape.ok(1);
})
