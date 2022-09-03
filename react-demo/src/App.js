import logo from './logo.svg';
import React,{useState} from 'react'

const App=() =>{
  const[search,setSearch]=useState('');
  const submitHandler=e=>{
    e.preventDefault();
    console.log(search);
  }

  return (
    <div>
      <center>
        <h4>Food recipe app</h4><br/>
        <form>
          <input type="text" value={search} onChange={(e)=>setSearch(e.target.value)}/><br/>
          <input type="submit" value="search"/>
        </form>
      </center>
    </div>
  );
}

export default App;
