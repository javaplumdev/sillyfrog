import { UseFormReturn } from 'react-hook-form';
import {
  Dialog,
  DialogTitle,
  DialogHeader,
  DialogContent,
  DialogDescription,
} from '@/components/ui/dialog';
import { Textarea } from '@/components/ui/textarea';
import BaseButton from '@/components/base/buttons/BaseButton';
import ComboboxDropdownMenu from '@/components/base/combobox/ComboboxDropdownMenu';
import { Form, FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form';

export function FeedFormDialog({
  form,
  isOpen,
  onSubmit,
  isLoading,
  toggleOpen,
}: {
  isOpen: boolean;
  isLoading: boolean;
  onSubmit: () => void;
  toggleOpen: () => void;
  form: UseFormReturn<{ feed_content: string; label: string }, {}, undefined>;
}) {
  const { handleSubmit, control } = form || {};

  return (
    <Dialog open={isOpen} onOpenChange={toggleOpen}>
      <DialogContent className="max-w-[425px] sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle>Post feed</DialogTitle>
          <DialogDescription>
            Share what you feel here. Click post when you&apos;re done.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <Form {...form}>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <FormField
                control={control}
                name="feed_content"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Textarea
                        id="feed_content"
                        placeholder="Type your message here."
                        rows={2}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <ComboboxDropdownMenu {...form} />

              <BaseButton
                type="submit"
                className="w-full"
                isLoading={isLoading}
                disabled={isLoading}
              >
                Post
              </BaseButton>
            </form>
          </Form>
        </div>
      </DialogContent>
    </Dialog>
  );
}
