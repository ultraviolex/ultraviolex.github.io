import { Navigate } from "react-router-dom";
import Login from "../pages/login";

export const authorize = (Event) => {
  const input = Event.target.password.value;
  if (input === "password") {
    console.log("Authorized");
    return <Navigate to="/negotiation" replace={true} />;
  } else {
    return (
      <>
        Login
        <p>Incorrect Password</p>
      </>
    );
  }
};
