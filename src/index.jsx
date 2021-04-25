import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ListPage from "./pages/ListPage";
import HomePage from "./pages/HomePage";
import Loading from "./components/shared/Loading";
import Register from "./components/Resgister";
import * as db from "./firestore";
// import useAuth from "./hooks/useAuth";

function App() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    return db.checkAuthentication((user) => {
      setLoading(false);
      setUser(user);
    });
  }, []);

  if (loading) return <Loading />;
  return user ? <AuthApp /> : <UnAuthApp />;
}

function AuthApp() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/:listId" component={ListPage} />
        <Route exact path="/" component={HomePage} />
      </Switch>
    </BrowserRouter>
  );
}

function UnAuthApp() {
  return (
    <div>
      <Register />
    </div>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
