import React, { useState } from 'react';
import { ColorInput } from '@mantine/demos';
import { useMantineTheme } from '@mantine/core';
import CodeDemo from '../../../components/CodeDemo/CodeDemo';

// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax
import code from '!!raw-loader!../../../../../src/mantine-demos/src/ColorInput/ColorInput';

export function ColorInputDemo() {
  const theme = useMantineTheme();
  const [value, setValue] = useState('');
  const colors = Object.keys(theme.colors).map((color) => theme.colors[color][7]);

  return (
    <CodeDemo
      code={code}
      language="tsx"
      toggle
      githubLink="https://github.com/mantinedev/mantine/blob/master/src/mantine-demos/src/ColorInput/ColorInput.tsx"
    >
      <div style={{ maxWidth: 359, margin: 'auto' }}>
        <ColorInput
          data={colors}
          label="Pick color"
          placeholder="Pick color"
          value={value}
          onChange={setValue}
          variant={theme.colorScheme === 'dark' ? 'filled' : 'default'}
        />
      </div>
    </CodeDemo>
  );
}
