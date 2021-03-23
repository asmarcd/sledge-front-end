import React, { useState } from 'react';
import './App.css';
import TicketDisplay from './components/TicketDisplay/TicketDisplay';
import Navbar from './components/Navbar/Navbar';
import TicketCreator from './components/TicketCreator/TicketCreator';

export const ViewContext = React.createContext();

function App() {

  const [ticketCreatorView, setTicketCreatorView] = useState(false);
 
  const toggleTicketCreator = () => {
    if (!ticketCreatorView) {
      setTicketCreatorView(true);
    } else {
      setTicketCreatorView(false);
    }
  };

  return (
    <div className="App">
      <ViewContext.Provider value={toggleTicketCreator}>
        <Navbar />
        {ticketCreatorView ? <TicketCreator /> : <div></div> }
        <TicketDisplay />
      </ViewContext.Provider>
    </div>
  );
}

export default App;
