import React from 'react';
import './App.css';
import Login from "./components/login/login";
import Register from "./components/register/register";
import {ContextExample} from "./components/context/ContextExample";
import {Example} from "./components/context/Example";
import {Accordion} from "./components/shareState/Accordion";
import {SyncInput} from "./components/shareState/SyncInput";

function App() {
  return (<>
        <Login/>
        <Register/>
        <ContextExample/>
        <Example/>
        <Accordion/>
        <SyncInput/>
      </>
  );
}

export default App;
