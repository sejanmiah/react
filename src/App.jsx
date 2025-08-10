// import { useState } from "react";
// import Mirror from "./Mirror";

import Counter from "./Counter";

export default function Form() {
  // const [firstName, setFirstName] = useState('');
  // const [lastName, setLastName] = useState('');
  // // const [fullName, setFullName] = useState('');

  // function handleFirstNameChange(e) {
  //   setFirstName(e.target.value);
  //   // setFullName(e.target.value + ' ' + lastName);
  // }

  // function handleLastNameChange(e) {
  //   setLastName(e.target.value);
  //   // setFullName(firstName + ' ' + e.target.value);
  // }

  // const fullName = firstName + " " + lastName;

  // const [color, setColor] = useState("black");

  // const handleChangeColor = () => {
  //   alert("Hello Color Changed");
  //   setColor("#1b1b1b");
  // };

 

  return (
    <>
      {/* <h2>Let’s check you in</h2>
      <label>
        First name:{' '}
        <input
        className='border'
          value={firstName}
          onChange={handleFirstNameChange}
        />
      </label>
      <br />
      <label>
        Last name:{' '}
        <input
        className='border'
          value={lastName}
          onChange={handleLastNameChange}
        />
      </label>
      <p>
        Your ticket will be issued to: <b>{fullName}</b>
      </p>
      <br />
      <br />
      <br /> */}
      {/* <Mirror color={color}></Mirror>
      <br />
      <button
        onClick={handleChangeColor}
        class="bg-blue-500 cursor-pointer text-white font-bold py-2 px-4 rounded"
      >
        Change Color
      </button> */}

      <Counter></Counter>
    </>
  );
}
