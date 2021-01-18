import React from 'react';
import cx from 'clsx';
import { DefaultProps } from '@mantine/types';
import classes from './Loader.styles.less';

interface LoaderProps extends DefaultProps {
  size?: number;
}

export default function Loader({ className, size = 36, style }: LoaderProps) {
  return (
    <div
      className={cx(classes.loader, className)}
      style={{
        ...style,
        width: size,
        height: size,
        borderWidth: Math.max(Math.round(size / 6), 2),
      }}
    />
  );
}

Loader.displayName = '@mantine/core/Loader';