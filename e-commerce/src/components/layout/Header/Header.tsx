// libraries
import type { FC } from 'react';
// components
import { HeaderBottom } from 'components/layout/Header/Bottom';
import { HeaderMiddle } from 'components/layout/Header/Middle';
import { Container } from 'components/shared/Container';
// styles
import cls from './Header.module.scss';

export const Header: FC = () => (
  <header className={cls.header}>
    <Container>
      <HeaderMiddle />
      <HeaderBottom />
    </Container>
  </header>
);
