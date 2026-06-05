import { useState, useEffect } from 'react';
import axios from 'axios';

export default function App() {
  const [ message, setMessage ] = useState("");

  const API_URL = import.meta.env.VITE_APP_API_URI || 'http://localhost:5000';

  // Axios 
  useEffect(() => {
    axios.get(`${API_URL}/api/message`)
      .then(response => {
        setMessage(response.data.message);
      })
      .catch(error => {
        console.error('Error fetching message:', error);
      });
  }, [API_URL]);

  // Fetch
  useEffect(() => {
    fetch(`${API_URL}/api/message`)
      .then(response => response.json())
      .then(data => setMessage(data.message))
      .catch(error => console.error('Error fetching message:', error));
  }, [API_URL]);

  // Async/Await

  useEffect(() => {
    const fetchMessage = async () => {
      try {
        const response = await axios.get(`${API_URL}/api/message`);
        if (response.data && response.data.message) {
          throw new Error('Invalid response format: "message" field is missing');
        }
        setMessage(response.data.message);
        console.log('Message fetched successfully:', response.data.message);
      } catch (error) {
        console.error('Error fetching message:', error);
      }
    };

    fetchMessage();
  }, [API_URL]);

  return (
    <>  
    <div className="App">
      <h1>Message from the server:</h1>
      <p>{message}</p>
    </div>
    </>
  );
}
