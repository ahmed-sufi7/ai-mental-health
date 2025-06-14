export async function submitCheckIn(text) {
  const res = await fetch('/api/mood/checkin', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ text })
  });
  return res.json();
}

export async function fetchTrends() {
  const res = await fetch('/api/mood/trends');
  return res.json();
}

export async function fetchSuggestions() {
  const res = await fetch('/api/mood/suggestions');
  return res.json();
}
