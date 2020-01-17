import React, { useState } from "react";
import axios from 'axios';

export const DataFetcher = () => {
    const [data, setData] = useState([]);
    const fetchData = URL => {
        axios.get(URL).then(response => { console.log(response.data); setData(response.data); }).catch((error) => console.log(error)).finally(() => {});
    }
    // const handleChanges = updatedValue => {
    //   setValue(updatedValue);
    // };
    return [data, setData, fetchData];
  };