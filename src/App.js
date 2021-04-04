
import AddItem from './components/AddItem/AddItem';
import Welcome from './components/homepage/homepage';
import Navbar from './components/Navbar/Navbar';
import { Route, Switch } from "react-router-dom";
import Homepage from './pages/homepage';
import Home from "./pages/Home"

import { UserRoute } from './components/privateRoute/privateRoute';
import Signup from './pages/Signup';
import Signin from './pages/Signin';


function App() {
  return (
    <div className="App">
      <header className="App-header">
       <Navbar/>
       <div>
      <Switch>
        <Route exact path={"/"} component={Homepage} />
        <Route exact path={"/additem"} component={AddItem} />
        <Route exact path={"/signup"} component={Signup}  />
        <Route exact path={"/signin"} component={Signin}  />
        <UserRoute exact path={"/home"} component={Home}  />
      </Switch>
    </div>
      </header>
    </div>
  );
}

export default App;
