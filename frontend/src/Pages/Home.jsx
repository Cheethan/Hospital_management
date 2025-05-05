import React, { useContext } from "react";
import Hero from "../components/Hero";
import Departments from "../components/Departments";
import MessageForm from "../components/MessageForm";
import { Context } from "../main";

const Home = () => {
  const { isAuthenticated } = useContext(Context);

  return (
    <>
      <Hero
        title={"Welcome to DocEase Your Trusted Healthcare Provider"}
        imageUrl={"/hero.png"}
      />
      <Departments />
      {isAuthenticated ? (
        <MessageForm />
      ) : (
        <p
          style={{
            textAlign: "center",
            color: "#d9534f",
            fontWeight: "bold",
            marginTop: "20px",
            fontSize: "18px",
            border: "1px solid #d9534f",
            padding: "10px",
            borderRadius: "5px",
            backgroundColor: "#f8d7da",
          }}
        >
          Please log in to send a message.
        </p>
      )}
    </>
  );
};

export default Home;
