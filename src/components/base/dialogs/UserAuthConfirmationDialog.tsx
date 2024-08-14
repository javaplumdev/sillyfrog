import {
  Dialog,
  DialogTitle,
  DialogFooter,
  DialogHeader,
  DialogContent,
  DialogDescription,
} from '@/components/ui/dialog';
import BaseButton from '../buttons/BaseButton';

interface UserAuthConfirmationDialogProps {
  isOpen: boolean;
  toggleOpen: () => void;
}

const UserAuthConfirmationDialog: React.FC<UserAuthConfirmationDialogProps> = ({
  isOpen,
  toggleOpen,
}) => {
  return (
    <Dialog open={isOpen} onOpenChange={toggleOpen}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Sign in to continue</DialogTitle>
          <DialogDescription>
            Please log in to access your account and explore more features Sillyfrog tailored just
            for you.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter className="flex flex-row justify-end space-x-2">
          <BaseButton type="submit" variant="ghost" to="/signin">
            Sign in
          </BaseButton>
          <BaseButton type="submit" to="signup">
            Join now
          </BaseButton>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default UserAuthConfirmationDialog;
