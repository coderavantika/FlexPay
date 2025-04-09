import React, { useEffect, useState } from "react";
import '../Styling/Home.css'; // ✅ correct path


const Home = () => {
  const [message, setMessage] = useState("");

  useEffect(() => {
    setTimeout(() => {
      setMessage("Welcome to FlexPay!");
    }, 1000); 
  }, []);

  return (
    <div className="home">
      <h1 className={`welcome-msg ${message ? "fade-in" : ""}`}>{message}</h1>
    </div>
  );
};

export default Home;
