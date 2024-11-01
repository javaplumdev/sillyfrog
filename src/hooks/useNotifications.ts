'use client';

import React from 'react';
import { NotificationContext } from '@/modules/app/NotificationsProvider';

export const useNotification = () => React.useContext(NotificationContext);
