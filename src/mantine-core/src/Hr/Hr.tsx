import React from 'react';
import cx from 'clsx';
import { useMantineTheme, DefaultProps, MantineNumberSize } from '@mantine/theme';
import useStyles, { sizes } from './Hr.styles';
import { Text } from '../Text/Text';

export const HR_SIZES = sizes;

interface HrProps extends DefaultProps, React.ComponentPropsWithoutRef<'hr'> {
  /** Hr borderStyle */
  variant?: 'solid' | 'dashed' | 'dotted';

  /** Hr height */
  size?: MantineNumberSize;

  /** Applies SubHeader Text to the Hr */
  subHeader?: string;

  /** Applies styles to the SubHeader Text */
  subHeaderStyle?: React.CSSProperties;

  /** Hr color */
  color?: string;

  /** Hr inset */
  inset?: boolean;

  /** Hr insetType. It applies inset to `left, right, middle`*/
  insetType?: 'left' | 'right' | 'middle';

  /** Applies orientation to the Hr */
  orientation?: 'horizontal' | 'vertical';
}

export function Hr({
  className,
  color = 'gray',
  inset = false,
  insetType = 'left',
  orientation = 'horizontal',
  size = 'xs',
  subHeader,
  subHeaderStyle,
  themeOverride,
  variant = 'solid',
  ...others
}: HrProps) {
  const classes = useStyles({
    color,
    inset,
    insetType,
    size,
    theme: useMantineTheme(themeOverride),
    variant,
    orientation,
  });

  if (orientation === 'vertical') {
    return <div data-mantine-hr className={cx(classes.hrVertical, className)} {...others} />;
  }
  return (
    <div data-mantine-hr className={cx(classes.hr, className)} {...others}>
      <Text className={cx(classes.subHeader)} style={{ ...subHeaderStyle }}>
        {subHeader}
      </Text>
    </div>
  );
}

Hr.displayName = '@mantine/core/Hr';
