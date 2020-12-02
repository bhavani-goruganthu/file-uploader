import logo from './logo.svg';
import React from 'react';
import './App.css';
import axios from 'axios';

function App() {
  const [data, setData] = React.useState();

  const upload = () => {
    const formData = new FormData();

    // Update the formData object 
    formData.append(
      'file',
      data,
      data.name
    );
    axios.post('upload', formData);
  };

  return (
    <div className="App">
      <input type="file" onChange={e => setData(e.target.files[0])} />
      <button onClick={upload}>Upload</button>
    </div>
  );
}

export default App;
