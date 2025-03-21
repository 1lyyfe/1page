import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Code2, FolderGit2, User, Users } from 'lucide-react';

const Sidebar = () => {
  const location = useLocation();
  
  const isActive = (path: string) => location.pathname === path;
  
  return (
    <div className="w-20 bg-[var(--vscode-sidebar)] h-screen fixed left-0 top-0 flex flex-col items-center py-4">
      <Link 
        to="/"
        className={`p-3 rounded-lg mb-2 flex flex-col items-center ${isActive('/') ? 'bg-[var(--vscode-bg)]' : 'hover:bg-[var(--vscode-bg)]'}`}
      >
        <User size={24} className={isActive('/') ? 'text-[var(--vscode-accent)]' : ''} />
        <span className="text-xs mt-1">Profile</span>
      </Link>
      <Link 
        to="/projects"
        className={`p-3 rounded-lg mb-2 flex flex-col items-center ${isActive('/projects') ? 'bg-[var(--vscode-bg)]' : 'hover:bg-[var(--vscode-bg)]'}`}
      >
        <FolderGit2 size={24} className={isActive('/projects') ? 'text-[var(--vscode-accent)]' : ''} />
        <span className="text-xs mt-1">Projects</span>
      </Link>
      <Link 
        to="/leadership"
        className={`p-3 rounded-lg flex flex-col items-center ${isActive('/leadership') ? 'bg-[var(--vscode-bg)]' : 'hover:bg-[var(--vscode-bg)]'}`}
      >
        <Users size={24} className={isActive('/leadership') ? 'text-[var(--vscode-accent)]' : ''} />
        <span className="text-xs mt-1">Leadership</span>
      </Link>
    </div>
  );
};

export default Sidebar;