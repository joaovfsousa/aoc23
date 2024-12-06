import { createReadStream } from 'node:fs';
import { resolve } from 'node:path';
import { createInterface } from 'node:readline';

export function readInput(base: string) {
  const fileStream = createReadStream(resolve(base, 'input'));

  return createInterface({
    input: fileStream,
    crlfDelay: Infinity,
  });
}
