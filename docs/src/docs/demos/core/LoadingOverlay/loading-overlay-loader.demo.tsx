import React, { useState } from 'react';
import { LoadingOverlay, Button, Group, useMantineTheme, DEFAULT_THEME } from '@mantine/core';
import { AuthenticationForm } from '@mantine/demos';
import CodeDemo from '../../../../components/CodeDemo/CodeDemo';

const code = '<LoadingOverlay loader={<YourLoader />} />';

const customLoader = (
  <svg
    width="54"
    height="54"
    viewBox="0 0 38 38"
    xmlns="http://www.w3.org/2000/svg"
    stroke={DEFAULT_THEME.colors.blue[6]}
  >
    <g fill="none" fillRule="evenodd">
      <g transform="translate(1 1)" strokeWidth="2">
        <circle strokeOpacity=".5" cx="18" cy="18" r="18" />
        <path d="M36 18c0-9.94-8.06-18-18-18">
          <animateTransform
            attributeName="transform"
            type="rotate"
            from="0 18 18"
            to="360 18 18"
            dur="1s"
            repeatCount="indefinite"
          />
        </path>
      </g>
    </g>
  </svg>
);

export function LoadingOverlayLoaderDemo() {
  const [visible, setVisible] = useState(true);
  const theme = useMantineTheme();

  return (
    <CodeDemo
      code={code}
      language="tsx"
      demoBackground={theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0]}
    >
      <div style={{ maxWidth: 400, margin: 'auto', overflow: 'visible' }}>
        <div
          style={{
            borderRadius: 4,
            position: 'relative',
            margin: 'auto',
          }}
        >
          <LoadingOverlay
            visible={visible}
            zIndex={1000}
            style={{ borderRadius: 4 }}
            loader={customLoader}
          />
          <AuthenticationForm noSubmit noShadow={theme.colorScheme === 'dark'} />
        </div>
      </div>

      <Group position="center" style={{ marginTop: 20 }}>
        <Button onClick={() => setVisible((v) => !v)}>Toggle overlay</Button>
      </Group>
    </CodeDemo>
  );
}
