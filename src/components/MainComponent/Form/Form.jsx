import React from "react";
import { useState } from "react";


function Formulario({ setUser}) {
  
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [url_img, setUrlImg] = useState('');
    const [age, setAge] = useState('');
  
    const handleSubmit = (e) => {
      e.preventDefault();
     /*  console.log("Name:", name);
      console.log("Email:", email);
      console.log("url_img:", url_img);
      console.log("Age:", age); */

      setUser({name,email,url_img,age});
    };
  
    const handleChangeName = (e) => {
      setName(e.target.value);
    };
  
    const handleChangeEmail = (e) => {
      setEmail(e.target.value);
    };
  
    const handleChangeUrlImg = (e) => {
      setUrlImg(e.target.value);
    };
  
    const handleChangeAge = (e) => {
      setAge(e.target.value);
    };


  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}
        onChange={handleChangeName}
        placeholder="Name"
      />
      <br />
      <input
        type="email"
        value={email}
        onChange={handleChangeEmail}
        placeholder="Email"
      />
      <br />
      <input
        type="text"
        value={url_img}
        onChange={handleChangeUrlImg}
        placeholder="URL img"
      />
      <br />
      <input
        type="number"
        value={age}
        onChange={handleChangeAge}
        placeholder="Age"
      />
      <br />
      <button type="submit">Enviar</button>
    </form>
  );
}

export default Formulario;
