import "./styles.css";
import {useEffect} from 'react';
import UseFetch from './UseFetch';

export default function App() {

const apiData = UseFetch("https://jsonplaceholder.typicode.com/users")
console.log("apiData",apiData)

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}
