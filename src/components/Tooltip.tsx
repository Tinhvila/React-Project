// Tooltip.tsx
import React, { ReactNode, useState } from 'react';

interface TooltipProps {
  children: ReactNode;
  content: string;
}

export default function Tooltip({ children, content }: TooltipProps) {
  const [visible, setVisible] = useState(false);

  const showTooltip = () => setVisible(true);
  const hideTooltip = () => setVisible(false);

  return (
    <div className="relative z-100 inline-block">
      <div onMouseEnter={showTooltip} onMouseLeave={hideTooltip}>
        {children}
      </div>

      {visible && (
        <div className="absolute z-100 p-2 bg-gray-800 text-white text-sm rounded-md shadow-lg transform -translate-y-[150%] ">
          {content}
        </div>
      )}
    </div>
  );
}
