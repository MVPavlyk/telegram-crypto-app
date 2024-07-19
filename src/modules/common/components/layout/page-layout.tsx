import React from 'react';
import { Menu } from '../menu/menu';

export const PageLayout = ({
  children,
  showNavigation = true,
}: {
  children: React.ReactNode;
  showNavigation?: boolean;
}) => {
  return (
    <section className='w-full max-h-[100vh] h-screen page-layout overflow-hidden'>
      {children}
      {showNavigation && <Menu />}
    </section>
  );
};
