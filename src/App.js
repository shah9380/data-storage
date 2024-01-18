import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Directory from './components/Directory/Directory'
import Button from './components/Directory/Button';
import { useState } from 'react';

function App() {
  let[changeTo,setChangeTo] = useState(true);
  const changeMe = (e)=>{
      if(e.target.value === "Add new Person"){
        setChangeTo(true);
        console.log("add");
      }else if(e.target.value === "Retrieve Information"){
        setChangeTo(false);
        console.log("rerieve");
      }
  }
  return (
    <div className="App">
      <Header></Header>
      <div className='border max-w-[1200px] mx-auto text-start my-8'>
        <Button change={changeMe} value="Add new Person" content="Add new Person"></Button>
        <Button change={changeMe} value="Retrieve Information" content="Retrieve Information"></Button>
      </div>
      <Directory change={changeTo}></Directory>
    </div>
  );
}

export default App;
