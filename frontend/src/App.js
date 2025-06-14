import React from 'react';
import CheckInForm from './components/CheckInForm';
import { submitCheckIn } from './services/api';

function App() {
  const handleCheckIn = async (text) => {
    const result = await submitCheckIn(text);
    alert(JSON.stringify(result));
  };

  return (
    <div>
      <h1>AI Mental Health Assistant</h1>
      <CheckInForm onSubmit={handleCheckIn} />
      {/* TODO: Add dashboard, suggestions, etc. */}
    </div>
  );
}

export default App;
