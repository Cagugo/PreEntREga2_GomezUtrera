import React, { useEffect } from "react";

import { useNavigate } from "react-router-dom";

const Contact = () => {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate("/");
    }, 2000);
  }, [navigate]);

  return <div>Contact</div>;
};

export default Contact;
