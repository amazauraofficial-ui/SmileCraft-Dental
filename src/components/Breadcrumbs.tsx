import React from 'react';
import { PageRoute } from '../types';
import { ChevronRight } from 'lucide-react';

interface BreadcrumbsProps {
  items: { label: string; route?: PageRoute }[];
  onNavigate: (route: PageRoute) => void;
}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items, onNavigate }) => {
  return (
    <nav aria-label="Breadcrumb" className="py-3 text-xs text-slate-500">
      <ol className="flex items-center flex-wrap gap-1.5">
        <li>
          <button
            onClick={() => onNavigate('home')}
            className="hover:text-slate-900 transition-colors cursor-pointer"
          >
            Home
          </button>
        </li>
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li key={item.label} className="flex items-center gap-1.5">
              <ChevronRight className="w-3 h-3 text-slate-400 shrink-0" aria-hidden="true" />
              {isLast || !item.route ? (
                <span className="text-slate-900 font-medium truncate max-w-xs" aria-current="page">
                  {item.label}
                </span>
              ) : (
                <button
                  onClick={() => item.route && onNavigate(item.route)}
                  className="hover:text-slate-900 transition-colors cursor-pointer"
                >
                  {item.label}
                </button>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};
