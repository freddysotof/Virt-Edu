import Login from "./Login/login";
import Dashboard from "./Dashboard/dashboard";
import { useState } from "react";
import { Layout } from "../layout/Layout";
import "bootstrap/dist/css/bootstrap.min.css";

function VirtEdu() {
  const [isLogged, setIsLogged] = useState(false);
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
}

export default VirtEdu;
