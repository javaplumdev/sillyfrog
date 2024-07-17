import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

export default function BaseAvatar(props: any) {
  const { photo = '', name = '' } = props;

  const fallback = (name || '')
    .split(' ')
    .splice(0, 2)
    .map((item: any) => item.charAt(0))
    .join('');

  return (
    <Avatar>
      <AvatarImage src={photo} alt={fallback} />
      <AvatarFallback>{fallback}</AvatarFallback>
    </Avatar>
  );
}
