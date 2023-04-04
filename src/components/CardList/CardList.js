import React, { useEffect, useState } from "react";
import "./CardListComponent.css";
import CardUser from "../CardUser/CardUser";
import axios from "axios";

import { Link } from "react-router-dom";

const CardList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios(
      "https://api.spoonacular.com/recipes/complexSearch?apiKey=33d6f915aa4044ac95eade495364d470&query=tacos"
    ).then((res) => setUsers(res.data));
  }, []);
  return (
    <div className="Cards-List">
      {users.results
        ? users.results.map((user) => {
            return (
              <div key={user.id}>
                <Link to={`/user-detail/${user.id}`}>
                  <CardUser data={user} />
                </Link>
              </div>
            );
          })
        : null}
    </div>
  );
};

export default CardList;
