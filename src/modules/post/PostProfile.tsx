import React from 'react';
import useAuth from '@/hooks/useAuth';
import BaseAvatar from '@/components/base/avatars/BaseAvatar';
import BaseButton from '@/components/base/buttons/BaseButton';

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
              className="h-auto sm:h-[50px] w-auto sm:w-[50px]"
            />

            <h3 className="text-lg bottom-0 flex-auto mt-4">{name}</h3>
          </React.Fragment>
        )}

        {!!isLoading && <p>Loading...</p>}
      </div>

      <BaseButton onClick={onActionWithAuth(() => console.log('TODO: Add follow feat'))}>
        Follow
      </BaseButton>

      <div className="text-slate-600 flex flex-col space-y-2">
        <p>TODO: insert bio or a short introduction</p>

        <p>Posts: 0</p>
      </div>
    </div>
  );
};

export default PostProfile;
