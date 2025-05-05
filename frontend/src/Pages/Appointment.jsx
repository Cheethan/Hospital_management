import React, { useContext } from "react";
import Hero from "../components/Hero";
import AppointmentForm from "../components/AppointmentForm";
import { Context } from "../main";

const Appointment = () => {
  const { isAuthenticated } = useContext(Context);

  return (
    <>
      <div style={{ marginTop: "20px" }}>
        <Hero title={"Schedule Your Appointment"} imageUrl={"/signin.png"} />
      </div>
      {isAuthenticated ? (
        <AppointmentForm />
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
          Please log in to schedule an appointment.
        </p>
      )}
    </>
  );
};

export default Appointment;
