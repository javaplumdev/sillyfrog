import { getUnixTime, getMilliseconds, format, formatDistanceToNow } from 'date-fns';

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

export const getTimestamp = () => {
  const now = new Date();
  const seconds = Math.floor(now.getTime() / 1000);
  const nanoseconds = now.getMilliseconds() * 1000000;

  const timestamp = { seconds, nanoseconds };

  return timestamp;
};
