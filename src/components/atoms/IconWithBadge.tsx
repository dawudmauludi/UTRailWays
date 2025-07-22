// IconWithBadge.tsx
import React from "react";

interface IconWithBadgeProps {
  icon: React.ReactNode;
  count: number;
}

const IconWithBadge: React.FC<IconWithBadgeProps> = ({ icon, count }) => {
  return (
    <div className="relative inline-block">
      {icon}
      {count > 0 && (
        <span className="absolute -top-1 -right-2 bg-red-500 text-white text-xs rounded-full px-1.5 py-0.5">
          {count}
        </span>
      )}
    </div>
  );
};

export default IconWithBadge;
