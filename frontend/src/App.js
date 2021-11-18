
import './App.css';
import React,{useState,useEffect} from 'react';
import axios from 'axios';

function App() {

  const [fruit, setFruit] = useState([]);
  const [identity, setId] = useState(0);
  const [name, setName] = useState(0);
  const [search, setSearch] = useState("");
  const [filteritems, setFilteritems] = useState([]);
  
 

  useEffect(() => {
    
    axios.get('http://localhost:3010/testApi')
    .then(res => {
      setFruit(res.data);
      setId(res.data[0].identity)
      setName(res.data[0].name)

    })
    .catch(err=> {
      console.log(err);
      console.log(identity);
      console.log(name);
    })
  },[]);
   
  useEffect(() => {
    setFilteritems(
      fruit.filter((item) => item.name.toLowerCase().trim().includes(search.trim().toLowerCase())))
  },[search,fruit]);

  return (
    <div className="App">
      
      <form action="/" method="get" autoComplete="off" >
                <label htmlFor="header-search">
                    <span className="visually-hidden">Fruits List</span>
                </label>
                <input
                    className = 'search_value'
                    type = 'text'
                    placeholder="Fruits List" 
                    onChange = {(e) => setSearch(e.target.value)}
                />
                <button type="submit">Search</button>
            </form>
        <ul>
            {filteritems.map((item)=>(
                <li  key={item.identity}>{item.name}</li>
            ))}
        </ul>
    </div>
  );
}

export  App;
