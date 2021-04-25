import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ListPage from "./pages/ListPage";
import HomePage from "./pages/HomePage";
// import Loading from "./components/shared/Loading";
import Register from "./components/Resgister";
// import useAuth from "./hooks/useAuth";

function App() {
  return (
    <>
      <div>Hello There</div>
      <div></div>
    </>
  );
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
  return <Register />;
}

ReactDOM.render(
  <React.StrictMode>
    <UnAuthApp />
  </React.StrictMode>,
  document.getElementById("root")
);
