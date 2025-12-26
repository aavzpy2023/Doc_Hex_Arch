import React from 'react';
import { FolderTree } from 'lucide-react';

interface FileNodeProps {
  name: string;
  icon?: React.ReactNode;
  children?: React.ReactNode;
}

export const FileNode: React.FC<FileNodeProps> = ({ name, icon, children }) => (
  <div className="relative ml-4 py-1">
    <div className="flex items-center gap-2 group">
      <div className="text-slate-400">
        {icon || <FolderTree size={16} />}
      </div>
      <span className="text-slate-700 font-mono text-sm group-hover:text-blue-600 cursor-default transition-colors">{name}</span>
    </div>
    {children && <div className="border-l border-slate-200 ml-2 mt-1">{children}</div>}
  </div>
);