import React from 'react';
import { Loader2 } from 'lucide-react';

let loader: React.JSX.Element = <Loader2 className="mr-2 h-4 w-4 animate-spin text-lg" />;

const BaseLoader = () => loader;

export default BaseLoader;
