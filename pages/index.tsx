import Login from "./Login/login";
import Dashboard from "./Dashboard/dashboard";
import { useState } from "react";
import { Layout } from "../layout/Layout";

function VirtEdu() {
  const [isLogged, setIsLogged] = useState(false);
<<<<<<< HEAD
  return (
    <>
      {isLogged ? (
        <Layout>
          <Dashboard />
        </Layout>
      ) : (
        <Login setIsLogged={setIsLogged} />
      )}
    </>
  ); // Layout es el sidebar + navbar
=======
  return (<Messages/>)  // isLogged ?  <Layout><Messages></Messages></Layout>: <Login setIsLogged={setIsLogged} />)
  
  
// // Layout es el sidebar + navbar
>>>>>>> 570691be (Added ContactsList)
}

export default VirtEdu;
