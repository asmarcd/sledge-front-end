import React, { useState } from 'react';
import './App.css';
import TicketDisplay from './components/TicketDisplay';
import Navbar from './components/Navbar';

export const ViewContext = React.createContext();

function App() {

  const [ticketCreatorView, setTicketCreatorView] = useState(false)

  const openTicketCreator = () => {
    setTicketCreatorView(true);
  }

  return (
    <div className="App">
      <ViewContext.Provider value={openTicketCreator}>
        <Navbar />
      </ViewContext.Provider>
      <TicketDisplay />
    </div>
  );
}

export default App;
