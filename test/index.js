import { strict as assert } from 'assert'
import { helloWorld } from '../index.js'
import { test } from 'mocha'

test('helloWorld greets the world', function () {
  const got = helloWorld()
  const want = 'Hello, World!'

  assert.deepEqual(got, want)
})
