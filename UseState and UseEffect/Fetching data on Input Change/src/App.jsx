import { useState, useEffect } from 'react';

const App = () => {
  // Step 1: Initialize state
  const [inputValue, setInputValue] = useState('');
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Step 2: Handle input changes
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  // Step 3: Fetch data on input change
  useEffect(() => {
    if (inputValue === '') {
      setData([]);
      return;
    }

    const fetchData = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users?name_like=${inputValue}`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const result = await response.json();
        setData(result);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [inputValue]);

  // Step 4: Render the component
  return (
    <div>
      <h1>Fetch Data on Input Change</h1>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Search users..."
      />
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      <ul>
        {data.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;
