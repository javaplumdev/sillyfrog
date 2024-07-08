import React from 'react';

import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { Menu } from 'lucide-react';

import Weekly from '@/modules/home/weekly/Weekly';
import Categories from '@/modules/home/categories/Categories';

const BaseSheet = () => {
  return (
    <Sheet>
      <SheetTrigger>
        <Menu className="block md:hidden" />
      </SheetTrigger>
      <SheetContent side="left">
        <SheetHeader>
          <SheetTitle>Sillyfrog</SheetTitle>

          {/* sheet content */}
          <div>
            <Weekly />
            <Categories />
          </div>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};

export default BaseSheet;
