import {
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';

export function FeedFormDialog() {
  return (
    <DialogContent className="sm:max-w-[425px]">
      <DialogHeader>
        <DialogTitle>Post feed</DialogTitle>
        <DialogDescription>
          Share what you feel here. Click post when you're done.
        </DialogDescription>
      </DialogHeader>
      <div className="grid gap-4 py-4">
        <div>
          <Textarea placeholder="Type your message here." rows={2} />
        </div>
      </div>
      <DialogFooter>
        <Button type="submit">Post</Button>
      </DialogFooter>
    </DialogContent>
  );
}
