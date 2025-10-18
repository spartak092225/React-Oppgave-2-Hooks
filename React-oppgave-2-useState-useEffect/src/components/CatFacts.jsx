import { useState, useEffect } from 'react';
import './CatFacts.css';

function CatFacts() {
  const [facts, setFacts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://catfact.ninja/facts?limit=5')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Noe gikk galt med API-et');
        }
        return response.json();
      })
      .then((data) => {
        setFacts(data.data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p style={{ color: 'red' }}>Feil: {error}</p>;
  }

  return (
    <div className="main-container">
      <h1>🐾 &nbsp; Cat Facts &nbsp; 🐾</h1>
      <ul>
        {facts.map((fact, index) => (
          <li key={index}>{fact.fact}</li>
        ))}
      </ul>
    </div>
  );
}

export default CatFacts;
