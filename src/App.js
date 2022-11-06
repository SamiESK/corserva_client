import React, {useEffect, useState} from 'react';

function App() {

  const {salesData, setSalesData} = useState([{}]);
  useEffect(() => {
    fetch('/sales')
      .then(response => response.json())
      .then(data => setSalesData(data));
  }, []);

  return (
    <div className="App">
      
    </div>
  );

}

export default App;