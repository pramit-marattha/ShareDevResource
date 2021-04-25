import React from "react";
import CreateList from "../components/CreateList";
import Lists from "../components/Lists";
import Layout from "../components/shared/Layout";

function HomePage() {
  return (
    <Layout>
      <CreateList />
      <Lists />
    </Layout>
  );
}

export default HomePage;
