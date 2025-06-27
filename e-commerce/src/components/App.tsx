// libraries
import type { FC } from 'react';
import { Route, Routes } from 'react-router-dom';
// components
import { Home } from 'components/Home';
import { Layout } from 'components/layout';

export const App: FC = () => (
  <Routes>
    <Route element={<Layout />} path="/">
      <Route index element={<Home />} />
    </Route>
  </Routes>
);
