import React, { useState } from 'react';
import DisplayEntries from './Components/DisplayEntries/DisplayEntries';

function App() {

const [entries, setEntries] = useState([{weight: 350, date: '11-23-2022'},{weight: 335, date: '12-17-2022'}])

  return (
    <div>
      <DisplayEntries parentEntries={entries} />
      

    </div>
  );
}

export default App;
