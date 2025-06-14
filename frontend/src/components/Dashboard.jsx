import React, { useEffect, useState } from 'react';
import { fetchAllEntries } from '../services/api';
import { Line } from 'react-chartjs-2';

function Dashboard() {
  const [entries, setEntries] = useState([]);

  useEffect(() => {
    fetchAllEntries().then(data => {
      if (data.success) setEntries(data.entries);
    });
  }, []);

  // Prepare data for the mood trend graph
  const dates = entries.map(e => new Date(e.date).toLocaleDateString());
  const scores = entries.map(e => e.sentimentScore);

  const chartData = {
    labels: dates.reverse(),
    datasets: [
      {
        label: 'Sentiment Score',
        data: scores.reverse(),
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1
      }
    ]
  };

  // Detect triggers and highlight days
  const triggerCounts = {};
  entries.forEach(e => {
    (e.triggers || []).forEach(t => {
      triggerCounts[t] = (triggerCounts[t] || 0) + 1;
    });
  });
  const topTriggers = Object.entries(triggerCounts)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 3);

  return (
    <div>
      <h2>Mood Trend</h2>
      <Line data={chartData} />
      <h3>Recent Entries</h3>
      <ul>
        {entries.slice(0, 7).map((e, i) => (
          <li key={i}>
            <b>{new Date(e.date).toLocaleDateString()}:</b> {e.emotion} (Score: {e.sentimentScore})<br />
            <i>{e.text}</i>
          </li>
        ))}
      </ul>
      <h3>Top Triggers</h3>
      <ul>
        {topTriggers.map(([trigger, count], i) => (
          <li key={i}>{trigger} ({count} times)</li>
        ))}
      </ul>
    </div>
  );
}

export default Dashboard;
