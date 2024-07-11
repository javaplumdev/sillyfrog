import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

export default function BaseAvatar(props: any) {
  const { data } = props;

  const { photoURL, displayName } = data || {};

  const fallback = (displayName || '')
    .split(' ')
    .splice(0, 2)
    .map((item: any) => item.charAt(0))
    .join('');

  return (
    <Avatar>
      <AvatarImage src={photoURL} alt={fallback} />
      <AvatarFallback>{fallback}</AvatarFallback>
    </Avatar>
  );
}
