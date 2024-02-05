import React, { useState } from 'react';

const UseState = () => {
  const [age, setAge] = useState(20);
  const [name, setName] = useState('Youssef');

  const whenSubmit = (e : React.FormEvent) => {
    e.preventDefault();

    const value = e.target?.nameInput.value || '';
    setName(value);
    setAge((c) => c + 1);
  };

  return (
    <>
      <form action="" method="post" onSubmit={whenSubmit}>
        <input type="text" name="nameInput" placeholder="name" />
        <br />
        <button className="border-separate border-black" type="submit">
          Increment Age {age}++
        </button>
      </form>
      <br />

      <p>
        Hello My name is : {name} &nbsp;&nbsp;my Age is : {age}
      </p>
    </>
  );
};

export default UseState;
