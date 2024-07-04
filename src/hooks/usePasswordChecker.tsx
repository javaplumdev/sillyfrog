'use client';
import { useContext } from 'react';
import { PasswordCheckerContext } from '@/modules/app/PasswordCheckerProvider';

export const usePasswordChecker = () => useContext(PasswordCheckerContext);
