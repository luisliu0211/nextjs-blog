import { parseISO, format } from 'date-fns';
export default function Date({ dateString }) {
  const date = parseISO(dateString);
  return <time data-time={dateString}>{format(date, 'LLLL d, yyyy')}</time>;
}
