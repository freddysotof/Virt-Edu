import React, { useEffect } from "react";
import Dashboard from "./dashboard";
import { Layout } from "../../layout/Layout";
import { useCheckAuth } from "../../hooks";
import { useRouter } from "next/router";


function Home() {
  const { status } = useCheckAuth();
  const router = useRouter();
  useEffect(() => {
    if (status !== 'authenticated')
      router.push('/Login/Login')
  }, [status])
  return (
    <Layout>
      <Dashboard />
    </Layout>
  );
}

export default Home;
