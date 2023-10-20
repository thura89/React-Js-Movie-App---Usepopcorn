import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
// import StarRating from "./StarRating";

const root = ReactDOM.createRoot(document.getElementById("root"));

// const StarTestFunc = () => {
//   const [onSett, setOnSet] = useState(0);
//   return (
//     <div>
//       <StarRating setOnSet={setOnSet}></StarRating>
//       <p>{`Bla Bla Bla Rating Coutt ${onSett}`}</p>
//     </div>
//   );
// };
root.render(
  <React.StrictMode>
    <App />
    {/* <StarRating maxRating={5}></StarRating>
    <StarRating
      maxRating={5}
      messages={["Terrible", "Bad", "Okay", "Good", "Amazing"]}
    ></StarRating>
    <StarRating maxRating={5} size={50} color={"red"}></StarRating>
    <StarTestFunc></StarTestFunc> */}
  </React.StrictMode>
);
