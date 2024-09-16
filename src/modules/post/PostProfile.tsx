import React from 'react';
import useAuth from '@/hooks/useAuth';
import BaseAvatar from '@/components/base/avatars/BaseAvatar';
import BaseButton from '@/components/base/buttons/BaseButton';
import { Skeleton } from '@/components/ui/skeleton';

type DataProps = {
  photo: string;
  name: string;
};

type PostProfileProps = {
  data: DataProps;
  isLoading: boolean;
};

const PostProfile: React.FC<PostProfileProps> = ({ data, isLoading }) => {
  const { onActionWithAuth } = useAuth();

  const { photo, name } = data || ({} as DataProps);

  return (
    <div className="rounded-sm p-3 flex flex-col space-y-3 w-full">
      <div className="flex items-center space-x-3 rounded-lg">
        {!isLoading && (
          <React.Fragment>
            <BaseAvatar
              photo={photo}
              name={name}
              className="h-auto sm:h-[45px] w-auto sm:w-[45px]"
            />

            <h6 className="text-md bottom-0 flex-auto mt-4">{name}</h6>
          </React.Fragment>
        )}

        {!!isLoading && (
          <div className="flex items-center space-x-4">
            <Skeleton className="h-12 w-12 rounded-full" />
            <div className="space-y-2">
              <Skeleton className="h-4 w-[250px]" />
              <Skeleton className="h-4 w-[200px]" />
            </div>
          </div>
        )}
      </div>

      <BaseButton
        variant="outline"
        onClick={onActionWithAuth(() => console.log('TODO: Add follow feat'))}
      >
        Follow
      </BaseButton>

      <div className="flex flex-col space-y-2 text-sm">
        <span>TODO: insert bio or a short introduction</span>

        <span>TODO: Posts: 0</span>
      </div>
    </div>
  );
};

export default PostProfile;
