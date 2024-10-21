import React from 'react';

interface Props {
  children: React.ReactNode;
}

export default function MainContent({ children }: Props): JSX.Element {
  return (
    <div className="container max-w-[1300px] flex mx-auto py-16 px-8 lgc:p-8 lgc:px-4">
      {children}
    </div>
  );
}
