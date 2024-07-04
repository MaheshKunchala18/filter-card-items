import { useEffect, useState } from 'react';
import './App.css';
import data from './celebrities.json';
import Card from './Components/Card';

function App() {
  const [query, setQuery] = useState('');
  const [items, setItems] = useState(data);

  useEffect(() => {
    let newItems = [];
    if(!query) {
      newItems = data;
    } else {
      newItems = data.filter((key) => {
        const first_name = key.first;
        const last_name = key.last;
        const full_name = key.first + ' ' + key.last;
        return (full_name.startsWith(query) || first_name.startsWith(query) || last_name.startsWith(query));
      });
    }
    setItems(newItems);
  }, [query]);
  

  const handleItems = (e) => {
    setQuery(e.target.value);
    // console.log(query);
  }


  return (
    <div className="App">
      <h1> List View </h1>
      <input onChange={handleItems} placeholder='Search User' type='text' />

      {items.map((item, ind) => {
        return <Card key={item.id} val={item} />
      })}

    </div>
  );
}

export default App;
