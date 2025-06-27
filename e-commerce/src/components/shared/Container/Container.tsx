// libraries
import type { FC, ReactNode } from 'react';
// styles
import cls from './Container.module.scss';

type ContainerProps = {
  children: ReactNode;
};

export const Container: FC<ContainerProps> = ({ children }) => (
  <div className={cls.container}>{children}</div>
);
