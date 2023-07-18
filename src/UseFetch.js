import {useEffect, useState} from 'react';

let UseFetch = (url) => {

  const[api, setApi] = useState("");

  useEffect(() => {

  let callApi = async (u) => {
    let response = await fetch(u);
    let data = await response.json();
    setApi(data);

  }

  callApi(url);

},[])

return api;

}


export default UseFetch;