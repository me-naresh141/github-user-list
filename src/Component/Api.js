import React, { useState, useEffect } from "react";
import Card from "./Card";
import Loader from "./Loader";

const UserCard = () => {
  const [user, setUser] = useState([]);
  const [Loading, setLoading] = useState(true);

  const getUser = async () => {
    try {
      setLoading(false);
      const response = await fetch("https://api.github.com/users");
      setUser(await response.json());
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  if (Loading) {
    return <Loader />;
  }
  return <Card user={user} />;
};

export default UserCard;
