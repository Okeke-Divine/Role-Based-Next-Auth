"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

const UserForm = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({});
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault;
    setErrorMessage("");
    const res = await fetch("/api/Users", {
      method: "POST",
      body: JSON.stringify({ formData }),
      "content-type": "application/json",
    });

    if (!res.ok) {
      const response = await res.json();
      setErrorMessage(response.message);
    } else {
      router.refresh();
      router.push("/");
    }
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        method="POST"
        className="flex flex-col gap-3 w-1/2"
      >
        <h1>Create New User</h1>
        <label>Full Name</label>
        <input
          required
          type="text"
          onChange={handleChange}
          id="name"
          name="name"
          value={formData.name}
          className="rounded bg-slate-400 m-2"
        />
        <label>Email</label>
        <input
          required
          type="email"
          onChange={handleChange}
          id="email"
          name="email"
          value={formData.email}
          className="rounded bg-slate-400 m-2"
        />
        <label>Password</label>
        <input
          required
          type="password"
          onChange={handleChange}
          id="password"
          name="password"
          value={formData.password}
          className="rounded bg-slate-400 m-2"
        />
        <input
          value="Create User"
          type="submit"
          className="bg-blue-300 hover:bg-blue-100 text-white"
        />
      </form>
      <p className="text-red-500">{errorMessage}</p>
    </>
  );
};

export default UserForm;
