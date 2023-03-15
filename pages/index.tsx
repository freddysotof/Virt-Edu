import Login from "./Login/login";
import Dashboard from "./Dashboard/dashboard";
import { useState } from "react";
function VirtEdu() {
  const [isLogged, setIsLogged] = useState(false);
  return <>{isLogged ? <Dashboard /> : <Login setIsLogged={setIsLogged} />}</>;
}

export default VirtEdu;
