'use client';

import { useContext } from 'react';
import { AuthContext } from '@/modules/app/AuthProvider';

const useAuth = () => useContext(AuthContext);

export default useAuth;
