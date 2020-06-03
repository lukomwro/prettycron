declare module 'prettycron' {
  import * as moment from 'moment'

  export function toString(cron: string): string;
  export function getNext(cron: string): string;
  export function getNextDates(cron: string, numDates: number): moment.Moment;
}