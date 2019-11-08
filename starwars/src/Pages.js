// import React, { useState, useEffect } from "react";
// import axios from "axios";

// const Pages = () => {
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     axios
//       .get("https://swapi.co/api/people/")
//       .then(response => {
//         setData(response.data.next);
//         console.log(response.data.next);
//       })
//       .catch(error => {
//         console.log("The data was not returned.");
//       });
//   }, []);

// const NextPage = () => {
//     useEffect(() => {
//         axios
//           .get(data)
//           .then(response => {
//             setData(response.data.next);
//             console.log(response.data.next);
//           })
//           .catch(error => {
//             console.log("The data was not returned.");
//           });
//       }, []);
// }

//   return (
//     <>
//           <button onClick=
//           >Next Page</button>
//     </>
//   );
// };

// export default Pages;
