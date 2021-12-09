import React, { useState, useEffect } from "react";
import axios from "axios";

import "./directory.styles.css";

import MenuItem from "../menu-item/menu-item.component";

const Directory = () => {
  const [sections, setSections] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/sections/")
      .then(({ data }) => {
        console.log("SECTIONS: ", data);
        setSections(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="directory">
      {sections.map(({ _id, ...otherProps }) => (
        <MenuItem key={_id} {...otherProps} />
      ))}
    </div>
  );
};

export default Directory;
