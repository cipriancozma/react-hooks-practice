import React, { useState } from "react";

export default function Register() {
    const [ form, setForm ] = useState({
        username: "",
        email: "",
        password: ""
    })

    const [user, setUser] = useState(null);

    const handleChange = (event) => {
        setForm({
            ...form,
            [event.target.name]: event.target.value
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        setUser(form);
        setForm({
            username: "",
            email: "",
            password: ""
        })
    }

  return (
    <div
      style={{
        textAlign: "center",
      }}
    >
      <h1>Register</h1>
      <form
        style={{
          display: "grid",
          alignItems: "center",
          justifyItems: "center",
        }}
        onSubmit={handleSubmit}
      >
        <input type="text" placeholder="username" name="username" onChange={handleChange} value={form.username}/>
        <input type="email" placeholder="email" name="email" onChange={handleChange} value={form.email}/>
        <input type="password" placeholder="password" name="password"  onChange={handleChange} value={form.password}/>
        <button>Submit</button>
      </form>
      { user && JSON.stringify(user) }
    </div>
  );
}
