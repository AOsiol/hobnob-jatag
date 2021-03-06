import React, { useState, useEffect } from "react";
import API from "./../utils/API";
import Wrapper from "../components/Wrapper";
import { Link } from "react-router-dom";
import { useAuth } from "../utils/auth";

function Profile() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const { user } = useAuth();

  useEffect(() => {
    API.getUser(user.id).then((res) => {
      setUsername(res.data.username);
      setEmail(res.data.email);
      setRole(res.data.role);
    });
  }, [user]);

  return (
    <Wrapper>
      <h1>On the profile page!</h1>
      <p>Username: {username}</p>
      <p>Email: {email}</p>
      <p>Role: {role}</p>
      <Link to="/">Go home</Link>
    </Wrapper>
  );
}

export default Profile;
