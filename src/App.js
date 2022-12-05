import React, { useState } from 'react';
import DisplayEntries from './Components/DisplayEntries/DisplayEntries';
import AddEntryForm from './Components/AddEntry/AddEntryForm';
import EntriesChartTracker from './Components/EntriesChartTracker/EntriesChartTracker';

function App() {

  const [entries, setEntries] = useState([{weight: 350, date: '11-23-2022'},{weight: 335, date: '12-17-2022'}])

  function addNewEntry(entry) {

    let tempEntries = [...entries, entry];

    setEntries(tempEntries);

  }

  return (
    <div>
      <DisplayEntries parentEntries={entries} />
      <AddEntryForm addNewEntryProperty={addNewEntry}/>
      <EntriesChartTracker parentEntries={entries} />
      
    </div>
  );
}

export default App;
