import * as React from "react";
import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

interface Tab {
  type: 'tab';
  title: string;
  icon: LucideIcon;
  content?: React.ReactNode;
}

interface Separator {
  type: 'separator';
}

type TabItem = Tab | Separator;

function isTab(item: TabItem): item is Tab {
  return item.type === 'tab';
}

interface ExpandableTabsProps {
  tabs: readonly TabItem[];
  expanded: boolean;
  onTabClick?: (tab: Tab) => void;
  activeTab?: string;
}

export function ExpandableTabs({
  tabs,
  expanded,
  onTabClick,
  activeTab,
}: ExpandableTabsProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-1 overflow-hidden transition-all duration-200",
        expanded ? "w-56" : "w-16"
      )}
    >
      {tabs.map((item, index) => {
        if (!isTab(item)) {
          return <div key={index} className="h-px bg-border mx-3 my-2" />;
        }

        const Icon = item.icon;
        return (
          <button
            key={item.title}
            onClick={() => onTabClick?.(item)}
            className={cn(
              "flex items-center gap-4 px-4 py-2 rounded-lg transition-colors",
              "hover:bg-muted/80",
              activeTab === item.title && "bg-muted",
              !expanded && "justify-center"
            )}
          >
            <Icon className="h-5 w-5" />
            {expanded && (
              <span className="text-sm font-medium">{item.title}</span>
            )}
          </button>
        );
      })}
    </div>
  );
}