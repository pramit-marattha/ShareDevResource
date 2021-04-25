import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ListPage from "./pages/ListPage";
import HomePage from "./pages/HomePage";
// import Loading from "./components/shared/Loading";
// import SignIn from "./components/SignIn";
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
  return "unauth";
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
