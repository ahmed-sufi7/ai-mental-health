import React, { useState } from 'react';

function CheckInForm({ onSubmit }) {
  const [text, setText] = useState('');
  // TODO: Add voice input support

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(text);
    setText('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <textarea value={text} onChange={e => setText(e.target.value)} placeholder="How are you feeling today?" />
      <button type="submit">Submit</button>
    </form>
  );
}

export default CheckInForm;
