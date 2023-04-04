import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import CardUser from "../../components/CardUser/CardUser";

const UserDetail = () => {
  const [user, setUser] = useState({});

  let { id } = useParams();

  useEffect(() => {
    axios(`https://jsonplaceholder.typicode.com/users/${id}`).then((res) =>
      setUser(res.data)
    );
  }, [id]);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "cente",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <h1>User Detail</h1>
      <CardUser data={user} />
    </div>
  );
};

export default UserDetail;
