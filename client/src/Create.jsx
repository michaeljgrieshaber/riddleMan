// import axios from "axios";
// import { useState } from "react";
// import Form from "./Form";
// import { useHistory } from "react-router-dom";

// const airtableBase = process.env.REACT_APP_AIRTABLE_BASE;
// const airtableKey = process.env.REACT_APP_AIRTABLE_KEY;

// const URL = `https://api.airtable.com/v0/${airtableBase}/P2`;

// const config = {
//   headers: {
//     Authorization: `Bearer ${airtableKey}`,
//   },
// };

// export default function Create() {
//   const [joke, setJoke] = useState("");
//   const [author, setAuthor] = useState("");
//   const [votes] = useState(0);

//   const history = useHistory();
//   function handleHistory() {
//     history.push("/");
//   }

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const fields = {
//       joke,
//       author,
//       votes,
//     };

//     await axios.post(URL, { fields }, config);
//     alert("you made a funny!");
//     handleHistory();
//   };

//   return (
//     <div className="createPage">
//       <Navbar />
//       <div className="create">
//         Submit your own joke below!
//         <Form
//           joke={joke}
//           setJoke={setJoke}
//           author={author}
//           setAuthor={setAuthor}
//           handleSubmit={handleSubmit}
//           type={"Submit"}
//         />
//       </div>
//     </div>
//   );
// }
