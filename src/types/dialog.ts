interface DialogProps {
  children?: any;
  title?: string;
  isOpen: boolean;
  isLoading: boolean;
  description?: string;

  toggleOpen: () => void;
  onSubmit: (id?: string) => void;
}
