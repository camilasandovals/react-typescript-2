import { Tform, defaultForm } from "../interfaces";
import React from "react";

const Form = () => {
  const [form, setForm] = React.useState<Tform>(defaultForm)
  const [counter, setCounter] = React.useState<number>(0)

  const handleCounter = () => {
    // setCounter(counter + 1)
    setCounter(counter => counter + 1)
  }
  const handleFormInput = (e: React.FormEvent) => {
    const target = e.target as HTMLInputElement;
    setForm({
      ...form,
      [target.name]: target.value
    })
  }

console.log("here is the form", form)

return (
    <>
      <form action='submit'>
        <label htmlFor='firstName'>First Name</label>
        <input type= 'text' name='firstname' id='' onChange={(e) => handleFormInput(e)} />
        <br />

        <label htmlFor="lastname">Last Name</label>
        <input type="text" name="lastname" id='' onChange={handleFormInput} />
        <br />

        <label htmlFor="email">Email</label>
        <input type="text" name="email" id='' onChange={handleFormInput} />
        <br />

        <label htmlFor="password">Password</label>
        <input type="password" name="password" id='' onChange={handleFormInput} />
      </form>
      <button onClick={handleCounter}>{counter}</button>
    </>
  )

}

export default Form;