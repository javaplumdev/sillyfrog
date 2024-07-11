'use client';
import React from 'react';
import Link from 'next/link';
import { LogOut } from 'lucide-react';
import useAuth from '@/hooks/useAuth';

import {
  DropdownMenu,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuShortcut,
  DropdownMenuSeparator,
} from '@/components/ui/dropdown-menu';
import BaseSheet from './BaseSheet';
import BaseButton from '../buttons/BaseButton';
import BaseAvatar from '../avatars/BaseAvatar';
import BaseSkeleton from '../skeletons/BaseSkeleton';
import ModeToggle from '../theme/ModeToggle';
import BaseConfirmationDialog from '../dialogs/BaseConfirmationDialog';

const useLogout = () => {
  const [isOpen, setIsOpen] = React.useState<boolean>(false);

  const toggleOpen = () => setIsOpen(!isOpen);

  return { isOpen, toggleOpen };
};

const BaseNavbar = () => {
  const { isOpen, toggleOpen } = useLogout();
  const { isAuth, userData, isLoading, logOut } = useAuth();

  return (
    <div className="container flex justify-between items-center p-0 py-3 px-2">
      <div className="flex items-center">
        <BaseSheet />

        <Link href="/">
          <h2 className="font-bold text-lg ml-2">Sillyfrog</h2>
        </Link>
      </div>

      <div className="w-full md:w-auto flex items-center justify-end">
        {/* Show skeleton when isLoading is true */}
        {isLoading && <BaseSkeleton />}
        {!isLoading && <ModeToggle className="mr-2" />}
        {/* Show avatar when authenticated and isLoading false */}
        {!!isAuth && !isLoading && (
          <DropdownMenu>
            <DropdownMenuTrigger>
              <BaseAvatar data={userData} />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Profile</DropdownMenuItem>

              <DropdownMenuItem>Billing</DropdownMenuItem>

              <DropdownMenuItem onClick={() => toggleOpen()}>
                <LogOut className="mr-2 h-4 w-4" />
                <span>Log out</span>
                <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        )}
        {/* Show buttons when NOT authenticated */}
        {!isAuth && !isLoading && (
          <>
            <BaseButton to="/signin" variant="ghost" className="mr-2">
              Log in
            </BaseButton>
            <BaseButton to="/signup">Join now</BaseButton>
          </>
        )}

        <BaseConfirmationDialog
          isOpen={isOpen}
          onClick={logOut}
          isLoading={isLoading}
          toggleOpen={toggleOpen}
          title="Log out conrfimation"
          message="Are you sure you want to log out?"
        />
      </div>
    </div>
  );
};

export default BaseNavbar;
