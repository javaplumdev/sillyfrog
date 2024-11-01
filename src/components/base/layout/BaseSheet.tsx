import React from 'react';

import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { Menu } from 'lucide-react';

import Weekly from '@/modules/home/weekly/Weekly';
import Categories from '@/modules/home/categories/Categories';
import { ScrollArea } from '@/components/ui/scroll-area';
import { usePathname } from 'next/navigation';

const BaseSheet = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const toggleOpen = () => setIsOpen(!isOpen);
  const pathname = usePathname();

  React.useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <Sheet open={isOpen} onOpenChange={toggleOpen}>
      <SheetTrigger>
        <Menu className="block md:hidden" />
      </SheetTrigger>
      <SheetContent side="left" className="p-1 m-0">
        <SheetHeader>
          <SheetTitle>Sillyfrog</SheetTitle>

          {/* sheet content */}
          <div>
            <ScrollArea className="h-[800px] rounded-md w-full">
              <Weekly />
              <Categories />
            </ScrollArea>
          </div>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};

export default BaseSheet;
