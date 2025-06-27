// libraries
import type { FC } from 'react';
import { Outlet } from 'react-router-dom';
// components
import { Footer } from 'components/layout/Footer';
import { Header } from 'components/layout/Header';
import { TopBar } from 'components/layout/TopBar';
// styles
import cls from './Layout.module.scss';

export const Layout: FC = () => (
  <div className={cls.wrapper}>
    <TopBar />
    <Header />
    <main className={cls.main}>
      <Outlet />
    </main>
    <Footer />
  </div>
);
