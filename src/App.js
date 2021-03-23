import React, { useState } from 'react';
import './App.css';
import TicketDisplay from './components/TicketDisplay/TicketDisplay';
import Navbar from './components/Navbar/Navbar';
import TicketCreator from './components/TicketCreator/TicketCreator';

export const ViewContext = React.createContext();

function App() {

  const [ticketCreatorView, setTicketCreatorView] = useState(false);

  const toggleTicketCreator = () => {
    setTicketCreatorView(!ticketCreatorView);
  };

  return (
    <div className="App">
      <ViewContext.Provider value={toggleTicketCreator}>
        <Navbar />
        {ticketCreatorView ?
          <div>
            <TicketCreator />
            <TicketDisplay />
          </div> : <TicketDisplay />}
      </ViewContext.Provider>
    </div>
  );
}

export default App;
