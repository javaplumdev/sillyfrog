import { format, formatDistanceToNow } from 'date-fns';

export const dateLabel = (seconds: number) => {
  const unixTimestamp = seconds * 1000;
  const date = new Date(unixTimestamp);
  // Convert Unix timestamp to Date object
  const formattedDate = format(date, 'MMMM dd, yyyy');
  return formattedDate || 'N/A';
};

export const timeDifference = (seconds: number) => {
  const unixTimestamp = seconds * 1000;
  const date = new Date(unixTimestamp);
  return formatDistanceToNow(date, { addSuffix: true }) || 'N/A';
};
