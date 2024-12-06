import { readInput } from '@src/core/input-reader';

const zero = '0'.charCodeAt(0);
const nine = '9'.charCodeAt(0);

const wordsToNums: Record<string, string> = {
  one: '1',
  two: '2',
  three: '3',
  four: '4',
  five: '5',
  six: '6',
  seven: '7',
  eight: '8',
  nine: '9',
  zero: '0',
};

async function solve1(): Promise<number> {
  let total = 0;

  for await (const line of readInput(__dirname)) {
    let first: string | undefined;
    let last: string | undefined;
    for (let i = 0; i < line.length; i++) {
      const charCode = line.charCodeAt(i);
      if (charCode >= zero && charCode <= nine) {
        if (!first) {
          first = line[i];
        }

        last = line[i];
      }
    }

    total += parseInt(`${first}${last}`);
  }

  return total;
}

async function solve2(): Promise<number> {
  let total = 0;
  const regex = /(?=(\d|one|one|two|three|four|five|six|seven|eight|nine))/g;

  for await (const line of readInput(__dirname)) {
    const matches = Array.from(line.matchAll(regex)).map(([, n]) => n);

    let first = matches.at(0)!;
    let last = matches.at(-1)!;

    if (first.length > 1) {
      first = wordsToNums[first];
    }

    if (last.length > 1) {
      last = wordsToNums[last];
    }

    total += parseInt(`${first}${last}`);
  }

  return total;
}

export async function run() {
  const res1 = await solve1();
  console.log(`Result 1: ${res1}`);

  const res2 = await solve2();
  console.log(`Result 2: ${res2}`);
}
