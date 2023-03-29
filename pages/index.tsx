import Login from "./Login/Login";
import Dashboard from "./Dashboard/dashboard";
import { useEffect, useState } from "react";
import { Layout } from "../layout/Layout";
import {useCheckAuth} from '../hooks'
import { Router, useRouter } from "next/router";
function VirtEdu() {
  const [isLogged, setIsLogged] = useState(false);
  
  
  return (
    <>
   {/* {
        
   } */}
        {/* <Layout>
          <Dashboard />
        </Layout>
      ) : (
        <Login setIsLogged={setIsLogged} />
      )} */}
    </>
  ); // Layout es el sidebar + navbar
}

export default VirtEdu;
