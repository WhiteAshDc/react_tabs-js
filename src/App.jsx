import React, { useState } from 'react';

import { Tabs } from './components/Tabs';

import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';

export const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

export const App = () => {
  const [selectebTadId, setSelectedTadId] = useState(tabs);
  const [state, setState] = useState(tabs[0]);

  return (
    <div className="section">
      <h1 className="title">
        {selectebTadId.map(tab => (
          `${state === tab.id ? `Selected tab is ${tab.title}` : ''}`
        ))}
      </h1>

      <Tabs
        tabs={selectebTadId}
        setSelectedTadId={setSelectedTadId}
        state={state}
        setStat={setState}
        onTabSelected={(id) => {
          setState(id);
        }}
      />
    </div>
  );
};
