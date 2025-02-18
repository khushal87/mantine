import React, { useState } from 'react';
import { Tabs, Tab } from '@mantine/core';
import CodeDemo from '../../../../components/CodeDemo/CodeDemo';

const code = `import React from 'react';
import { Tabs, Tab } from '@mantine/core';

function Demo() {
  const [activeTab, setActiveTab] = useState(1);
  
  return (
    <Tabs active={activeTab} onTabChange={setActiveTab}>
      <Tab label="First">First tab content</Tab>
      <Tab label="Second">Second tab content</Tab>
      <Tab label="Third">Third tab content</Tab>
    </Tabs>
  );
}`;

export function TabsControlledDemo() {
  const [activeTab, setActiveTab] = useState(1);

  return (
    <CodeDemo code={code} language="tsx">
      <Tabs active={activeTab} onTabChange={setActiveTab}>
        <Tab label="First">First tab content</Tab>
        <Tab label="Second">Second tab content</Tab>
        <Tab label="Third">Third tab content</Tab>
      </Tabs>
    </CodeDemo>
  );
}
