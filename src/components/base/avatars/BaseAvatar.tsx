import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { cn } from '@/lib/utils';
import { DataProps } from '@/modules/post/PostCard';

type BaseAvatarProps = Record<string, string>;

export default function BaseAvatar(props: BaseAvatarProps & DataProps) {
  const { photo = '', name = '', className } = props;

  const fallback = (name || '')
    .split(' ')
    .splice(0, 2)
    .map((item: string) => item.charAt(0))
    .join('');

  return (
    <Avatar className={cn(className)}>
      <AvatarImage src={photo} alt={fallback} />
      <AvatarFallback>{fallback}</AvatarFallback>
    </Avatar>
  );
}
