import { ReactNode, useLayoutEffect } from 'react';
import { useAppStore } from '../store';
import { useNavigate } from 'react-router-dom';
import { Routes } from '../constants';

interface Props {
  component: ReactNode;
}

export const Protected = ({ component }: Props) => {
  const { user } = useAppStore((state) => state);

  const navigate = useNavigate();

  useLayoutEffect(() => {
    if (!user) {
      navigate(Routes.ROOT);
    }
  }, [user]);

  return component;
};
