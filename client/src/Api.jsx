import React from 'react';
import axios from "axios"
import { useEffect } from "react";

const airtableBase = process.env.REACT_APP_AIRTABLE_BASE;
const airtableKey = process.env.REACT_APP_AIRTABLE_KEY;

const URL = `https://api.airtable.com/v0/${airtableBase}/Table%201?`;

const config = {
  headers: {
    Authorization: `Bearer ${airtableKey}`,
  },
};



export default function Api() {


  useEffect(() => {
    async function getRiddles() {
      const res = await axios.get(URL, config);
      let riddleArray = res.data.records;

        console.log(riddleArray)
      
    }
    getRiddles();
  },);






  return <div></div>;
}
