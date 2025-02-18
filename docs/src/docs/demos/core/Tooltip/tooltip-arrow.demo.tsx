import React from 'react';
import { Tooltip, Button, Group } from '@mantine/core';
import CodeDemo from '../../../../components/CodeDemo/CodeDemo';

const code = `import React from 'react';
import { Tooltip, Button, Group } from '@mantine/core';

function Demo() {
  return (
    <Group position="center">
      <Tooltip data-mantine-composable label="Default arrow" withArrow opened>
        <Button variant="outline">default arrow</Button>
      </Tooltip>
      <Tooltip data-mantine-composable label="Arrow with size" withArrow arrowSize={5} opened>
        <Button variant="outline">default arrow</Button>
      </Tooltip>
    </Group>
  );
}`;

export function TooltipArrowDemo() {
  return (
    <CodeDemo code={code} language="tsx">
      <Group position="center" style={{ paddingTop: 30 }}>
        <Tooltip data-mantine-composable label="Default arrow" withArrow opened>
          <Button variant="outline">default arrow</Button>
        </Tooltip>
        <Tooltip data-mantine-composable label="Arrow with size" withArrow arrowSize={5} opened>
          <Button variant="outline">default arrow</Button>
        </Tooltip>
      </Group>
    </CodeDemo>
  );
}
