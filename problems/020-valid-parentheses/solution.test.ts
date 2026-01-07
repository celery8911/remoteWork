import assert from 'node:assert/strict';
import { isValid } from './solution';

function runTest(name: string, input: string, expected: boolean): void {
  const result = isValid(input);
  assert.strictEqual(result, expected, `${name} failed`);
  console.log(`✓ ${name}`);
}

runTest('valid mixed pairs', '()[]{}', true);
runTest('nested valid structure', '{[()]}', true);
runTest('mismatched order invalid', '([)]', false);
runTest('extra closing invalid', '())', false);
runTest('empty string is valid', '', true);
