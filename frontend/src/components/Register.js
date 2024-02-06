import React from "react";
import { Navbar } from "./Navbar";
import { useState } from "react";

const Register = () => {
  const [name, setName] = useState("");
  const [department, setDepartment] = useState("");
  const [college, setCollege] = useState("");
  // const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const details = { name, department, college };

    const response = await fetch("threads/register", {
      method: "POST",
      body: JSON.stringify(details),
      headers: {
        "Content-Type": "application/json",
        // 'Authorization': `Beared ${user.token}`
      },
    });

    const json = await response.json();

    // if (!response.ok) {
    //   console.log(json.error);
    //   setError(json.error);
    // }
    if (response.ok) {
      // setError(null);
      setName("");
      setDepartment("");
      setCollege("");
      console.log("New details added!", json);
    }
  };

  return (
    <div>
      this is Register page
      <form className="create" onSubmit={handleSubmit}>
        <h3>Add a new form</h3>

        <label>Name:</label>
        <input
          type="text"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />

        <label>department:</label>
        <input
          type="text"
          onChange={(e) => setDepartment(e.target.value)}
          value={department}
        />

        <label>college:</label>
        <input
          type="text"
          onChange={(e) => setCollege(e.target.value)}
          value={college}
        />

        <button>Add workout</button>
        {/* {error && <div className="error">{error}</div>} */}
      </form>
    </div>
  );
};

export default Register;
