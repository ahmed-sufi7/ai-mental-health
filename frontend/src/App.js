import React from 'react';
import CheckInForm from './components/CheckInForm';
import { submitCheckIn } from './services/api';
import Dashboard from './components/Dashboard';

function App() {
  const handleCheckIn = async (text) => {
    const result = await submitCheckIn(text);
    alert(JSON.stringify(result));
  };

  return (
    <div>
      <h1>AI Mental Health Assistant</h1>
      <CheckInForm onSubmit={handleCheckIn} />
      <Dashboard />
      {/* TODO: Add more advanced features */}
    </div>
  );
}

export default App;
