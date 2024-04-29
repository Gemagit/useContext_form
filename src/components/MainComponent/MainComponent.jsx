import React from "react";
import { useState } from 'react'
import Formulario from './Form'
import Card from './Card'

const MainComponent = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    url_img: "",
    age: ""
  });

  return (
    <section>
      <Formulario setUser={setUser} />
      <Card
        props={user}
      /* name={user.name}
      email={user.email}
      url_img={user.url_foto}
      age={user.age} */
      />
    </section>
  );
};

export default MainComponent;
