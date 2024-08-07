import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Textarea } from '@/components/ui/textarea';
import { Form, FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form';
import BaseButton from '@/components/base/buttons/BaseButton';

interface FeedFormDialogProps {
  isOpen: boolean;
  toggleOpen: () => void;
}

export function FeedFormDialog({
  form,
  isOpen,
  onSubmit,
  isLoading,
  toggleOpen,
}: FeedFormDialogProps & any) {
  const { handleSubmit, control } = form || {};

  return (
    <Dialog open={isOpen} onOpenChange={toggleOpen}>
      <DialogContent className="sm:max-w-[425px]">
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
