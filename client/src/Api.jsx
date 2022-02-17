import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";

const airtableBase = process.env.REACT_APP_AIRTABLE_BASE;
const airtableKey = process.env.REACT_APP_AIRTABLE_KEY;
// console.log(airtableBase, airtableKey)

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
    return <div>{x} letters</div>;
  }


  
  function match(e, answer) {
    console.log(e)
    console.log(answer)
      if (e === answer) {
        alert('correct')
      }
    }
  



  return (
    <div>
      {riddles.map((riddle, id) => {
        return (
          <div key={id}>
            <div>{riddle.fields.Riddle}</div>
            {typeHere(riddle.fields.Answer.split("").length)}

            <form>
            <input
              placeholder="your answer here"
                // onChange={(e) => console.log(e.target.value)}
                onChange={(e) => match(e.target.value,riddle.fields.Answer)}


                // maxLength = {1}
            
            
            
            ></input>
              {/* <button>Submit</button> */}
              </form>
          </div>
        );
      })}
    </div>
  );
}
