import { run as day01 } from '@src/days/day01';

const days = [day01];

const lastDay = days.at(-1);

if (lastDay) {
  lastDay().catch((err) => {
    console.log('Failed to run solution for last day');
    console.error(err);
  });
}
