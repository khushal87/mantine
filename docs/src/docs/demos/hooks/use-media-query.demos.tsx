import React from 'react';
import { Group, Badge } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import CodeDemo from '../../../components/CodeDemo/CodeDemo';

const code = `import React from 'react';
import { Badge } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';

export function Demo() {
  const matches = useMediaQuery('(min-width: 900px)');

  return (
    <Badge color={matches ? 'teal' : 'red'} variant="filled">
      Breakpoint {matches ? 'matches' : 'does not match'}
    </Badge>
  );
}`;

export function UseBreakpointDemo() {
  const matches = useMediaQuery('(min-width: 900px)');

  return (
    <CodeDemo code={code} language="tsx">
      <Group position="center">
        <Badge color={matches ? 'teal' : 'red'} variant="filled">
          Breakpoint {matches ? 'matches' : 'does not match'}
        </Badge>
      </Group>
    </CodeDemo>
  );
}
