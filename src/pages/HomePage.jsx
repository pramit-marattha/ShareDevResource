import React from "react";
import CreateList from "../components/CreateList";
import Lists from "../components/Lists";
import Layout from "../components/shared/Layout";
import { UserContext } from "../index";
import Navbar from "../components/shared/Navbar";

function HomePage() {
  const user = React.useContext(UserContext);
  console.log(user);

  return (
    <Layout>
      <Navbar user={user} />
      <CreateList user={user} />
      <Lists />
    </Layout>
  );
}

export default HomePage;
