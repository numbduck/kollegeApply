"use client"

import { Tabs } from '@mantine/core';
import { useState } from 'react';

function NewsSection() {
    const [activeTab, setActiveTab] = useState('first');

    return (
      <Tabs value={activeTab} onChange={setActiveTab}>
        <Tabs.List>
          <Tabs.Tab value="first">First tab</Tabs.Tab>
          <Tabs.Tab value="second">Second tab</Tabs.Tab>
        </Tabs.List>
  
        <Tabs.Panel value="first">First panel</Tabs.Panel>
        <Tabs.Panel value="second">Second panel</Tabs.Panel>
      </Tabs>
    );
}

export default NewsSection
