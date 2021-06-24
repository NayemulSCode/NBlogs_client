import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import BlogDetails from "./Blogs/BlogDetails";
import AddBlog from "./Dashboard/AddBlog";
import Dashboard from "./Dashboard/Dashboard";
import Login from "./Login/Login";
import Main from "./Main/Main";
import PrivateRoute from "./PrivateRouting/PrivateRoute";
import PublicRoute from "./PrivateRouting/PublicRoute";
function App() {
  return (
    <div className="">
      <Router>
        <Switch>
          <Route exact path="/">
            <Main />
          </Route>
          <PrivateRoute restricted={true} component={Dashboard} path="/dashboard" exact/>
            
          <Route path="/addBlog">
            <AddBlog />
          </Route>
          <Route path="/blog/:id">
            <BlogDetails />
          </Route>
          <PublicRoute restricted={false} component={Login} path="/signin"  exact/>
            
        </Switch>
      </Router>

    </div>
  );
}

export default App;
