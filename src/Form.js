import React, { useState } from "react";

const Form = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const onSubmit = e => {
    e.preventDefault();
    alert(`${name} (${description})`);
    setName("");
    setDescription("");
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        placeholder="name"
        value={name}
        onChange={e => setName(e.target.value)}
      />
      <input
        placeholder="description"
        value={description}
        onChange={e => setDescription(e.target.value)}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;
