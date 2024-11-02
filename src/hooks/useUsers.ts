import React from 'react';
import { UserContext } from '@/modules/app/UsersProvider';

export const useUsers = () => React.useContext(UserContext);
