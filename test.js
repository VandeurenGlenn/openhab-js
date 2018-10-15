const test = require('tape');

test('nhc connection', tape => {
  tape.plan(1);

  openhab.get().then(value => {
    console.log(value);

    tape.ok(1)
  })
})
