import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Appoinment from './component/Appoinment/Appoinment';
import Footer from './component/Home/Home/Footer/Footer';
import Home from './component/Home/Home/Home';
import More from './component/Home/More/More';
import NavBar from './component/Home/NavBar/NavBar';
import Login from './component/Login/Login';
import Services from './component/Services/services';
import NotFound from './component/NotFound/NotFound'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/services">
            <Services />
          </Route>
          <Route path="/appoinment">
            <Appoinment />
          </Route>
          <Route path="/more">
            <More />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
