import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { DataProps } from '@/modules/post/PostCard';

type BaseAvatarProps = {
  photo?: string;
  name?: string;
};

export default function BaseAvatar(props: BaseAvatarProps & DataProps) {
  const { photo = '', name = '' } = props;

  const fallback = (name || '')
    .split(' ')
    .splice(0, 2)
    .map((item: string) => item.charAt(0))
    .join('');

  return (
    <Avatar>
      <AvatarImage src={photo} alt={fallback} />
      <AvatarFallback>{fallback}</AvatarFallback>
    </Avatar>
  );
}
