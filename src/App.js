import React, { useState } from 'react';
import './App.css';
import TicketDisplay from './components/TicketDisplay';
import Navbar from './components/Navbar';
import TicketCreator from './components/TicketCreator';

export const ViewContext = React.createContext();

function App() {

  const [ticketCreatorView, setTicketCreatorView] = useState(false)

  const toggleTicketCreator = () => {
    if (!ticketCreatorView) {
      setTicketCreatorView(true);
    } else {
      setTicketCreatorView(false);
    }
  }

  return (
    <div className="App">
      <ViewContext.Provider value={toggleTicketCreator}>
        <Navbar />
        {ticketCreatorView ? <TicketCreator /> : <TicketDisplay />}
      </ViewContext.Provider>
    </div>
  );
}

export default App;
