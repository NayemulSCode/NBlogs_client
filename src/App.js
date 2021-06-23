import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import AddBlog from "./Dashboard/AddBlog";
import Dashboard from "./Dashboard/Dashboard";
import Main from "./Main/Main";
function App() {
  return (
    <div className="">
      <Router>
        <Switch>
          <Route exact path="/">
            <Main />
          </Route>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
          <Route path="/addBlog">
            <AddBlog />
          </Route>
        </Switch>
      </Router>

    </div>
  );
}

export default App;
