import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const profiledata = [
  {
    name: "SATYAM KALE",
    bio: "open source enthusiast, love to contribute and currently learning reverse engineering and binary exploitation.",
    photoName: "images/satyam.jpg",
  },
];

function App() {
  return (
    <div>
      <Body />
    </div>
  );
}

function Body() {
  const profile = profiledata;
  return (
    <div className="center">
      {profile.map((profiles) => (
        <Card cardobj={profiles} key={profiles.name} />
      ))}
    </div>
  );
}

function Card({ cardobj }) {
  return (
    <div className="color">
      <img src={cardobj.photoName} alt={cardobj.name} />
      <h1>{cardobj.name}</h1>
      <p>{cardobj.bio}</p>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
