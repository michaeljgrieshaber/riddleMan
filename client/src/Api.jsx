import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";

const airtableBase = process.env.REACT_APP_AIRTABLE_BASE;
const airtableKey = process.env.REACT_APP_AIRTABLE_KEY;

const URL = `https://api.airtable.com/v0/${airtableBase}/Table%201?`;

const config = {
  headers: {
    Authorization: `Bearer ${airtableKey}`,
  },
};

export default function Api() {
  const [riddles, setRiddles] = useState([]);

  useEffect(() => {
    async function getRiddles() {
      const res = await axios.get(URL, config);
      setRiddles(res.data.records);
    }
    getRiddles();
  }, []);

  function typeHere(x) {
    return `${x} letters`
  }


  
  function match(e, answer) {
    console.log(answer)
      if (e === answer) {
        alert('correct!')
      } 
    }
  


  return (
    <div>
      {riddles.map((riddle, id) => {
        return (
          <div key={id}>
            <div>{riddle.fields.Riddle}</div>

              <form>
                <input
                placeholder={ typeHere(riddle.fields.Answer.split("").length) }
                onChange={(e) => match(e.target.value.toLowerCase(), riddle.fields.Answer)}
                className={''}
                // maxLength = {1}
                >
                
                </input>
              </form>
              <br></br>
          </div>
        );
      })}
    </div>
  );
}
